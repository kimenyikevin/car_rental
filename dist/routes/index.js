"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _user = _interopRequireDefault(require("./user"));
var _category = _interopRequireDefault(require("./category"));
var _product = _interopRequireDefault(require("./product"));
var _role = _interopRequireDefault(require("./role"));
var _report = _interopRequireDefault(require("./report"));
var _credit = _interopRequireDefault(require("./credit"));
var _expenses = _interopRequireDefault(require("./expenses"));
var router = _express["default"].Router();
router.use('/users', _user["default"]);
router.use('/category', _category["default"]);
router.use('/product', _product["default"]);
router.use('/role', _role["default"]);
router.use('/report', _report["default"]);
router.use('/credit', _credit["default"]);
router.use('/expenses', _expenses["default"]);
var _default = router;
exports["default"] = _default;