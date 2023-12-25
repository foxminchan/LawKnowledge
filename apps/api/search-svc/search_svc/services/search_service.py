#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

from pymongo import MongoClient
from search_svc.core.configs import configs
import search_svc.grpc.search_service_pb2_grpc as handler
from langchain.retrievers import ContextualCompressionRetriever
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.retrievers.document_compressors import LLMChainExtractor
from langchain_community.llms.huggingface_pipeline import HuggingFacePipeline
from langchain_community.vectorstores.mongodb_atlas import MongoDBAtlasVectorSearch


class VectorSearch(handler.SearchingServiceServicer):
    def __init__(self):
        self.vector_store = MongoDBAtlasVectorSearch(
            collection=MongoClient(configs.DATABASE_URL)["search_svc_db"]["law"],
            embedding=HuggingFaceEmbeddings(model_name=configs.EMBEDDING),
            index_name=configs.INDEX_NAME
        )
        self.llm = HuggingFacePipeline.from_model_id(
            model_id=configs.MODEL,
            task="semantic-search",
            device=0,
            batch_size=2
        )
        self.compression_retriever = ContextualCompressionRetriever(
            base_compressor=LLMChainExtractor.from_llm(self.llm),
            base_retriever=self.vector_store.as_retriever()
        )

    def VectorSearch(self, query, context):
        return self.compression_retriever.search(query)
