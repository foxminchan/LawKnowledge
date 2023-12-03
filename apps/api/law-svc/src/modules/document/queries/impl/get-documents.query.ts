import { Criteria } from '@law-knowledge/shared';

export class GetDocumentsQuery {
  constructor(public readonly criteria?: Criteria) {}
}
