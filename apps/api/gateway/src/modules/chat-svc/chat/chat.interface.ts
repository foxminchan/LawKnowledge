/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';

export interface ChatRequest {
  query: string;
}

export interface ChatResponse {
  documents: string;
}

export interface ChatSvc {
  vectorize(): Observable<string>;
  chatRetrieval(request: ChatRequest): Observable<ChatResponse>;
}
