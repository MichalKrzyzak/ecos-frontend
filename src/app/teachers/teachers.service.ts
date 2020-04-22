import {IIdOperationService} from '../shared/IIdOperationService';
import {ITeacher} from './ITeacher';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

export class TeachersService implements IIdOperationService<ITeacher> {
  private teacherBaseUrl = 'http://localhost:8080/teachers';

  constructor(private http: HttpClient) {
    console.log('Student service created...');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<ITeacher[]> {
    console.log('Fetching all teachers...');
    return this.http.get<ITeacher[]>(this.teacherBaseUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getById(id): Observable<ITeacher> {
    console.log('Fetching teacher by id ' + id);
    return this.http.get<ITeacher>(this.teacherBaseUrl + '/id/' + id).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  create(teacher: ITeacher): Observable<ITeacher> {
    console.log('Creating teacher: ' + teacher);
    return this.http.post<ITeacher>(this.teacherBaseUrl, JSON.stringify(teacher), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateById(id, data: ITeacher): Observable<ITeacher> {
    console.log('Updating teacher: ' + data);
    return this.http.put<ITeacher>(this.teacherBaseUrl + '/id/' + id, JSON.stringify(data), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteById(id): Observable<ITeacher> {
    console.log('Deleting teacher:' + id);
    return this.http.delete<ITeacher>(this.teacherBaseUrl + 'id/' + id).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = 'An error occured' + error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Server returned error code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
