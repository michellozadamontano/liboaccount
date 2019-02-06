import * as db from '../db';

export default {
  Query:{
    cuentaTipos: async ()=>{
      return await db.Tipo.findAll();
    }
  },
  CuentaTipo: {
    grupo: async (parent, args)=>{
      return await db.Grupo.findOne({ where: { id: parent.grupo_id } });
    }
  },
  Mutation:{
    createTipoCuenta: async (parent, { codigo, nombre, grupo_id, deudora })=>{
      return await db.Tipo.create({
        codigo,
        nombre,
        grupo_id,
        deudora
      });
    },
    updateTipoCuenta: async (parent, args)=>{
      const tipo = await db.Tipo.findById(args.id);
      return await tipo.update({
        codigo    : args.codigo,
        nombre    : args.nombre,
        grupo_id  : args.grupo_id,
        deudora   : args.deudora
      });
    },
    deleteTipoCuenta: async (parent, { id })=>{
      return await db.Tipo.destroy({ where: { id } });
    }
  }
}
