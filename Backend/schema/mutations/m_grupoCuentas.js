// Imports
import { GraphQLString, GraphQLInt } from 'graphql'; 

// App Imports
import CuentaGrupoType        from '../types/t_grupoCuentas';
import * as resolver          from '../resolvers/r_grupoCuentas';

// Grupo create
 export const grupoCreate = {
  type: CuentaGrupoType,
  args: {
    codigo: {
      name: 'codigo',
      type: GraphQLString
    },
    nombre: {
      name: 'nombre',
      type: GraphQLString
    }
  },
  resolve: resolver.create
}
//Grupo update
export const grupoUpdate = {
  type: CuentaGrupoType,
  args: {
    id: {type: GraphQLInt},
    codigo: {
      name: 'codigo',
      type: GraphQLString
    },
    nombre: {
      name: 'nombre',
      type: GraphQLString
    }
  },
  resolve: resolver.update
}

// Grupo remove
 export const grupoRemove = {
  type: CuentaGrupoType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: resolver.remove
}