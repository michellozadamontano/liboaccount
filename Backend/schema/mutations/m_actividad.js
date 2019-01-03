// Imports
import { 
    GraphQLString, 
    GraphQLInt 
} from 'graphql'; 

// App Imports
import ActividadType            from '../types/t_actividades';
import * as resolver            from '../resolvers/r_actividad';

// Actividad create
 export const actividadCreate = {
  type: ActividadType,
  args: {
    codigo          : {type: GraphQLString},
    nombre          : {type: GraphQLString},
    gasto_permitido : {type: GraphQLInt}
  },
  resolve: resolver.create
}
//Actividad update
export const actividadUpdate = {
  type: ActividadType,
  args: {
    id: {type: GraphQLInt},
    codigo          : {type: GraphQLString},
    nombre          : {type: GraphQLString},
    gasto_permitido : {type: GraphQLInt}
  },
  resolve: resolver.update
}

// Actividad remove
 export const actividadRemove = {
  type: ActividadType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: resolver.remove
}