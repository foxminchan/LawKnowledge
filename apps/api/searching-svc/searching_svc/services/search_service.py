from haystack import Pipeline
from haystack.document_stores import ElasticsearchDocumentStore
from haystack.nodes import EmbeddingRetriever, PromptNode

import searching_svc.grpc.searching_service_pb2_grpc as handler


class SearchServicer(handler.SearchingServiceServicer):
    def __init__(self):
        self.document_store = ElasticsearchDocumentStore()
        self.retriever = EmbeddingRetriever(
          document_store=self.document_store,
          embedding_model="sentence-transformers/all-MiniLM-L6-v2"
        )
        self.prompt_node = PromptNode(
          model_name_or_path="google/flan-t5-xl",
          default_prompt_template="deepset/question-answering"
        )

    def RunSearch(self, keyword, **kwargs):
      pipeline = Pipeline()
      pipeline.add_node(component=self.retriever, name="Retriever", inputs=["Query"])
      pipeline.add_node(component=self.prompt_node, name="PromptNode", inputs=["Retriever"])
      pipeline.run(query=keyword, debug=True)
