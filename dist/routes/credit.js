"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _creaditController = require("../controllers/creaditController");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _creaditController.creatCredit);
router.get('/user', _Authmiddleware.Auth, _creaditController.getCreditByUser);
router.get('/daily', _Authmiddleware.Auth, _creaditController.getDailyCredit);
var _default = router;
exports["default"] = _default;