# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License
# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: message_service.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x15message_service.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\xa5\x01\n\x15GetChatHistoryRequest\x12\x12\n\nsession_id\x18\x01 \x01(\t\x12\x11\n\x04take\x18\x02 \x01(\x05H\x00\x88\x01\x01\x12\x11\n\x04skip\x18\x03 \x01(\x05H\x01\x88\x01\x01\x12\x15\n\x08order_by\x18\x04 \x01(\tH\x02\x88\x01\x01\x12\x12\n\x05order\x18\x05 \x01(\tH\x03\x88\x01\x01\x42\x07\n\x05_takeB\x07\n\x05_skipB\x0b\n\t_order_byB\x08\n\x06_order\"K\n\x16GetChatHistoryResponse\x12\"\n\x0c\x63hat_history\x18\x01 \x03(\x0b\x32\x0c.ChatHistory\x12\r\n\x05total\x18\x02 \x01(\x05\"&\n\x18\x44\x65leteChatHistoryRequest\x12\n\n\x02id\x18\x01 \x01(\t\",\n\x19\x44\x65leteChatHistoryResponse\x12\x0f\n\x07message\x18\x01 \x01(\t\"\x7f\n\x0b\x43hatHistory\x12\n\n\x02id\x18\x01 \x01(\t\x12.\n\ncreated_at\x18\x02 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x10\n\x08question\x18\x03 \x01(\t\x12\x0e\n\x06\x61nswer\x18\x04 \x01(\t\x12\x12\n\nsession_id\x18\x05 \x01(\t2\xa7\x01\n\x12\x43hatHistoryService\x12\x43\n\x0eGetChatHistory\x12\x16.GetChatHistoryRequest\x1a\x17.GetChatHistoryResponse\"\x00\x12L\n\x11\x44\x65leteChatHistory\x12\x19.DeleteChatHistoryRequest\x1a\x1a.DeleteChatHistoryResponse\"\x00\x62\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'message_service_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  DESCRIPTOR._options = None
  _globals['_GETCHATHISTORYREQUEST']._serialized_start=59
  _globals['_GETCHATHISTORYREQUEST']._serialized_end=224
  _globals['_GETCHATHISTORYRESPONSE']._serialized_start=226
  _globals['_GETCHATHISTORYRESPONSE']._serialized_end=301
  _globals['_DELETECHATHISTORYREQUEST']._serialized_start=303
  _globals['_DELETECHATHISTORYREQUEST']._serialized_end=341
  _globals['_DELETECHATHISTORYRESPONSE']._serialized_start=343
  _globals['_DELETECHATHISTORYRESPONSE']._serialized_end=387
  _globals['_CHATHISTORY']._serialized_start=389
  _globals['_CHATHISTORY']._serialized_end=516
  _globals['_CHATHISTORYSERVICE']._serialized_start=519
  _globals['_CHATHISTORYSERVICE']._serialized_end=686
# @@protoc_insertion_point(module_scope)
