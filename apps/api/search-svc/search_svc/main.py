#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

import grpc
from concurrent import futures
from core.configs import configs
import search_svc.grpc.search_service_pb2_grpc as handler
from search_svc.services.search_service import VectorSearch
from search_svc.services.vectorize_service import Vectorize


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    handler.add_SearchingServiceServicer_to_server(Vectorize(), server)
    handler.add_SearchingServiceServicer_to_server(VectorSearch(), server)
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
