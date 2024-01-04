/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface ChatSession {
  user: string;
  message: string;
  createdAt: Date;
}

export interface GetChatSessionsRequest {
  user_id: string;
  criteria?: Criteria;
}

export interface ChatSessionsResponse {
  data: ChatSession[];
  total: number;
}

export interface UpdateChatSessionRequest extends ChatSession {
  id: string;
}

export interface ChatSessionResponse extends ChatSession {
  id: string;
}

export interface CreateChatSessionRequest extends ChatSession {}

export interface ChatSessionSvc {
  getChatSessions(
    request: GetChatSessionsRequest,
  ): Observable<ChatSessionsResponse>;
  getChatSession(id: string): Observable<ChatSessionResponse>;
  createChatSession(
    request: CreateChatSessionRequest,
  ): Observable<ChatSessionResponse>;
  updateChatSession(
    request: UpdateChatSessionRequest,
  ): Observable<ChatSessionResponse>;
  deleteChatSession(id: string): Observable<string>;
}
