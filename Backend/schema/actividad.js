import { gql }          from 'apollo-server-express';

export default gql`
    type Query {
    actividades: [Actividad]   
    actividad(id:Int): Actividad 
  }

  type Mutation {
    createActividad(
        codigo: String
        nombre: String
        gasto_permitido: Int
    ):Actividad
    updateAtividad(
        id: Int
        codigo: String
        nombre: String
        gasto_permitido: Int
    ):Actividad
    deleteActividad(id:Int):Boolean
  }

  type Actividad {
     id: Int!
     codigo: String
     nombre: String
     gasto_permitido: Int
 }
`
