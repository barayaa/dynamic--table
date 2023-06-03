import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

//handleError:any

  get<T>(url: string):Observable<T> {
    return this.http.get<T>(url).pipe(
      catchError(this.handleError)
    )
  }

  post<T>(url: string, body: any):Observable<T> {
    return this.http.post<T>(url, body).pipe(
      catchError(this.handleError)
    )
  }

  put<T>(url: string, body: any):Observable<T> {
    return this.http.put<T>(url, body).pipe(
      catchError(this.handleError)
    )
  }

  delete<T>(url: string):Observable<T> {
    return this.http.delete<T>(url).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => error)
}
 
}
