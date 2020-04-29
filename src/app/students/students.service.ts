import {Injectable} from '@angular/core';
import {Student} from './Student';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {IIdOperationService} from '../shared/IIdOperationService';

@Injectable({
    providedIn: 'root'
  }
)
export class StudentsService implements IIdOperationService<Student> {
  private studentBaseUrl = 'http://localhost:8080/students';

  constructor(private http: HttpClient) {
    console.log('Student service created...');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<Student[]> {
    console.log('Fetching all students...');
    return this.http.get<Student[]>(this.studentBaseUrl).pipe(
      catchError(this.errorHandler)
    );
  }

  getById(id): Observable<Student> {
    console.log('Fetching student by id ' + id);
    return this.http.get<Student>(this.studentBaseUrl + '/id/' + id).pipe(
      catchError(this.errorHandler)
    );
  }

  create(student: Student): Observable<Student> {
    console.log('Creating student: ' + JSON.stringify(student));
    return this.http.post<Student>(this.studentBaseUrl, JSON.stringify(student), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  updateById(id, data: Student): Observable<Student> {
    console.log('Updating student: ' + JSON.stringify(data));
    return this.http.put<Student>(this.studentBaseUrl + '/id/' + id, JSON.stringify(data), this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  deleteById(id): Observable<Student> {
    console.log('Deleting student:' + id);
    return this.http.delete<Student>(this.studentBaseUrl + 'id/' + id).pipe(
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
