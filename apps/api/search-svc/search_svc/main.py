import grpc
from concurrent import futures
from searching_svc.core.config import configs
import searching_svc.grpc.searching_service_pb2_grpc as handler
from searching_svc.services.index_service import IndexingServicer
from searching_svc.services.search_service import SearchServicer


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    handler.add_SearchingServiceServicer_to_server(IndexingServicer(), server)
    handler.add_SearchingServiceServicer_to_server(SearchServicer(), server)
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
