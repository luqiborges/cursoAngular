import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Images } from '../models/placeholder.model';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return 'Something bad happened; please try again later.';
  }

  getFotos(): Observable<any> {
    return this.http
      .get<Images>(`https://jsonplaceholder.typicode.com/photos`)
      .pipe(catchError(this.handleError));
  }
}
