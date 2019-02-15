import { gql }          from 'apollo-server-express';

export default gql`
    extend type Query {
        cuentaTipos: [CuentaTipo]
        cuentaTipo : CuentaTipo
    }

    extend type Mutation {
        createTipoCuenta(
            codigo      : String
            nombre      : String
            grupo_id    : Int
            deudora     : Int
        ): CuentaTipo
        updateTipoCuenta(
            id          : Int
            codigo      : String
            nombre      : String
            grupo_id    : Int
            deudora     : Int
        ):CuentaTipo
        deleteTipoCuenta(id:Int):CuentaTipo
    }
    type CuentaTipo {
        id      : Int!
        codigo  : String
        nombre  : String
        grupo_id: Int
        deudora : Int
        grupo   : CuentaGrupo
    }
`