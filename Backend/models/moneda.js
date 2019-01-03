/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('moneda', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'moneda'
  });
};
