import {Injectable} from '@angular/core';
import {IStudent} from './IStudent';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IIdOperationService} from '../shared/IIdOperationService';

@Injectable({
    providedIn: 'root'
  }
)
export class StudentsService implements IIdOperationService<IStudent> {
  private studentBaseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {
    console.log('Student service created...');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<IStudent[]> {
    console.log('Fetching all students...');
    return this.http.get<IStudent[]>(this.studentBaseUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  getById(id): Observable<IStudent> {
    console.log('Fetching student by id ' + id);
    return this.http.get<IStudent>(this.studentBaseUrl + '/id/' + id).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  create(student: IStudent): Observable<IStudent> {
    console.log('Creating student: ' + JSON.stringify(student));
    return this.http.post<IStudent>(this.studentBaseUrl, JSON.stringify(student), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateById(id, data: IStudent): Observable<IStudent> {
    console.log('Updating student: ' + JSON.stringify(data));
    return this.http.put<IStudent>(this.studentBaseUrl + '/id/' + id, JSON.stringify(data), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  deleteById(id): Observable<IStudent> {
    console.log('Deleting student:' + id);
    return this.http.delete<IStudent>(this.studentBaseUrl + 'id/' + id).pipe(
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
