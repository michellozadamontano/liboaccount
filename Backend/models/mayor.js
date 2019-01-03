/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mayor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    diario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'diario_contable',
        key: 'id'
      }
    },
    ejercicio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'ejercicio',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    cuenta_plan_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'cuenta_plan',
        key: 'id'
      }
    },
    debe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'mayor'
  });
};
