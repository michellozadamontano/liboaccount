import { Injectable }                       from '@angular/core';
import { HttpClient, 
  HttpErrorResponse, HttpParams }           from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AreaList } from '../clasificadores/models/area_list.interface';
import { API_URL } from '../core/config';
import { Area } from '../clasificadores/models/area.interface';


@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private http: HttpClient) { }

  getArea(): Observable<AreaList[]>{
    let url = API_URL + 'areas';
    return this.http.get<AreaList[]>(url).pipe(
      catchError(this.handleError)
    )
  }
  getAreaById(id:number): Observable<Area>{
    let url = API_URL + 'areas/byId/' + id;
    return this.http.get<Area>(url).pipe(
      catchError(this.handleError)
    )
  }
  createArea(area: Area): Observable<string>
  {
    let url = API_URL + 'areas';
    return this.http.post<string>(url,area).pipe(
      catchError(this.handleError)
    );
  }
  updateArea(area: Area): Observable<string>
  {
    let url = API_URL + 'areas/' + area.id;
    return this.http.put<string>(url,area).pipe(
      catchError(this.handleError)
    );
  }
  deleteArea(id: number): Observable<string>
  {
    let url = API_URL + 'areas/' + id;
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
