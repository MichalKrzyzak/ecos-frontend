import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class StudentsService {

  private  studentBaseUrl = 'http://localhost:8080/students/'

  constructor(private http: HttpClient) {
    console.log('Student service created...')
  }

  private handleError(err:HttpErrorResponse){
    console.log('Handle HTTP error');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  public getAllStudents(): Observable<any> {
    console.log("Fetching all students...")
    return this.http.get(this.studentBaseUrl + 'get/all')
  }
}
