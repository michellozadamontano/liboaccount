import { gql }          from 'apollo-server-express';

export default gql`
  extend type Query {
    cuentaGrupos: [CuentaGrupo]   
    cuentaGrupo(id:Int): CuentaGrupo
    checkCodigoGrupo(codigo:String): Boolean
  }

  extend type Mutation {
    createGrupo(
        codigo: String
        nombre: String        
    ):CuentaGrupo
    updateGrupo(
        id    : Int
        codigo: String
        nombre: String        
    ):CuentaGrupo
    removeGrupo(id: Int):Boolean
  }

  type CuentaGrupo {
     id: Int!
     codigo: String
     nombre: String
     tipoCuenta: [CuentaTipo]  
 }
`
/*import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import  CuentaTipo      from './types/t_tipoCuentas';
import { getTipos }     from '../resolvers/r_GrupoCuentas';

export default new GraphQLObjectType({
    name:'CuentaGrupo',
    fields:()=>({
        id: {type: GraphQLInt},
        codigo: {type: GraphQLString},
        nombre: {type: GraphQLString},
        tipocuenta: {
            type: new GraphQLList(CuentaTipo),
            resolve: getTipos
        }

    })
});*/
