import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../../core/config';
import { GenericoList } from '../models/generico_list.interface';
import { Generico } from '../models/generico.interface';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  constructor(
    private http: HttpClient
  ) { }

  getGenerico():Observable<GenericoList[]>
  {
    let url = API_URL + 'generico';
    return this.http.get<GenericoList[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  getGenericoById(id:number):Observable<Generico>
  {
    let url = API_URL + 'generico/byId/' + id;
    return this.http.get<Generico>(url).pipe(
      catchError(this.handleError)
    )
  }
  createGenerico(generico: Generico):Observable<string>
  {
    let url = API_URL + 'generico';
    return this.http.post<string>(url,generico).pipe(
      catchError(this.handleError)
    );
  }
  updateGenerico(generico:Generico):Observable<string>
  {
    let url = API_URL + 'generico/' + generico.id;
    return this.http.put<string>(url,generico).pipe(
      catchError(this.handleError)
    );
  }
  deleteGenerico(id:number):Observable<string>
  {
    let url = API_URL + 'generico/' + id;
    return this.http.delete<string>(url).pipe(
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
