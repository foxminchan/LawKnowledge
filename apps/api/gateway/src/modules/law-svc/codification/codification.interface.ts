/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Codification {
  name: string;
  indexing?: string;
  parent_id?: string;
}

export interface CodificationCreateRequest extends Codification {}

export interface CodificationUpdateRequest extends Codification {
  id: string;
}

export interface CodificationResponse extends Codification {
  id: string;
}

export interface CodificationSvc {
  createCodification(
    request: CodificationCreateRequest,
  ): Observable<CodificationResponse>;
  updateCodification(
    request: CodificationUpdateRequest,
  ): Observable<CodificationResponse>;
  deleteCodification(id: string): Observable<CodificationResponse>;
  getCodification(id: string): Observable<CodificationResponse>;
  getCodifications(criteria?: Criteria): Observable<CodificationResponse[]>;
}
