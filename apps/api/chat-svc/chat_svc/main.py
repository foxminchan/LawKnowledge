#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

import grpc
from concurrent import futures
from core.configs import configs
import chat_svc.grpc.chat_service_pb2_grpc as chat_handler


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    chat_handler.add_ChatServiceServicer_to_server((), server)
    chat_handler.add_ChatServiceServicer_to_server((), server)
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
