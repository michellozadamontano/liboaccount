/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actividades', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gasto_permitido: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    }
  }, {
    tableName: 'actividades'
  });
};
