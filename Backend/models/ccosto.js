/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ccosto', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'ccosto'
  });
};
