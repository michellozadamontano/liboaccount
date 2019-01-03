// Imports
import { GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'; 

// App Imports
import CuentaTipoType               from '../types/t_tipoCuentas';
import * as resolver                from '../resolvers/r_tipoCuentas';

// Tipo create
 export const tipoCreate = {
  type: CuentaTipoType,
  args: {
    codigo: {
      name: 'codigo',
      type: GraphQLString
    },
    nombre: {
      name: 'nombre',
      type: GraphQLString
    },
    grupo_id: {
      name: 'grupo_id',
      type: GraphQLInt
    },
    deudora: {
      name: 'deudora',
      type: GraphQLInt
    }
  },
  resolve: resolver.create
}

// Tipo update
export const tipoUpdate = {
  type: CuentaTipoType,
  args:{
    id        : { type: GraphQLInt },
    codigo    : { type: GraphQLString },
    nombre    : { type: GraphQLString },
    grupo_id  : { type: GraphQLInt },
    deudora   : { type: GraphQLInt }
  },
  resolve: resolver.update
}

// Tipo remove
 export const tipoRemove = {
  type: CuentaTipoType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: resolver.remove
}