// Imports
import {
    GraphQLInt, 
    GraphQLList,
    GraphQLString
}  from 'graphql';

import CuentaGrupoType    from '../types/t_grupoCuentas'; 
import * as resolver      from '../resolvers/r_grupoCuentas';

// All Cuentas Grupos
export const cuentaGrupos = {
    type: new GraphQLList(CuentaGrupoType),
    resolve: resolver.getAll
}
  
  // Cuenta Grupo By Id
export const cuentaGrupo = {
    type: CuentaGrupoType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver.getById
}

//Check code
export const checkCode = {
    type: CuentaGrupoType,
    args: {
        codigo:{type: GraphQLString}
    },
    resolve: resolver.checkCodigo
}
