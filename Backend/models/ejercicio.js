/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ejercicio', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    year: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    }
  }, {
    tableName: 'ejercicio'
  });
};
