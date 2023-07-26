"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signup = exports.signIn = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _models = _interopRequireDefault(require("../database/models"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var User = _models["default"].User;
var signToken = function signToken(uuid) {
  return _jsonwebtoken["default"].sign({
    uuid: uuid
  }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};
var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, firstName, lastName, phone, user, newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, phone = _req$body.phone;
          if (!(!firstName || !lastName || !phone)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            status: 'fail',
            message: 'Invalid request, Provide valid information'
          }));
        case 4:
          _context.next = 6;
          return User.findOne({
            where: {
              phone: phone
            }
          });
        case 6:
          user = _context.sent;
          if (!user) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(403).json({
            status: 'fail',
            message: 'User already exist'
          }));
        case 9:
          _context.next = 11;
          return User.create({
            firstName: firstName,
            lastName: lastName,
            phone: phone
          });
        case 11:
          newUser = _context.sent;
          res.status(201).json({
            status: 'success',
            data: {
              users: newUser
            }
          });
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while creating a user',
            err: _context.t0.message
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function signup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.signup = signup;
var signIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _req$body2, email, password, user, Token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          /**
           * Get user email and password
           */
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            status: 'fail',
            message: 'Invalid data supplied'
          }));
        case 4:
          _context2.next = 6;
          return User.findOne({
            where: {
              email: email
            }
          });
        case 6:
          user = _context2.sent;
          if (user) {
            _context2.next = 9;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            status: 'fail',
            message: 'User is not  registered'
          }));
        case 9:
          _context2.t0 = !user;
          if (_context2.t0) {
            _context2.next = 14;
            break;
          }
          _context2.next = 13;
          return _bcryptjs["default"].compare(password, user.password);
        case 13:
          _context2.t0 = !_context2.sent;
        case 14:
          if (!_context2.t0) {
            _context2.next = 16;
            break;
          }
          return _context2.abrupt("return", res.status(403).json({
            status: 'fail',
            message: 'Invalid email or password'
          }));
        case 16:
          Token = signToken(user.uuid);
          if (!user.dataValues.delinquent) {
            //populate user role from roleid
            // const role = await model.Role.findOne({
            //   where: { roleId: user.roleId },
            // });
            res.status(200).json({
              status: 'success',
              message: 'Logged In successfully!!',
              token: Token,
              data: {
                user: user
              }
            });
          } else {
            res.status(403).json({
              status: 'fail',
              message: 'Please pay or renew subscription to be eligible for our services, check your email for more information',
              token: Token,
              data: {
                user: user
              }
            });
          }
          _context2.next = 23;
          break;
        case 20:
          _context2.prev = 20;
          _context2.t1 = _context2["catch"](0);
          res.status(403).json({
            status: 'fail',
            message: 'Error while signin user',
            err: _context2.t1.message
          });
        case 23:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 20]]);
  }));
  return function signIn(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
exports.signIn = signIn;