/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Keyword {
  name: string;
  codification_id?: string;
}

export interface KeywordCreateRequest extends Keyword {}

export interface KeywordUpdateRequest extends Keyword {
  id: string;
}

export interface KeywordResponse extends Keyword {
  id: string;
}

export interface KeywordSvc {
  createKeyword(request: KeywordCreateRequest): Observable<KeywordResponse>;
  updateKeyword(request: KeywordUpdateRequest): Observable<KeywordResponse>;
  deleteKeyword(id: string): Observable<KeywordResponse>;
  getKeyword(id: string): Observable<KeywordResponse>;
  getKeywords(criteria?: Criteria): Observable<KeywordResponse[]>;
}
