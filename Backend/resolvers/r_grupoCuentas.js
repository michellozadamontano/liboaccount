import * as db from '../db';

export default {
  Query:{
    cuentaGrupo: async (parent, { id })=>{
      return await db.Grupo.findOne({ where: { id } });
    },
    cuentaGrupos: async ()=>{
      return await db.Grupo.findAll();
    },
    checkCodigoGrupo: async (parent,{codigo})=> {
      let result = false;
      const grupo = await db.Grupo.findOne({where:{codigo}});
      if(grupo != null)result = true;
      return result;
    }
  },
  Mutation:{
    createGrupo: async (parent, args)=>{
      return await db.Grupo.create({
        codigo : args.codigo,
        nombre : args.nombre
      });
    },    
    updateGrupo: async (parent, args)=>{
      const grupo = await db.Grupo.findById(args.id);
      return await grupo.update({
        codigo : args.codigo,
        nombre : args.nombre
      })
    },
    removeGrupo: async (parent,{id})=>{
      return await db.Grupo.destroy({ where: { id } });
    }
  },
  CuentaGrupo:{
    tipoCuenta: async (parent,args)=>{
      return await db.Tipo.findAll({where:{grupo_id: parent.id}});
    }
  }
}
