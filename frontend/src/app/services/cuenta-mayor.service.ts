import { Injectable }                       from '@angular/core';

import { map }                              from 'rxjs/operators';

//Apollo
import { Apollo }                           from 'apollo-angular';
import gql                                  from 'graphql-tag';
import { CuentaMayor }                      from '../clasificadores/models/cuenta_mayor.interface';



@Injectable({
  providedIn: 'root'
})
export class CuentaMayorService {
  // queries
  getMayor = gql`
  {
    cuentaGrupos{
      nombre
      id
      codigo
    }
  }`

  getMayorById = gql`
  query cuentaGrupo($id: Int!)
  {
    cuentaGrupo(id:$id){
      id
      nombre
      codigo
    }
  }`

  checkCode = gql`
  query checkCode($codigo: String){
    checkCodigoGrupo(codigo: $codigo){
      codigo
    }
  }`


  //mutation
   grupoCreate = gql`  
      mutation GrupoCreate($codigo: String!, $nombre: String!) {
        createGrupo(codigo:$codigo,nombre: $nombre) {
          nombre
        
      }  
    }`;
   grupoUpdate = gql`
   mutation UpdateGrupo($id: Int!,$codigo: String, $nombre:String){
    updateGrupo(id: $id, codigo: $codigo, nombre: $nombre) {
      nombre
    }
   }`

    deleteMayor = gql`
    mutation grupoRemove($id: Int!){
      removeGrupo(id:$id)
    }`;


  constructor(    
    private apollo: Apollo   
    ) { }

  getCuentaMayor()
  {    
   return this.apollo.watchQuery<CuentaMayor[]>({
      query: this.getMayor
    })
      .valueChanges
      .pipe(
        map(result => result.data["cuentaGrupos"])
      );
     
  }
  getCuentaMayorById(id:number)
  {       
    
      let val = +id;
      return this.apollo.watchQuery<CuentaMayor>({
        query: this.getMayorById,
        variables:{id:val}
      })
      .valueChanges
        .pipe(
          map(result => result.data["cuentaGrupo"])
        );
  }
  checkCodeMayor(codigo: string){
    return this.apollo.watchQuery<boolean>({
      query: this.checkCode,
      variables:{codigo: codigo}
    }).valueChanges
    .pipe(
      map(result => result.data["checkCode"])
    );
  }
  createCuentaMayor(nombre:string, codigo:string)
  {   
    return this.apollo.mutate(
      {
        mutation: this.grupoCreate, 
        variables: {nombre: nombre,codigo:codigo.toString()},
        refetchQueries:[{
          query: this.getMayor
        }]
      });
     
  }
  updateCuentaMayor(mayor: CuentaMayor)
  {
    return this.apollo.mutate({
      mutation: this.grupoUpdate,
      variables:{id: +mayor.id, codigo: mayor.codigo, nombre: mayor.nombre},
      refetchQueries:[{
        query: this.getMayor
      }]
    })
  }
  deleteCuentaMayor(id:number)
  {   
       
    return this.apollo.mutate(
      {
        mutation:this.deleteMayor,
        variables:{id:+id},        
        refetchQueries:[{
          query: this.getMayor
        }]
      });
  }

 
}
