import *as db from '../db';

export default {
  Query:{
    actividades: async function getAll() {
      return await db.Actividad.findAll();
    },
    actividad: async (parent,args)=>{
      return await db.Actividad.findOne({ where: { id:args.id } });
    }
  },
  Mutation:{
    createActividad: async (parent,args)=>{
      return await db.Actividad.create({
        codigo          : args.codigo,
        nombre          : args.nombre,
        gasto_permitido : args.gasto_permitido
        
      });
    },
    updateAtividad: async (parent,args)=>{
      const actividad = await db.Actividad.findById(args.id);
      return await actividad.update({
        codigo          : args.codigo,
        nombre          : args.nombre,
        gasto_permitido : args.gasto_permitido
      })
    },
    deleteActividad: async (parent,{id})=> {
      return await db.Actividad.destroy({where:{id}});
    }
  }
}
