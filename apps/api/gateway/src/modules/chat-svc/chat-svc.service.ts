import { Inject } from '@nestjs/common';
import { Criteria, DocumentFileType } from '@law-knowledge/shared';
import { catchError, throwError, timeout } from 'rxjs';
import { ClientProxy, RpcException } from '@nestjs/microservices';

export class ChatService {
  constructor(
    @Inject('CHAT_SERVICE')
    private readonly authSvcService: ClientProxy
  ) {}

  getChatHistoriesByUser(user_id: string, criteria?: Criteria) {
    return this.authSvcService
      .send({ cmd: 'getChatHistoriesByUser' }, { user_id, criteria })
      .pipe(
        timeout(5000),
        catchError((err) => throwError(() => new RpcException(err)))
      );
  }

  addEmbedding(type: DocumentFileType) {
    return this.authSvcService.send({ cmd: 'addEmbedding' }, { type }).pipe(
      timeout(5000),
      catchError((err) => throwError(() => new RpcException(err)))
    );
  }
}
