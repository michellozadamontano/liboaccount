import { Injectable }                       from '@angular/core';
import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError, map }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
import { Actividades }                      from '../clasificadores/models/actividades.interface';
//Apollo
import { Apollo }                           from 'apollo-angular';
import gql                                  from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  // queries
  Actividades = gql`
  {
    actividades{
      id
      codigo
      nombre
      gasto_permitido
    }
  }
  `
  ActividadById = gql`
  query actividad($id:Int){
    actividad(id:$id){
      id
      codigo
      nombre
      gasto_permitido
    }
  }`

  constructor(
    private http: HttpClient,
    private apollo: Apollo) { }

  getActividades()
  {    
    return this.apollo.watchQuery<Actividades[]>({
      query: this.Actividades
    }).valueChanges.pipe(
      map(result =>result.data["actividades"])
    )
  }
  getActividadById(id: number)
  {
    return this.apollo.watchQuery<Actividades>({
      query: this.ActividadById,
      variables:{id}
    }).valueChanges.pipe(
      map(result =>result.data["actividad"])
    )
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
