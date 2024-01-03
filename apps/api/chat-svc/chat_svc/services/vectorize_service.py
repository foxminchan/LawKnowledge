#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

from base_core.processor import Processor
from chat_svc.core.configs import configs
from langchain_community.vectorstores import FAISS
import chat_svc.grpc.chat_service_pb2_grpc as handler


class Vectorize(handler.ChatServiceServicer):
    def __init__(self):
        self.db = None
        self.processors = Processor()

    def Vectorize(self, request, context):
        self.processors.load_datasets()
        self.db = FAISS.from_documents(self.processors.transform(), self.processors.embedding_model())
        self.db.save_local(file_name="vector.db", index_name=configs.INDEX_NAME)
        return "Vectorize successfully"
