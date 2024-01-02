/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Corpus {
  name: string;
  indexing?: string;
  heading_id?: string;
  parent_id?: string;
  related_id?: string;
  codification_id?: string;
}

export interface CorpusCreateRequest extends Corpus {}

export interface CorpusUpdateRequest extends Corpus {
  id: string;
}

export interface CorpusResponse extends Corpus {
  id: string;
}

export interface CorpusSvc {
  createCorpus(request: CorpusCreateRequest): Observable<CorpusResponse>;
  updateCorpus(request: CorpusUpdateRequest): Observable<CorpusResponse>;
  deleteCorpus(id: string): Observable<void>;
  getCorpus(id: string): Observable<CorpusResponse>;
  getCorpuses(criteria?: Criteria): Observable<CorpusResponse[]>;
}
