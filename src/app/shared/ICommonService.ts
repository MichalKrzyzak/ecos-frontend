import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

export interface ICommonService<T> {

  getAll(): Observable<T[]>;

  create(arg0: T): Observable<T>;

  errorHandler(error: HttpErrorResponse);
}
