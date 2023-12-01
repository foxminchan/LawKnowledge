from haystack import Pipeline
from haystack.document_stores import ElasticsearchDocumentStore
from haystack.nodes import TextConverter, PreProcessor
from searching_svc.core.config import configs


class IndexingService:
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

    def run_indexing(self, file_paths):
        pipeline = self.create_indexing_pipeline()
        pipeline.run(file_paths=file_paths, debug=True)
