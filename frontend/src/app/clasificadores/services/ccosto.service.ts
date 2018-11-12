import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { Ccosto }                           from '../models/ccosto.interface';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../../core/config';

@Injectable({
  providedIn: 'root'
})
export class CcostoService {

  constructor(
    private http: HttpClient
  ) { }

  InsertCosto(costo: any): Observable<any>{     
      
    let url = API_URL + 'ccosto';
    return this.http.post<any>(url,costo).pipe(
      catchError(this.handleError)
    );
  }
  GetCostos():Observable<Ccosto[]>
  {
    let url = API_URL + 'ccosto';
    return this.http.get<any>(url).pipe(
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
