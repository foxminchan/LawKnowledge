from haystack import Pipeline
from haystack.document_stores import FAISSDocumentStore
from haystack.nodes import TextConverter, PreProcessor
import search_svc.grpc.searching_service_pb2_grpc as handler


class IndexingServicer(handler.SearchingServiceServicer):
    def __init__(self):
        self.document_store = FAISSDocumentStore()
        self.converter = TextConverter()
        self.preprocessor = PreProcessor(
          split_by='word',
          split_length=250,
          split_overlap=20,
          split_respect_sentence_boundary=True
        )

    def create_indexing_pipeline(self):
        pipeline = Pipeline()
        pipeline.add_node(component=self.converter, name="TextConverter", inputs=["File"])
        pipeline.add_node(component=self.preprocessor, name="PreProcessor", inputs=["TextConverter"])
        pipeline.add_node(component=self.document_store, name="DocumentStore", inputs=["PreProcessor"])
        return pipeline

    def RunIndexing(self, **kwargs):
        pipeline = self.create_indexing_pipeline()
        pipeline.run(file_paths=['./datasets/*.txt'], debug=True)
        print("Indexing completed")
        return "Indexing completed"
