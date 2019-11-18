import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Student} from "../../model/students/student.model";
import {catchError, retry} from "rxjs/operators";

@Injectable()
export class StudentsService {

  private studentBaseUrl = 'http://localhost:8080/students'

  constructor(private http: HttpClient) {
    console.log('Student service created...')
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public createStudent(student): Observable<Student> {
    console.log("Creating student: " + student)
    return this.http.post<Student>(this.studentBaseUrl, JSON.stringify(student), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  public getAllStudents(): Observable<Student> {
    console.log("Fetching all students...")
    return this.http.get<Student>(this.studentBaseUrl).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  public getStudentById(id): Observable<Student> {
    console.log("Fetching student by id " + id);
    return this.http.get<Student>(this.studentBaseUrl + '/id/' + id).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  public updateStudentById(id, data): Observable<Student> {
    console.log("Updating student: " + id)
    return this.http.put<Student>(this.studentBaseUrl + "/id/" + id, JSON.stringify(data), this.httpOptions).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  public deleteStudentById(id): Observable<Student> {
    console.log("Deleting student:" + id)
    return this.http.delete<Student>(this.studentBaseUrl + "id/" + id).pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
