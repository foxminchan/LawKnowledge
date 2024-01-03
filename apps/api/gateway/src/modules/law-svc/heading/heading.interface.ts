/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Heading {
  name: string;
  no: number;
  topic_id?: string;
}

export interface HeadingCreateRequest extends Heading {}

export interface HeadingUpdateRequest extends Heading {
  id: string;
}

export interface HeadingResponse extends Heading {
  id: string;
}

export interface HeadingSvc {
  createHeading(request: HeadingCreateRequest): Observable<HeadingResponse>;
  updateHeading(request: HeadingUpdateRequest): Observable<HeadingResponse>;
  deleteHeading(id: string): Observable<HeadingResponse>;
  getHeading(id: string): Observable<HeadingResponse>;
  getHeadings(criteria?: Criteria): Observable<HeadingResponse[]>;
}
