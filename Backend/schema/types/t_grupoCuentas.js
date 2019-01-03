import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql';

import  CuentaTipo      from './t_tipoCuentas';
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
});
