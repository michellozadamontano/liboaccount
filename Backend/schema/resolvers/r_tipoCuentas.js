import { Grupo, Tipo } from '../../db';

export async function getById(parent, { id }) {
  return await Tipo.findOne({ where: { id } });
}
export async function getAll() {
  return await Tipo.findAll();
}
export async function getGrupo(parent, args) {
  return await Grupo.findOne({ where: { id: parent.grupo_id } });
}
export async function create(parent, { codigo, nombre, grupo_id, deudora }) {
  return await Tipo.create({
    codigo,
    nombre,
    grupo_id,
    deudora
  });
}
export async function update(parent, args) {
  return await Tipo.update({
    codigo    : args.codigo,
    nombre    : args.nombre,
    grupo_id  : args.grupo_id,
    deudora   : args.deudora
  },{where:{id: args.id}})
}
export async function remove(parent, { id }) {
  return await Tipo.destroy({ where: { id: id } });
}
