import { Injectable }                     from '@angular/core';
import { HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Observable, throwError }         from 'rxjs';
import { catchError }                     from 'rxjs/operators';
import { API_URL }                        from '../core/config';
import { PlantillaComp } from '../clasificadores/models/plantilla_comp.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantCompService {

  constructor( private http: HttpClient) { }

  getPlantilla():Observable<PlantillaComp[]>
  {
    let url = API_URL + 'plantilla';
    return this.http.get<PlantillaComp[]>(url).pipe(
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
