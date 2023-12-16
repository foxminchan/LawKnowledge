from haystack import Pipeline
from haystack.document_stores import FAISSDocumentStore
from haystack.nodes import EmbeddingRetriever, PromptNode

import searching_svc.grpc.searching_service_pb2_grpc as handler


class SearchServicer(handler.SearchingServiceServicer):
    def __init__(self):
        self.document_store = FAISSDocumentStore(faiss_index_factory_str="Flat", embedding_dim=1536)
        self.retriever = EmbeddingRetriever(
          document_store=self.document_store,
          batch_size=32,
          embedding_model="keepitreal/vietnamese-sbert",
        )
        self.prompt_node = PromptNode(
          model_name_or_path="vinai/PhoGPT-7B5-Instruct",
          default_prompt_template="vinai/phobert-base-v2"
        )

    def RunSearch(self, keyword, **kwargs):
        pipeline = Pipeline()
        pipeline.add_node(component=self.retriever, name="Retriever", inputs=["Query"])
        pipeline.add_node(component=self.prompt_node, name="PromptNode", inputs=["Retriever"])
        pipeline.run(query=keyword, debug=True)
