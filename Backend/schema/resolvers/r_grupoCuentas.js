import { Grupo, Tipo } from '../../db';

export async function getById(parent, { id }) { 
  
  return await Grupo.findOne({ where: { id } });
}
export async function getAll() {
  return await Grupo.findAll();
}
export async function getTipos(parent, { id }) {
  return await Tipo.findAll({ where: { grupo_id: parent.id } });
}
export async function checkCodigo(parent,args){
  return await Grupo.findOne({where:{codigo: args.codigo}})
}
export async function create(parent, args) {  
  
  return await Grupo.create({
    codigo : args.codigo,
    nombre : args.nombre
  });
}
export async function update(parent, args) {
  console.log(args);
  
  return await Grupo.update({nombre:args.nombre},{where:{id:args.id}});
}
export async function remove(parent, { id }) {
  return await Grupo.destroy({ where: { id } });
}
