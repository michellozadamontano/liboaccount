import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLBoolean
} from 'graphql';

import { getGrupo}    from '../resolvers/r_TipoCuentas';
import  CuentaGrupo   from './t_grupoCuentas';


export default new GraphQLObjectType({
    name:'CuentaTipo',
    fields:()=>({
        id      : {type: GraphQLInt},
        codigo  : {type: GraphQLString},
        nombre  : {type: GraphQLString},
        grupo_id: {type: GraphQLInt},
        deudora : {type: GraphQLInt},
        grupo   : {
            type: CuentaGrupo,
            resolve: getGrupo           
        }       

    })
});