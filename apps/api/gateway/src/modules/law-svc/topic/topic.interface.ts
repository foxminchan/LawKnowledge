/*
 * Copyright (c) 2023-present Hutech University. All rights reserved
 * Licensed under the MIT License
 */

import { Observable } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';

export interface Topic {
  name: string;
  no?: number;
}

export interface TopicCreateRequest extends Topic {}

export interface TopicUpdateRequest extends Topic {
  id: string;
}

export interface TopicResponse extends Topic {
  id: string;
}

export interface TopicSvc {
  createTopic(request: TopicCreateRequest): Observable<TopicResponse>;
  updateTopic(request: TopicUpdateRequest): Observable<TopicResponse>;
  deleteTopic(id: string): Observable<TopicResponse>;
  getTopic(id: string): Observable<TopicResponse>;
  getTopics(criteria?: Criteria): Observable<TopicResponse[]>;
}
