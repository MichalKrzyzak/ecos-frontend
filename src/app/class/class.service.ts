import {Injectable} from "@angular/core";
import {ICommonService} from "../shared/ICommonService";
import {Class} from "./Class";
import {Observable, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
  }
)
export class ClassService implements ICommonService<Class> {
  private classBaseUrl = 'http://localhost:8080/class';

  constructor(private http: HttpClient) {
    console.log('Class service created...');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<Class[]> {
    console.log('Fetching all classes...');
    return this.http.get<Class[]>(this.classBaseUrl).pipe(
      catchError(this.errorHandler)
    );
  }

  create(arg0: Class): Observable<Class> {
    console.log('Creating field of study: ' + JSON.stringify(arg0));
    return this.http.post<Class>(this.classBaseUrl, JSON.stringify(arg0), this.httpOptions).pipe(
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
