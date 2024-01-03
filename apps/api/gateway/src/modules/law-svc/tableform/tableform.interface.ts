/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface TableForm {
  name: string;
  type: string;
  codification_id?: string;
  corpus_id?: string;
}

export interface TableFormCreateRequest extends TableForm {}

export interface TableFormUpdateRequest extends TableForm {
  id: string;
}

export interface TableFormResponse extends TableForm {
  id: string;
}

export interface TableFormSvc {
  createTableForm(
    request: TableFormCreateRequest,
  ): Observable<TableFormResponse>;
  updateTableForm(
    request: TableFormUpdateRequest,
  ): Observable<TableFormResponse>;
  deleteTableForm(id: string): Observable<TableFormResponse>;
  getTableForm(id: string): Observable<TableFormResponse>;
  getTableForms(criteria?: Criteria): Observable<TableFormResponse[]>;
}
