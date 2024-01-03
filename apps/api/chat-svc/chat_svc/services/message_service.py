#
# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
#

from prisma import Prisma
import chat_svc.grpc.message_service_pb2_grpc as handler


class MessageService(handler.ChatHistoryServiceServicer):
    def __init__(self):
        self.prisma = Prisma(auto_register=True)
        self.prisma.connect()

    def GetChatHistory(self, request, context):
        history = self.prisma.chathistory.find_many(
            take=request.take,
            skip=request.skip,
            order={
                request.order_by: request.order
            },
            where={
                "session_id": request.session_id
            },
            include={
                "session": True
            }
        )
        total = self.prisma.chathistory.count(where={
          "session_id": request.session_id
        })
        return {"data": history, "total": total}

    def DeleteChatHistory(self, request, context):
        with self.prisma.tx() as transaction:
            transaction.chathistory.delete(where={
              "id": request.id
            })
        return "Delete successfully"
