import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { TipoCuenta }                       from '../models/tipo_cuenta.interface';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../../core/config';

@Injectable({
  providedIn: 'root'
})
export class TipoCuentaService {

  constructor(
    private http: HttpClient
  ) { }

  GetTipoCuenta(): Observable<TipoCuenta[]>{
    let url = API_URL + 'tipo_cuenta';
    return this.http.get<TipoCuenta[]>(url).pipe(
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
