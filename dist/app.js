"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swagger = _interopRequireDefault(require("../swagger.json"));
var _index = _interopRequireDefault(require("./routes/index"));
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(_swagger["default"]));
app.use('/api/v1', _index["default"]);
var _default = app;
exports["default"] = _default;