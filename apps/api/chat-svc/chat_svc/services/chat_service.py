# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

import torch
from prisma import Prisma
from datetime import datetime
from operator import itemgetter
from prisma.models import ChatHistory
from base_core.processor import Processor
from langchain_core.prompts import PromptTemplate
from langchain_community.vectorstores import FAISS
from langchain_community.llms import HuggingFaceHub
import chat_svc.grpc.chat_service_pb2_grpc as handler
from langchain_core.output_parsers import StrOutputParser
from langchain.schema.messages import AIMessage, HumanMessage
from langchain_core.runnables import RunnableBranch, RunnableLambda, RunnableMap


class ChatService(handler.ChatServiceServicer):
    ITEM_GETTER = "Itemgetter:question"

    def __init__(self):
        self.processors = Processor()
        self.llm = HuggingFaceHub(
          repo_id="foxminchan/law-knowledge", model_kwargs={
            "temperature": 0.5, "max_length": 100, "device": "cuda" if torch.cuda.is_available() else "cpu"
          }
        )
        self.db = FAISS.load_local("vector", self.processors.embedding_model())
        self.chat_template = """Bạn là một luật sư, bạn đang đọc một văn bản pháp luật. Sử dụng ngữ cảnh được cung
        cấp, hãy trả lời câu hỏi của người dùng trong khả năng tốt nhất bằng cách sử dụng các dữ liệu đã được cung
        cấp. Hãy trả lời các câu hỏi tổng quát và có nhiều thông tin (nhưng không quá 100 từ) cho một câu hỏi nhất
        định. Nếu không có thông tin liên quan trong ngữ cảnh, chỉ cần nói "Hmm, tôi không chắc." Đừng cố gắng bịa ra
        một câu trả lời. Luôn luôn nói "Cảm ơn bạn đã hỏi" hoặc "Cảm ơn bạn đã đọc" khi kết thúc câu trả lời của bạn.

        {context}

        Câu hỏi: {question}

        Câu trả lời:"""
        self.template = PromptTemplate.from_template(self.chat_template)
        self.retriever = self.db.as_retriever()
        self.prisma = Prisma(auto_register=True)
        self.prisma.connect()

    @staticmethod
    def format_docs(docs):
        return "\n".join([f"{i + 1}. {doc}" for i, doc in enumerate(docs)])

    @staticmethod
    def serialize_history(history):
        return [HumanMessage(content=chat[1]) if chat[0] == "human" else AIMessage(content=chat[1]) for chat in history]

    def create_retrieval_chain(self):
        condense_question_chain = (
          self.template | self.llm | StrOutputParser()
        ).with_config(
          run_name="CondenseQuestion",
        )
        conversation_chain = condense_question_chain | self.retriever
        return RunnableBranch(
          (
            RunnableLambda(lambda x: bool(x.get("chat_history"))).with_config(
              run_name="HasChatHistoryCheck"
            ), conversation_chain.with_config(run_name="RetrievalChainWithHistory"),
          ),
          (
            RunnableLambda(itemgetter("question")).with_config(
              run_name=self.ITEM_GETTER
            ) | self.retriever
          ).with_config(run_name="RetrievalChainWithNoHistory"),
        ).with_config(run_name="RouteDependingOnChatHistory") | RunnableLambda(
          self.format_docs
        ).with_config(run_name="FormatDocumentChunks")

    def save_chat_history(self, request, response):
        with self.prisma.tx() as transaction:
            transaction.chathistory.create(
              ChatHistory(
                question=request.query,
                created_at=datetime.now(),
                answer=response,
                session_id=request.session_id,
              )
            )

    def create_context(self, request):
        return RunnableMap(
          {
            "context": self.create_retrieval_chain().with_config(run_name="RetrievalChain"),
            "question": RunnableLambda(itemgetter("question")).with_config(
              run_name=self.ITEM_GETTER
            ),
            "chat_history": RunnableLambda(itemgetter("chat_history")).with_config(
              run_name="Itemgetter:chat_history"
            ),
          }
        ).invoke(request)

    def ChatRetrieval(self, request, context):
        response_synthesizer = (self.template | self.llm | StrOutputParser()).with_config(
          run_name="GenerateResponse",
        )
        self.save_chat_history(request, response_synthesizer.invoke(
          {
            "context": self.create_retrieval_chain().invoke(request.query),
            "question": request.query,
            "chat_history": [],
          }
        ))
        return (
          {
            "question": RunnableLambda(itemgetter("question")).with_config(
              run_name=self.ITEM_GETTER
            ),
            "chat_history": RunnableLambda(self.serialize_history).with_config(
              run_name="SerializeHistory"
            ),
          }
          | self.create_context(request)
          | response_synthesizer
        )
