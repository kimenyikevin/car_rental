"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
require("./setup");
var _app = _interopRequireDefault(require("./app"));
/* eslint-disable no-console */

var PORT = process.env.PORT || 3000;
_app["default"].listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT, " in ").concat(process.env.NODE_ENV, " mode"));
});