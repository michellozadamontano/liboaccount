import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { Cuenta }                           from '../models/cuenta.interface';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../../core/config';
import { Tasas }                            from '../models/tasas.interface';
import { Tasa_Cuenta } from '../models/tasa_cuenta.interface';

@Injectable({
  providedIn: 'root'
})
export class TasasService {

  constructor(
    private http: HttpClient
  ) { }

  InsertTasa(tasa: Tasas): Observable<any>{     
      
    let url = API_URL + 'tasa';
    return this.http.post<any>(url,tasa).pipe(
      catchError(this.handleError)
    );
  }
  GetTasas():Observable<Tasas[]>
  {
    let url = API_URL + 'tasa';
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }
  GetTasaById(id: any):Observable<Tasas>
  {    
    
    let url = API_URL + 'tasa/getbyId/' + id;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }
  GetCuentasByTasaId(id:number):Observable<Tasa_Cuenta[]>
  {
    let url = API_URL + 'tasa/getCuentas/' + id;
    return this.http.get<Tasa_Cuenta[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  UpdateTasa(id:number, tasa:Tasas):Observable<any> 
  {
    let url = API_URL + 'tasa/' + id;
    return this.http.put<any>(url,tasa).pipe(
      catchError(this.handleError)
    )
  }
  DeleteTasa(id:number):Observable<any>
  {
    let url = API_URL + 'tasa/' + id;
    return this.http.delete<any>(url).pipe(
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
