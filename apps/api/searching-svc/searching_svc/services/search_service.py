from haystack import Pipeline
from haystack.document_stores import FAISSDocumentStore
from haystack.nodes import EmbeddingRetriever, PromptNode

import searching_svc.grpc.searching_service_pb2_grpc as handler
from searching_svc.core.config import configs


class SearchServicer(handler.SearchingServiceServicer):
    def __init__(self):
        self.document_store = FAISSDocumentStore()
        self.retriever = EmbeddingRetriever(
          document_store=self.document_store,
          embedding_model="sentence-transformers/multi-qa-mpnet-base-dot-v1"
        )
        self.prompt_node = PromptNode(
          model_name_or_path="gpt-4",
          api_key=configs.OPEN_AI_API_KEY,
          default_prompt_template="deepset/question-answering-with-references"
        )

    def RunSearch(self, keyword, **kwargs):
        pipeline = Pipeline()
        pipeline.add_node(component=self.retriever, name="Retriever", inputs=["Query"])
        pipeline.add_node(component=self.prompt_node, name="PromptNode", inputs=["Retriever"])
        pipeline.run(query=keyword, debug=True)
