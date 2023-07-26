"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _product = require("../controllers/product");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _product.createProduct);
router.get('/category/:id', _Authmiddleware.Auth, _product.getAllProductsByCategory);
var _default = router;
exports["default"] = _default;