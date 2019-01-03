
// Imports
import { GraphQLInt, GraphQLList }   from 'graphql';

import CuentaTipoType               from '../types/t_tipoCuentas';
import { getAll, getById }          from '../resolvers/r_tipoCuentas';

// All Cuentas Tipo
export const cuentaTipos = {
    type: new GraphQLList(CuentaTipoType),
    resolve: getAll
  }
  
  // Cuenta Tipo By Id
  export const cuentaTipo = {
    type: CuentaTipoType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: getById
}
