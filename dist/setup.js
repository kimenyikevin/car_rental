"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var envFile = '.env.dev';
if (process.env.NODE_ENV === 'prod') envFile = '.env';
_dotenv["default"].config({
  path: envFile
});