import { Observable } from 'rxjs';

export interface Documents {
  id: string;
}

export interface SearchingService {
  search(query: string): Observable<Documents[]>;
  RunIndexing(path: string): Observable<void>;
}
