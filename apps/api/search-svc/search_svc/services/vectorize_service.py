from pymongo import MongoClient
from base_core.processor import Processor
from search_svc.core.configs import configs
import search_svc.grpc.search_service_pb2_grpc as handler
from langchain.vectorstores import MongoDBAtlasVectorSearch


class Vectorize(handler.SearchingServiceServicer):
    def __init__(self):
        self.db = None
        self.processors = Processor()

    def VectorStore(self):
        self.processors.load_datasets()
        docs = self.processors.transform()
        collection = MongoClient(configs.DATABASE_URL)["search_svc_db"]["law"]
        collection.drop()
        MongoDBAtlasVectorSearch.from_documents(
            docs,
            collection,
            self.processors.embedding_model(),
            index_name=configs.INDEX_NAME,
        )
        return "Vectorize success"
