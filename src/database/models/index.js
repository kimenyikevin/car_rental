import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import prop from '../config/config.cjs';

const basename = _basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = prop[env];
const db = {};

let sequelize;


console.log(config)
if (config.url) {
  sequelize = new Sequelize(config.url, {
    dialect: 'postgres',
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: false, // Required to accept self-signed certificate from Heroku
    //   },
    // },
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}


readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = require(join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connected! Database Status : ON 🔥.');
  })
  .catch((err) => {
    console.error('Failed to connect! Database Status : OFF:', err);
  });

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing the database:', error);
  }
})();

export default db;
