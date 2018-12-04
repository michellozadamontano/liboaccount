import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { CcostoList }                       from '../clasificadores/models/ccosto_list.interface';
import { API_URL }                          from '../core/config';
import { Ccosto }                           from '../clasificadores/models/ccosto.interface';


@Injectable({
  providedIn: 'root'
})
export class CcostoService {

  constructor(
    private http: HttpClient
  ) { }

  InsertCosto(costo: Ccosto): Observable<any>{     
      
    let url = API_URL + 'ccosto';
    return this.http.post<any>(url,costo).pipe(
      catchError(this.handleError)
    );
  }
  GetCostos():Observable<CcostoList[]>
  {
    let url = API_URL + 'ccosto';
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    )
  }
  GetCostoById(id:number):Observable<Ccosto>
  {
    let url = API_URL + 'ccosto/byId/' + id;
    return this.http.get<Ccosto>(url).pipe(
      catchError(this.handleError)
    )
  }
  CheckCodigo(codigo:any):Observable<number>
  {
    let url = API_URL + 'ccosto/codigo/' + codigo;
    return this.http.get<number>(url).pipe(
      catchError(this.handleError)
    )
  }
  UpdateCosto(id: number,ccosto: Ccosto):Observable<any>
  {
    let url = API_URL + 'ccosto/' + id;
    return this.http.put<any>(url,ccosto).pipe(
      catchError(this.handleError)
    )
  }
  DeleteCosto(id:number):Observable<any>
  {
    let url = API_URL + 'ccosto/' + id;
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
