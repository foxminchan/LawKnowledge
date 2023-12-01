import grpc
from concurrent import futures
from searching_svc.grpc import indexing_service_pb2_grpc
from searching_svc.grpc.indexing_service_pb2_grpc import IndexingServiceServicer


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    indexing_service_pb2_grpc.add_IndexingServiceServicer_to_server(IndexingServiceServicer(), server)
    server.add_insecure_port('[::]:8083')
    try:
        server.start()
        print("Server started @ 0.0.0.0:8083")
        server.wait_for_termination()
    except KeyboardInterrupt:
        server.stop(0)
        print("Server disconnected")


if __name__ == '__main__':
    serve()
