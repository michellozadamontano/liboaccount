/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuenta_grupo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cuenta_grupo'
  });
};
