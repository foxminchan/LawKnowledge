/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface ChatHistory {
  id: string;
  created_at: Date;
  question: string;
  answer: string;
  session_id: string;
}

export interface GetChatHistoryRequest {
  criteria?: Criteria;
}

export interface GetChatHistoryResponse {
  chat_history: ChatHistory[];
  total: number;
}

export interface ChatHistorySvc {
  getChatHistory(
    request: GetChatHistoryRequest,
  ): Observable<GetChatHistoryResponse>;
  deleteChatHistory(id: string): Observable<string>;
}
