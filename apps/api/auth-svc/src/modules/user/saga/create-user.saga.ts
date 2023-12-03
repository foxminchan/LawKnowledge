import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Saga, ofType } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CreateUserSaga {
  @Saga()
  userCreated = (events$: Observable<UserCreatedEvent>): Observable<void> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map((event) => Logger.log(event, 'UserCreatedEvent'))
    );
  };
}
