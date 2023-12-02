from haystack import Pipeline
from haystack.document_stores import ElasticsearchDocumentStore
from haystack.nodes import TextConverter, PreProcessor

import searching_svc.grpc.searching_service_pb2_grpc as handler
from searching_svc.core.config import configs


class IndexingServicer(handler.SearchingServiceServicer):
    def __init__(self):
        self.document_store = ElasticsearchDocumentStore(
            host=configs.DB_URL,
            port=configs.DB_PORT,
            embedding_dim=768
        )
        self.converter = TextConverter()
        self.preprocessor = PreProcessor()

    def create_indexing_pipeline(self):
        pipeline = Pipeline()
        pipeline.add_node(component=self.converter, name="TextConverter", inputs=["File"])
        pipeline.add_node(component=self.preprocessor, name="PreProcessor", inputs=["TextConverter"])
        pipeline.add_node(component=self.document_store, name="DocumentStore", inputs=["PreProcessor"])
        return pipeline

    def RunIndexing(self, **kwargs):
        pipeline = self.create_indexing_pipeline()
        pipeline.run(file_paths=['./datasets/*.txt'], debug=True)
        return "Indexing completed"
