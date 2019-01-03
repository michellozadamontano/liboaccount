import { Injectable }                       from '@angular/core';

import { HttpClient, HttpErrorResponse }    from '@angular/common/http';
import { Observable, throwError }           from 'rxjs';
import { catchError, map }                       from 'rxjs/operators';
import { API_URL }                          from '../core/config';
//Apollo
import { Apollo }                           from 'apollo-angular';
import gql                                  from 'graphql-tag';
import { CuentaTipo }                       from '../clasificadores/models/cuenta_tipo.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaTipoService {

  // queries
  tipoList = gql`
  {
    cuentaTipos{
      id
      codigo
      nombre
      grupo_id
      deudora
    }
  }`

  tipoById = gql`
  query cuentaTipo($id:Int!) {
    cuentaTipo(id:$id) {
      id
      codigo
      nombre
      grupo_id
      deudora
    }
  }`

  // mutations
  createTipo = gql`
  mutation tipoCreate($codigo: String, $nombre: String, $grupo_id: Int, $deudora: Int) {
    tipoCreate(codigo: $codigo, nombre: $nombre, grupo_id: $grupo_id, deudora: $deudora){
      nombre
    }
  }`

  updateTipo = gql`
  mutation tipoUpdate($id:Int,$codigo: String, $nombre: String, $grupo_id: Int, $deudora: Int) {
    tipoUpdate(id:$id,codigo: $codigo, nombre: $nombre, grupo_id: $grupo_id, deudora: $deudora){
      nombre
    }
  }`

  deleteTipo = gql`
  mutation tipoRemove($id:Int){
    tipoRemove(id:$id){
      nombre
    }
  }`

  constructor(private http: HttpClient, private apollo: Apollo) { }

  getCuentaTipoList()
  {
    
    return this.apollo.watchQuery<CuentaTipo[]>({
      query: this.tipoList
    }).valueChanges.pipe(
      map(result => result.data["cuentaTipos"])
    )

  }
  getCuentaTipoById(id: number) {
    return this.apollo.watchQuery<CuentaTipo>({
      query: this.tipoById,
      variables: {id: +id}
    }).valueChanges.pipe(
      map(result => result.data["cuentaTipo"])
    )
  }
  getbyGrupoId(id: number):Observable<CuentaTipo[]>{
    let url = API_URL + 'cuenta_tipo/byGrupoId/' + id;
    return this.http.get<CuentaTipo[]>(url).pipe(catchError(this.handleError));
  }
  createCuentaTipo(cuenta_tipo: CuentaTipo)
  {
    console.log(cuenta_tipo.deudora);
    let deudora = cuenta_tipo.deudora == 1 ? 1 : 0;
    console.log('deudora', deudora);
    
    
    return this.apollo.mutate({
      mutation: this.createTipo,
      variables:{
        codigo: cuenta_tipo.codigo.toString(),
        nombre: cuenta_tipo.nombre,
        grupo_id: cuenta_tipo.grupo_id,
        deudora: deudora
      },
      refetchQueries:[{
        query: this.tipoList
      }]
    })
  }
  updateCuentaTipo(cuenta_tipo: CuentaTipo)
  {
    console.log(cuenta_tipo.deudora);
      
    let deudora: number = cuenta_tipo.deudora == 1 ? 1 : 0;
    console.log('deudora', deudora); 
    return this.apollo.mutate({
      mutation: this.updateTipo,
      variables: {
        id: +cuenta_tipo.id,
        codigo: cuenta_tipo.codigo.toString(),
        nombre: cuenta_tipo.nombre,
        grupo_id: cuenta_tipo.grupo_id,
        deudora: deudora
      },
      refetchQueries:[{
        query: this.tipoList
      }]
    })
  }
  deleteCuentaTipo(id: number)
  {    
    return this.apollo.mutate({
      mutation: this.deleteTipo,
      variables: {id: +id},
      refetchQueries:[{
        query: this.tipoList
      }]
    })
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
