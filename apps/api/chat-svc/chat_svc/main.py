# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

import grpc
from concurrent import futures
from core.configs import configs
from chat_svc.services.chat_service import ChatService
from chat_svc.services.vectorize_service import Vectorize
import chat_svc.grpc.chat_service_pb2_grpc as chat_handler
from chat_svc.services.session_service import SessionService
from chat_svc.services.message_service import MessageService
import chat_svc.grpc.message_service_pb2_grpc as message_handler
import chat_svc.grpc.session_service_pb2_grpc as session_handler


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_handler.add_ChatServiceServicer_to_server(Vectorize(), server)
    chat_handler.add_ChatServiceServicer_to_server(ChatService(), server)
    message_handler.add_ChatHistoryServiceServicer_to_server(MessageService(), server)
    session_handler.add_ChatSessionServiceServicer_to_server(SessionService(), server)
    server.add_insecure_port(f"[::]:{configs.PORT}")
    try:
        server.start()
        print(f"Server started @ {configs.URL}:{configs.PORT}")
        server.wait_for_termination()
    except KeyboardInterrupt:
        server.stop(0)
        print("Server disconnected")


if __name__ == "__main__":
    serve()
