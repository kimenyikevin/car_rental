"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRole = exports.getRole = exports.getAllRoles = exports.deleteRole = exports.createRole = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var Role = _models["default"].Role;
var createRole = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, roleName, description, role, newRole;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, roleName = _req$body.roleName, description = _req$body.description;
          if (!(!roleName || !description)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            status: 'fail',
            message: 'Invalid request, Provide valid information'
          }));
        case 4:
          _context.next = 6;
          return Role.findOne({
            where: {
              roleName: roleName
            }
          });
        case 6:
          role = _context.sent;
          if (!role) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(403).json({
            status: 'fail',
            message: 'Role already exist'
          }));
        case 9:
          _context.next = 11;
          return Role.create({
            roleName: roleName,
            description: description
          });
        case 11:
          newRole = _context.sent;
          res.status(201).json({
            status: 'success',
            data: {
              role: newRole
            }
          });
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while creating a Role',
            err: _context.t0.message
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function createRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createRole = createRole;
var getAllRoles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var Roles;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Role.findAll();
        case 3:
          Roles = _context2.sent;
          res.status(200).json({
            status: 'success',
            data: {
              Roles: Roles
            }
          });
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while fetching Roles',
            err: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllRoles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllRoles = getAllRoles;
var getRole = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var roleId, role;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          roleId = req.params.roleId;
          _context3.next = 4;
          return Role.findOne({
            where: {
              roleId: roleId
            }
          });
        case 4:
          role = _context3.sent;
          if (role) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Role not found'
          }));
        case 7:
          res.status(200).json({
            status: 'success',
            data: {
              role: role
            }
          });
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while fetching Role',
            err: _context3.t0.message
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getRole = getRole;
var updateRole = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var roleId, _req$body2, roleName, description, role, updatedRole;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          roleId = req.params.roleId;
          _req$body2 = req.body, roleName = _req$body2.roleName, description = _req$body2.description;
          _context4.next = 5;
          return Role.findOne({
            where: {
              roleId: roleId
            }
          });
        case 5:
          role = _context4.sent;
          if (role) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Role not found'
          }));
        case 8:
          _context4.next = 10;
          return Role.update({
            roleName: roleName || Role.roleName,
            description: description || Role.description
          }, {
            where: {
              roleId: roleId
            },
            returning: true,
            plain: true
          });
        case 10:
          updatedRole = _context4.sent;
          res.status(200).json({
            status: 'success',
            data: {
              Role: updatedRole[1]
            }
          });
          _context4.next = 17;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while updating Role',
            err: _context4.t0.message
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function updateRole(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateRole = updateRole;
var deleteRole = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var roleId, role;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          roleId = req.params.roleId;
          _context5.next = 4;
          return Role.findOne({
            where: {
              roleId: roleId
            }
          });
        case 4:
          role = _context5.sent;
          if (role) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Role not found'
          }));
        case 7:
          _context5.next = 9;
          return role.destroy({
            where: {
              roleId: roleId
            }
          });
        case 9:
          res.status(200).json({
            status: 'success',
            message: 'Role deleted successfully'
          });
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while deleting Role',
            err: _context5.t0.message
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function deleteRole(_x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteRole = deleteRole;