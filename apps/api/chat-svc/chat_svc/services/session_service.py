# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from prisma import Prisma
from datetime import datetime
from prisma.models import ChatSession
import chat_svc.grpc.session_service_pb2_grpc as handler


class SessionService(handler.ChatSessionServiceServicer):
    def __init__(self):
        self.prisma = Prisma(auto_register=True)
        self.prisma.connect()

    def GetChatSessions(self, request, context):
        session = self.prisma.chatsession.find_many(
            take=request.take,
            skip=request.skip,
            order={
                request.order_by: request.order
            },
        )
        total = self.prisma.chatsession.count()
        return {"data": session, "total": total}

    def GetChatSession(self, request, context):
        session = self.prisma.chatsession.find_first(where={
            "id": request.id
        })
        return session

    def DeleteChatSession(self, request, context):
        with self.prisma.tx() as transaction:
            transaction.chatsession.delete(where={
              "id": request.id
            })
        return "Delete successfully"

    def CreateChatSession(self, request, context):
        with self.prisma.tx() as transaction:
            session = transaction.chatsession.create(
              ChatSession(name=request.name, user_id=request.user_id)
            )
        return session

    def UpdateChatSession(self, request, context):
        with self.prisma.tx() as transaction:
            session = transaction.chatsession.update(where={
              "id": request.id
            }, data={
              "name": request.name,
              "user_id": request.user_id,
              "created_at": datetime.now()
            })
        return session
