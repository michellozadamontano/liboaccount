// Imports
import {
    GraphQLInt, 
    GraphQLList,
    GraphQLString
}  from 'graphql';

import ActividadType        from '../types/t_actividades'; 
import * as resolver        from '../resolvers/r_actividad';

// All Actividades
export const actividades = {
    type: new GraphQLList(ActividadType),
    resolve: resolver.getAll
}
  
  // Actividad By Id
export const actividad = {
    type: ActividadType,
    args: {
        id: {type: GraphQLInt}
    },
    resolve: resolver.getById
}

//Check code
export const checkCodeActividad = {
    type: ActividadType,
    args: {
        codigo:{type: GraphQLString}
    },
    resolve: resolver.checkCodigo
}
