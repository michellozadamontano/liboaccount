import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { CuentaPlanList }                   from '../clasificadores/models/cuenta_plan_list.interface';
import { CuentaPlan } from '../clasificadores/models/cuenta_plan.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaPlanService {

  constructor(private http: HttpClient) { }

  getCuentaPlan():Observable<CuentaPlanList[]>
  {
    let url = API_URL + 'cuenta_plan';
    return this.http.get<CuentaPlanList[]>(url).pipe(catchError(this.handleError));
  }
  getCuentaPlanById(id:number):Observable<CuentaPlan>
  {
    let url = API_URL + 'cuenta_plan/byId/' + id;
    return this.http.get<CuentaPlan>(url).pipe(catchError(this.handleError));
  }
  getbyTipoId(id: number):Observable<CuentaPlan[]>{
    let url = API_URL + 'cuenta_plan/byTipoId/' + id;
    return this.http.get<CuentaPlan[]>(url).pipe(catchError(this.handleError));
  }
  createCuentaPlan(cuenta: CuentaPlan):Observable<string>
  {
    let url = API_URL + 'cuenta_plan';
    return this.http.post<string>(url,cuenta).pipe(catchError(this.handleError));
  }
  updateCuentaPlan(cuenta: CuentaPlan):Observable<string>
  {
    let url = API_URL + 'cuenta_plan/' + cuenta.id;
    return this.http.put<string>(url,cuenta).pipe(catchError(this.handleError));
  }
  deleteCuentaPlan(id:number):Observable<string>
  {
    let url = API_URL + 'cuenta_plan/' + id;
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
