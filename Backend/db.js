import Sequelize        from 'sequelize';
import GrupoModel       from './models/cuenta_grupo';
import TipoModel        from './models/cuenta_tipo';
import ActividadModel   from './models/actividades';
import TcpModel         from './models/tcp';
import CcostoModel      from './models/tcp';

const sequelize = new Sequelize('liboaccount', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },    
  });

export const Grupo        = GrupoModel(sequelize,Sequelize);
export const Tipo         = TipoModel(sequelize,Sequelize);
export const Actividad    = ActividadModel(sequelize,Sequelize);
export const Tcp          = TcpModel(sequelize,Sequelize);
export const Ccosto       = CcostoModel(sequelize,Sequelize);

Tipo.belongsTo(Grupo,{foreignKey: 'grupo_id'});
Grupo.hasMany(Tipo,{foreignKey: 'grupo_id'});

Tcp.belongsTo(Actividad,{foreignKey: 'actividad_id'});