import {
    GraphQLObjectType,
    GraphQLString,   
    GraphQLInt   
} from 'graphql';


export default new GraphQLObjectType({
    name:'Actividades',
    fields:()=>({
        id      : {type: GraphQLInt},
        codigo  : {type: GraphQLString},
        nombre  : {type: GraphQLString},
        gasto_permitido: {type: GraphQLInt},    

    })
});