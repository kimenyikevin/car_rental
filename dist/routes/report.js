"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _reportController = require("../controllers/reportController");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _reportController.creteReport);
router.get('/', _Authmiddleware.Auth, _reportController.getDailyRepport);
router.get('/count', _Authmiddleware.Auth, _reportController.getAllreportAndCount);
var _default = router;
exports["default"] = _default;