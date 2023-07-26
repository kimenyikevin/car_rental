"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _category = require("../controllers/category");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _category.createCategory);
router.get('/', _Authmiddleware.Auth, _category.getAllCategories);
router.route('/:categoryid').get(_Authmiddleware.Auth, _category.getCategory)["delete"](_Authmiddleware.Auth, _category.deleteCategory).put(_Authmiddleware.Auth, _category.updateCategory);
var _default = router;
exports["default"] = _default;