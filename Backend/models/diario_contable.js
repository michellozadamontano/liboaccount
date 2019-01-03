/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('diario_contable', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    documento: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    ejercicio_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'ejercicio',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    moneda_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'moneda',
        key: 'id'
      }
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    debe: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    haber: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    anulado: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    }
  }, {
    tableName: 'diario_contable'
  });
};
