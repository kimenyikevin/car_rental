"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController");
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _users = require("../controllers/users");
var router = _express["default"].Router();
router.post('/signin', _authController.signIn);
router.route('/signup').post(_Authmiddleware.Auth, _authController.signup);
router.route('/').get(_Authmiddleware.Auth, _users.getAllUsers);
router.route('/:uuid').get(_Authmiddleware.Auth, _Authmiddleware.admin, _users.getSingleUser).put(_Authmiddleware.Auth, _Authmiddleware.admin, _users.updateUser)["delete"](_Authmiddleware.Auth, _Authmiddleware.admin, _users.deleteUser);
var _default = router;
exports["default"] = _default;