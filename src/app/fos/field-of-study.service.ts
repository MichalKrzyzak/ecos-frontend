import {Injectable} from '@angular/core';
import {ICommonService} from '../shared/ICommonService';
import {IFieldOfStudy} from './IFieldOfStudy';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  }
)
export class FieldOfStudyService implements ICommonService<IFieldOfStudy> {
  private fosBaseUrl = 'http://localhost:8080/fieldOfStudy';

  constructor(private http: HttpClient) {
    console.log('FieldOfStudy service created...');
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(): Observable<IFieldOfStudy[]> {
    console.log('Fetching all fields of study...');
    return this.http.get<IFieldOfStudy[]>(this.fosBaseUrl).pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  create(arg0: IFieldOfStudy): Observable<IFieldOfStudy> {
    console.log('Creating field of study: ' + JSON.stringify(arg0));
    return this.http.post<IFieldOfStudy>(this.fosBaseUrl, JSON.stringify(arg0), this.httpOptions).pipe(
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
