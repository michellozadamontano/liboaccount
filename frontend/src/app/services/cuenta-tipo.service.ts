import { Injectable }                       from '@angular/core';

import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { CuentaTipo }                       from '../clasificadores/models/cuenta_tipo.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaTipoService {

  constructor(private http: HttpClient) { }

  getCuentaTipoList():Observable<CuentaTipo[]>
  {
    let url = API_URL + 'cuenta_tipo';
    return this.http.get<CuentaTipo[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  getCuentaTipoById(id: number): Observable<CuentaTipo>
  {
    let url = API_URL + 'cuenta_tipo/byId/' + id;
    return this.http.get<CuentaTipo>(url).pipe(catchError(this.handleError));
  }
  createCuentaTipo(cuenta_tipo: CuentaTipo):Observable<any>
  {
    let url = API_URL + 'cuenta_tipo';
    return this.http.post<any>(url,cuenta_tipo).pipe(catchError(this.handleError));
  }
  updateCuentaTipo(cuenta_tipo: CuentaTipo):Observable<any>
  {
    let url = API_URL + 'cuenta_tipo/' + cuenta_tipo.id;
    return this.http.put<any>(url,cuenta_tipo).pipe(catchError(this.handleError));
  }
  deleteCuentaTipo(id: number):Observable<any>
  {
    let url = API_URL + 'cuenta_tipo/' + id;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {      
      console.error('An error occurred:', error.error.message);
    } else {     
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }   
    return throwError(
      'Something bad happened; please try again later.');
  };
}
