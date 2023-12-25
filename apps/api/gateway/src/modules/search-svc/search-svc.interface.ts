/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';

export interface SearchRequest {
  context: string;
}

export interface Documents {
  id: string;
  title: string;
  content: string;
}

export interface SearchResponse {
  documents: Documents[];
}

export interface SearchSvc {
  search(context: SearchRequest): Observable<Documents[]>;
  vectoring(): Observable<void>;
}
