# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import session_service_pb2 as session__service__pb2


class ChatSessionServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetChatSession = channel.unary_unary(
                '/ChatSessionService/GetChatSession',
                request_serializer=session__service__pb2.GetChatSessionRequest.SerializeToString,
                response_deserializer=session__service__pb2.ChatSessionResponse.FromString,
                )
        self.GetChatSessions = channel.unary_unary(
                '/ChatSessionService/GetChatSessions',
                request_serializer=session__service__pb2.GetChatSessionsRequest.SerializeToString,
                response_deserializer=session__service__pb2.GetChatSessionsResponse.FromString,
                )
        self.CreateChatSession = channel.unary_unary(
                '/ChatSessionService/CreateChatSession',
                request_serializer=session__service__pb2.CreateChatSessionRequest.SerializeToString,
                response_deserializer=session__service__pb2.ChatSessionResponse.FromString,
                )
        self.UpdateChatSession = channel.unary_unary(
                '/ChatSessionService/UpdateChatSession',
                request_serializer=session__service__pb2.UpdateChatSessionRequest.SerializeToString,
                response_deserializer=session__service__pb2.ChatSessionResponse.FromString,
                )
        self.DeleteChatSession = channel.unary_unary(
                '/ChatSessionService/DeleteChatSession',
                request_serializer=session__service__pb2.DeleteChatSessionRequest.SerializeToString,
                response_deserializer=session__service__pb2.DeleteChatSessionResponse.FromString,
                )


class ChatSessionServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetChatSession(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetChatSessions(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateChatSession(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateChatSession(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteChatSession(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ChatSessionServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetChatSession': grpc.unary_unary_rpc_method_handler(
                    servicer.GetChatSession,
                    request_deserializer=session__service__pb2.GetChatSessionRequest.FromString,
                    response_serializer=session__service__pb2.ChatSessionResponse.SerializeToString,
            ),
            'GetChatSessions': grpc.unary_unary_rpc_method_handler(
                    servicer.GetChatSessions,
                    request_deserializer=session__service__pb2.GetChatSessionsRequest.FromString,
                    response_serializer=session__service__pb2.GetChatSessionsResponse.SerializeToString,
            ),
            'CreateChatSession': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateChatSession,
                    request_deserializer=session__service__pb2.CreateChatSessionRequest.FromString,
                    response_serializer=session__service__pb2.ChatSessionResponse.SerializeToString,
            ),
            'UpdateChatSession': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateChatSession,
                    request_deserializer=session__service__pb2.UpdateChatSessionRequest.FromString,
                    response_serializer=session__service__pb2.ChatSessionResponse.SerializeToString,
            ),
            'DeleteChatSession': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteChatSession,
                    request_deserializer=session__service__pb2.DeleteChatSessionRequest.FromString,
                    response_serializer=session__service__pb2.DeleteChatSessionResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'ChatSessionService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ChatSessionService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetChatSession(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ChatSessionService/GetChatSession',
            session__service__pb2.GetChatSessionRequest.SerializeToString,
            session__service__pb2.ChatSessionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetChatSessions(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ChatSessionService/GetChatSessions',
            session__service__pb2.GetChatSessionsRequest.SerializeToString,
            session__service__pb2.GetChatSessionsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateChatSession(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ChatSessionService/CreateChatSession',
            session__service__pb2.CreateChatSessionRequest.SerializeToString,
            session__service__pb2.ChatSessionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateChatSession(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ChatSessionService/UpdateChatSession',
            session__service__pb2.UpdateChatSessionRequest.SerializeToString,
            session__service__pb2.ChatSessionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteChatSession(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/ChatSessionService/DeleteChatSession',
            session__service__pb2.DeleteChatSessionRequest.SerializeToString,
            session__service__pb2.DeleteChatSessionResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
