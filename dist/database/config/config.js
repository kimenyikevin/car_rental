"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
module.exports = {
  development: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    port: process.env.PORT,
    senderEmail: process.env.SENDER_EMAIL,
    hashPassNum: process.env.HASH_PASSWORD_SALT
  },
  test: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.TEST_URL,
    dialect: 'postgres',
    port: process.env.PORT
  },
  production: {
    JWT_SECRET: process.env.JWT_SECRET,
    url: process.env.PROD_DB_URL,
    dialect: 'postgres',
    port: process.env.PORT,
    sendgridAPIKey: process.env.SENGRID_API_KEY,
    senderEmail: process.env.SENDER_EMAIL,
    hashPassNum: process.env.HASH_PASSWORD_SALT
  }
};