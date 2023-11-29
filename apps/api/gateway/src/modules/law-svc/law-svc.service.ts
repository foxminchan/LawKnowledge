import { Inject } from '@nestjs/common';
import { catchError, throwError } from 'rxjs';
import { Criteria } from '@law-knowledge/shared';
import { ClientProxy, RpcException } from '@nestjs/microservices';

export class LawService {
  constructor(
    @Inject('LAW_SERVICE')
    private readonly lawSvcService: ClientProxy
  ) {}

  getDocuments(criteria?: Criteria) {
    return this.lawSvcService
      .send({ cmd: 'getDocuments' }, criteria)
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }

  getDocument(id: string) {
    return this.lawSvcService
      .send({ cmd: 'getDocument' }, id)
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }

  getTopics(criteria?: Criteria) {
    return this.lawSvcService
      .send({ cmd: 'getTopics' }, criteria)
      .pipe(catchError((err) => throwError(() => new RpcException(err))));
  }
}
