"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _expensesController = require("../controllers/expensesController");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _expensesController.creatExpenses);
router.get('/capital', _Authmiddleware.Auth, _expensesController.getExpensesByName);
router.get('/daily', _Authmiddleware.Auth, _expensesController.getDailyExpenses);
var _default = router;
exports["default"] = _default;