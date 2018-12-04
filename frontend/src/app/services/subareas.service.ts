import { Injectable }                       from '@angular/core';
import { HttpClient }                       from '@angular/common/http';

import { Observable, throwError }           from 'rxjs';
import { API_URL }                          from '../core/config';
import { catchError }                       from 'rxjs/operators';
import { SubArea }                          from '../clasificadores/models/subarea.interface';
import { HttpErrorResponse }                from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubareasService {

  constructor(private http: HttpClient) { }

  getSubAreas(area_id: number):Observable<SubArea[]>{
    let url = API_URL + 'subareas/area/' + area_id;

    return this.http.get<SubArea[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  getSubAreasById(id: number):Observable<SubArea>{
    let url = API_URL + 'subareas/byId/' + id;

    return this.http.get<SubArea>(url).pipe(
      catchError(this.handleError)
    )
  }
  createSubArea(subarea: SubArea):Observable<string> {
    let url = API_URL + 'subareas';
    return this.http.post<string>(url,subarea).pipe(
      catchError(this.handleError)
    )
  }
  updateSubArea(subarea: SubArea):Observable<string> {
    let url = API_URL + 'subareas/' + subarea.id;
    return this.http.put<string>(url,subarea).pipe(
      catchError(this.handleError)
    )
  }
  deleteSubArea(id:number):Observable<string> {
    let url = API_URL + 'subareas/' + id;
    return this.http.delete<string>(url).pipe(
      catchError(this.handleError)
    )
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
