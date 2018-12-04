import { Injectable }                     from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError }         from 'rxjs';
import { Entidad }                        from '../clasificadores/models/entidad.interface';
import { Provincia }                      from '../clasificadores/models/provincia.interface';
import { catchError }                     from 'rxjs/operators';
import { API_URL }                        from '../core/config';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor( private http: HttpClient) { }

  GetProvince(): Observable<Provincia[]>
  {
    let url = API_URL + 'provincia';
    return this.http.get<Provincia[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  GetEntidad(): Observable<Entidad>
  {
    let url = API_URL + 'entidad';
    return this.http.get<Entidad>(url).pipe(
      catchError(this.handleError)
    );
  }
  PostEntidad(entidad: Entidad):Observable<any>
  {
    let url = API_URL + 'entidad';
    return this.http.post(url,entidad).pipe(
      catchError(this.handleError)
    );
  }
  PutEntidad(entidad: Entidad):Observable<any>
  {
    let url = API_URL + 'entidad/' + entidad.id;
    return this.http.put(url,entidad).pipe(
      catchError(this.handleError)
    );
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
