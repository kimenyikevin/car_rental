"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verify = exports.sign = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var sign = function sign(payload) {
  return _jsonwebtoken["default"].sign(payload, process.env.JWT_SECRET, {
    expiresIn: '12h'
  });
};
exports.sign = sign;
var verify = function verify(payload) {
  return _jsonwebtoken["default"].verify(payload, process.env.JWT_SECRET);
};
exports.verify = verify;