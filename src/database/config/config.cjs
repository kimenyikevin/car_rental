import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    database: 'click_bar_db',
    port: process.env.PORT,
    senderEmail: process.env.SENDER_EMAIL,
    hashPassNum: process.env.HASH_PASSWORD_SALT,
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_URL,
    dialect: 'postgres',
    port: process.env.PORT,
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    port: process.env.PORT,
    sendgridAPIKey: process.env.SENGRID_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
    hashPassNum: process.env.HASH_PASSWORD_SALT,

  },
};
