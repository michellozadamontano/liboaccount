import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { CuentaList }                       from '../models/cuenta_list.interface';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../../core/config';
import { CuentaPrint } from '../models/cuenta_print.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {

  constructor(
    private http: HttpClient
  ) { }

  InsertCuenta(cuenta: any): Observable<any>{     
      
    let url = API_URL + 'cuentas';
    return this.http.post<any>(url,cuenta).pipe(
      catchError(this.handleError)
    );
  }
  GetCuenta():Observable<CuentaList[]>
  {
    let url = API_URL + 'cuentas';
    return this.http.get<CuentaList[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  GetCuentaById(id: any):Observable<any>
  {    
    let url = API_URL + 'cuentas/getbyId/' + id;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }
  // Obtener la cuenta segun su tipo para mostrar el reporte de imprimir
  GetCuentaByTipo(tipo_id: number): Observable<CuentaPrint[]>
  {
      let url = API_URL + 'cuentas/getbyTipo/' + tipo_id;
      return this.http.get<CuentaPrint[]>(url).pipe(
        catchError(this.handleError)
      )
  }

  // Obtener la cuenta segun su tipo y sugun la moneda
  GetCuentaByTipoMone(tipo_id: number,mone_id:number): Observable<CuentaPrint[]>
  {
      let url = API_URL + 'cuentas/getbyTipoMone/' + tipo_id + '/' + mone_id;
      return this.http.get<CuentaPrint[]>(url).pipe(
        catchError(this.handleError)
      )
  }

  UpdateCuenta(id:number, cuenta:any):Observable<any> 
  {
    let url = API_URL + 'cuentas/' + id;
    return this.http.put<any>(url,cuenta).pipe(
      catchError(this.handleError)
    )
  }
  DeleteCuenta(id:number):Observable<any>
  {
    let url = API_URL + 'cuentas/' + id;
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
