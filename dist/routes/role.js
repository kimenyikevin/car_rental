"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _Authmiddleware = require("../utils/middlewares/Authmiddleware");
var _roles = require("../controllers/roles");
var router = _express["default"].Router();
router.post('/', _Authmiddleware.Auth, _Authmiddleware.admin, _roles.createRole);
router.get('/', _Authmiddleware.Auth, _Authmiddleware.admin, _roles.getAllRoles);
router.route('/:roleId').get(_Authmiddleware.Auth, _Authmiddleware.admin, _roles.getRole)["delete"](_Authmiddleware.Auth, _Authmiddleware.admin, _roles.deleteRole).put(_Authmiddleware.Auth, _Authmiddleware.admin, _roles.updateRole);
var _default = router;
exports["default"] = _default;