import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { CentroCosto } from '../clasificadores/models/centro_costo.interface';


@Injectable({
  providedIn: 'root'
})
export class CentroCostoService {

  constructor(private http: HttpClient) { }

  getCentroCostolist():Observable<CentroCosto[]>
  {
    let url = API_URL + 'ccosto';
    return this.http.get<CentroCosto[]>(url).pipe(catchError(this.handleError));
  }
  getCentroCostoById(id:number):Observable<CentroCosto>
  {
    let url = API_URL + 'ccosto/byId/' + id;
    return this.http.get<CentroCosto>(url).pipe(catchError(this.handleError));
  }
  createCentroCosto(CentroCosto: CentroCosto):Observable<string>
  {
    let url = API_URL + 'ccosto';
    return this.http.post<string>(url,CentroCosto).pipe(catchError(this.handleError));
  }
  updateteCentroCosto(CentroCosto: CentroCosto):Observable<string>
  {
    let url = API_URL + 'ccosto/' + CentroCosto.id;
    return this.http.put<string>(url,CentroCosto).pipe(catchError(this.handleError));
  }
  deleteCentroCosto(id: number):Observable<string>
  {
    let url = API_URL + 'ccosto/' + id;
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
