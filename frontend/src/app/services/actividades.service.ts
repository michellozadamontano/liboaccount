import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { Actividades }                      from '../clasificadores/models/actividades.interface';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private http: HttpClient) { }

  getActividades():Observable<Actividades[]>
  {
    let url = API_URL + 'activity';
    return this.http.get<Actividades[]>(url).pipe(catchError(this.handleError));
  }
  getActividadById(id: number): Observable<Actividades>
  {
    let url = API_URL + 'activity/byId/' + id;
    return this.http.get<Actividades>(url).pipe(catchError(this.handleError));
  }
  createActividad(actividad: Actividades):Observable<string>
  {
    let url = API_URL + 'activity';
    return this.http.post<string>(url,actividad).pipe(catchError(this.handleError));
  }
  updateActividad(actividad: Actividades):Observable<string>
  {
    let url = API_URL + 'activity/' + actividad.id;
    return this.http.put<string>(url,actividad).pipe(catchError(this.handleError));
  }
  deleteActividad(id:number):Observable<string>
  {
    let url = API_URL + 'activity/' + id;
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
