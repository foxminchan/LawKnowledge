/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Document {
  name: string;
  content: string;
  codification_id?: string;
  heading_id?: string;
}

export interface DocumentCreateRequest extends Document {}

export interface DocumentUpdateRequest extends Document {
  id: string;
}

export interface DocumentResponse extends Document {
  id: string;
}

export interface DocumentSvc {
  createDocument(request: DocumentCreateRequest): Observable<DocumentResponse>;
  updateDocument(request: DocumentUpdateRequest): Observable<DocumentResponse>;
  deleteDocument(id: string): Observable<DocumentResponse>;
  getDocument(id: string): Observable<DocumentResponse>;
  getDocuments(criteria?: Criteria): Observable<DocumentResponse[]>;
  summarizeDocument(context: string): Observable<string>;
}
