import {Observable} from 'rxjs';

export interface ICommonService<T> {
  getAll(): Observable<T[]>;

  create(arg0: T): Observable<T>;
}
