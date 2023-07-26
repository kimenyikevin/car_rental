"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getSingleUser = exports.getAllUsers = exports.deleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _models = _interopRequireDefault(require("../database/models"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var User = _models["default"].User;

// get all  users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var users;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return User.findAll({});
        case 3:
          users = _context.sent;
          res.status(200).json({
            status: 'success',
            users: users
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'error',
            error: _context.t0.message
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getAllUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// get a single user
exports.getAllUsers = getAllUsers;
var getSingleUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return User.findOne({
            where: {
              uuid: req.params.uuid
            }
          });
        case 3:
          user = _context2.sent;
          if (user) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            status: 'error',
            error: 'User not found'
          }));
        case 6:
          res.status(200).json({
            status: 'success',
            user: user
          });
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            status: 'error',
            error: _context2.t0.message
          });
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function getSingleUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//update a user
exports.getSingleUser = getSingleUser;
var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var user, updatedUser;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return User.findOne({
            where: {
              uuid: req.params.uuid
            }
          });
        case 3:
          user = _context3.sent;
          if (user) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: 'error',
            error: 'User not found'
          }));
        case 6:
          _context3.next = 8;
          return user.update(req.body);
        case 8:
          updatedUser = _context3.sent;
          res.status(200).json({
            status: 'success',
            updatedUser: updatedUser
          });
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            status: 'error',
            error: _context3.t0.message
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }));
  return function updateUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// delete a user
exports.updateUser = updateUser;
var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var user;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return User.findOne({
            where: {
              uuid: req.params.uuid
            }
          });
        case 3:
          user = _context4.sent;
          if (user) {
            _context4.next = 6;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 'error',
            error: 'User not found'
          }));
        case 6:
          _context4.next = 8;
          return user.destroy();
        case 8:
          res.status(200).json({
            status: 'success',
            message: 'User deleted successfully'
          });
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            status: 'error',
            error: _context4.t0.message
          });
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.deleteUser = deleteUser;