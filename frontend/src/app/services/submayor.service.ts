import { Injectable }                     from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError }         from 'rxjs';
import { Submayor }                       from '../clasificadores/models/submayor.interface';
import { catchError }                     from 'rxjs/operators';
import { API_URL }                        from '../core/config';

@Injectable({
  providedIn: 'root'
})
export class SubmayorService {

  constructor(private http: HttpClient) { }

  getSubmayor(id:number):Observable<Submayor[]>{
    let url = API_URL + 'submayor/byId/' + id;
    return this.http.get<Submayor[]>(url).pipe(
      catchError(this.handleError)
    );
  }
  getSubmayorById(id:number):Observable<Submayor>{
    let url = API_URL + 'submayor/getbyId/' + id;
    return this.http.get<Submayor>(url).pipe(
      catchError(this.handleError)
    );
  }
  createSubmayor(submayor: Submayor): Observable<any> {
    let url = API_URL + 'submayor';
    return this.http.post<any>(url,submayor).pipe(
      catchError(this.handleError)
    );
  }
  updateSubmayor(submayor: Submayor): Observable<any> {
    let url = API_URL + 'submayor/' + submayor.id;
    return this.http.put<any>(url,submayor).pipe(
      catchError(this.handleError)
    );
  }
  deleteSubmayor(submayor: Submayor): Observable<any> {
    let url = API_URL + 'submayor/' + submayor.id;
    return this.http.delete<any>(url).pipe(
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
