/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tcp', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nit: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    actividad_id: {
      type: DataTypes.INTEGER(255),
      allowNull: true,
      references: {
        model: 'actividades',
        key: 'id'
      }
    }
  }, {
    tableName: 'tcp'
  });
};
