import { Actividad } from '../../db';

export async function getById(parent, { id }) {
  return await Actividad.findOne({ where: { id } });
}
export async function getAll() {
  return await Actividad.findAll();
}
export async function checkCodigo(parent,args) {
    return await Actividad.findOne({where:{codigo: args.codigo}})
}

export async function create(parent, args) {
  return await Actividad.create({
    codigo          : args.codigo,
    nombre          : args.nombre,
    gasto_permitido : args.gasto_permitido
    
  });
}
export async function update(parent, args) {
  return await Actividad.update({
    codigo          : args.codigo,
    nombre          : args.nombre,
    gasto_permitido : args.gasto_permitido
  },{where:{id: args.id}})
}
export async function remove(parent, { id }) {
  return await Actividad.destroy({ where: { id: id } });
}
