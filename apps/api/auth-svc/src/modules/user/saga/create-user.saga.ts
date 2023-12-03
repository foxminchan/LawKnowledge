import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@nestjs/common';
import { UserCreatedEvent } from '../events';
import { Saga, ofType } from '@nestjs/cqrs';

@Injectable()
export class CreateUserSaga {
  @Saga()
  userCreated = (events$: Observable<UserCreatedEvent>): Observable<void> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      map((event) => console.log('UserCreatedEvent', event))
    );
  };
}
