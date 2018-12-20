import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { CuentaMayor }                      from '../clasificadores/models/cuenta_mayor.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaMayorService {

  constructor(private http: HttpClient) { }

  getCuentaMayor():Observable<CuentaMayor[]>
  {
    let url = API_URL + 'cuenta_mayor';
    return this.http.get<CuentaMayor[]>(url).pipe(catchError(this.handleError));
  }
  getCuentaMayorById(id:number):Observable<CuentaMayor>
  {
    let url = API_URL + 'cuenta_mayor/byId/' + id;
    return this.http.get<CuentaMayor>(url).pipe(catchError(this.handleError));
  }
  createCuentaMayor(mayor: CuentaMayor):Observable<string>
  {
    let url = API_URL + 'cuenta_mayor';
    return this.http.post<string>(url,mayor).pipe(catchError(this.handleError));
  }
  updateCuentaMayor(mayor: CuentaMayor):Observable<string>
  {
    let url = API_URL + 'cuenta_mayor/' + mayor.id;
    return this.http.put<string>(url,mayor).pipe(catchError(this.handleError));
  }
  deleteCuentaMayor(id:number):Observable<string>
  {
    let url = API_URL + 'cuenta_mayor/' + id;
    return this.http.delete<string>(url).pipe(catchError(this.handleError));
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
