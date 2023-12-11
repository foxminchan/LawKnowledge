import { Inject } from '@nestjs/common';
import { catchError, throwError, timeout } from 'rxjs';
import { Criteria } from '@law-knowledge/building-block';
import { ClientProxy, RpcException } from '@nestjs/microservices';

export class LawService {
  constructor(
    @Inject('LAW_SERVICE')
    private readonly lawSvcService: ClientProxy,
  ) {}

  getDocuments(criteria?: Criteria) {
    return this.lawSvcService.send({ cmd: 'getDocuments' }, criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getDocument(id: string) {
    return this.lawSvcService.send({ cmd: 'getDocument' }, id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getTopics(criteria?: Criteria) {
    return this.lawSvcService.send({ cmd: 'getTopics' }, criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getTopic(id: string) {
    return this.lawSvcService.send({ cmd: 'getTopic' }, id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getHeadings(criteria?: Criteria) {
    return this.lawSvcService.send({ cmd: 'getHeadings' }, criteria).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }

  getHeading(id: string) {
    return this.lawSvcService.send({ cmd: 'getHeading' }, id).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err))),
    );
  }
}
