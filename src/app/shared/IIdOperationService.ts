import {Observable} from 'rxjs';
import {ICommonService} from './ICommonService';

export interface IIdOperationService<T> extends ICommonService<T> {
  getById(id): Observable<T>;

  updateById(id, data: T): Observable<T>;

  deleteById(id): Observable<T>;
}
