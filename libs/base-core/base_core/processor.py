from langchain_community.embeddings import HuggingFaceEmbeddings

class Processor:
    def __init__(self):
        self.docs = []
        self.loaders = []
        self.chunk_size = 1000
        self.chunk_overlap = 0

    def load_datasets(self):
        self.loaders.append(HuggingFaceDatasetLoader('foxminchan/law-knowledge-graph', data_files="corpus.csv"))
        self.loaders.append(HuggingFaceDatasetLoader('foxminchan/law-knowledge-graph', data_files="codification.csv"))
        for loader in self.loaders:
            self.docs.extend(loader.lazy_load())

    def transform(self):
        text_splitter = RecursiveCharacterTextSplitter(
          chunk_size=self.chunk_size, chunk_overlap=self.chunk_overlap, length_function=len
        )
        self.docs = text_splitter.split_documents(self.docs)
        print(f"Split into {len(self.docs)} docs")
        return self.docs

    def embedding_model(self):
        return HuggingFaceEmbeddings('sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2', multi_process=True)
