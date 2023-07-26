"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config('');
'use strict';
module.exports = {
  up: function () {
    var _up = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = queryInterface;
            _context.next = 3;
            return _bcryptjs["default"].hash(process.env.ADIMIN_PASSWORD, Number(process.env.HASH_PASSWORD_SALT));
          case 3:
            _context.t1 = _context.sent;
            _context.t2 = new Date();
            _context.t3 = new Date();
            _context.t4 = {
              uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0634",
              firstName: "KIMENYI",
              lastName: "Kevin",
              email: "kevin@gmail.com",
              password: _context.t1,
              roleName: "admin",
              isActive: true,
              createdAt: _context.t2,
              updatedAt: _context.t3
            };
            _context.next = 9;
            return _bcryptjs["default"].hash(process.env.DEVELOPER1_PASSWORD, Number(process.env.HASH_PASSWORD_SALT));
          case 9:
            _context.t5 = _context.sent;
            _context.t6 = new Date();
            _context.t7 = new Date();
            _context.t8 = {
              uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0633",
              firstName: "IZERE",
              lastName: "Ange Felix",
              email: "izerefaifelix@gmail.com",
              password: _context.t5,
              roleName: "developer",
              isActive: true,
              createdAt: _context.t6,
              updatedAt: _context.t7
            };
            _context.next = 15;
            return _bcryptjs["default"].hash(process.env.DEVELOPER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT));
          case 15:
            _context.t9 = _context.sent;
            _context.t10 = new Date();
            _context.t11 = new Date();
            _context.t12 = {
              uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0637",
              firstName: "NKUSI",
              lastName: "Kevin",
              email: "kevin@gmail.com",
              password: _context.t9,
              roleName: "developer",
              isActive: true,
              createdAt: _context.t10,
              updatedAt: _context.t11
            };
            _context.next = 21;
            return _bcryptjs["default"].hash(process.env.MANAGER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT));
          case 21:
            _context.t13 = _context.sent;
            _context.t14 = new Date();
            _context.t15 = new Date();
            _context.t16 = {
              uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0639",
              firstName: "CLICK",
              lastName: "alain",
              email: "alain@gmail.com",
              password: _context.t13,
              roleName: "manager",
              isActive: true,
              createdAt: _context.t14,
              updatedAt: _context.t15
            };
            _context.next = 27;
            return _bcryptjs["default"].hash(process.env.MANAGER2_PASSWORD, Number(process.env.HASH_PASSWORD_SALT));
          case 27:
            _context.t17 = _context.sent;
            _context.t18 = new Date();
            _context.t19 = new Date();
            _context.t20 = {
              uuid: "7e72de6a-7d21-493a-b9c2-0bd4c57c0659",
              firstName: "CLICK",
              lastName: "kevine",
              email: "kevine@gmail.com",
              password: _context.t17,
              roleName: "manager",
              isActive: true,
              createdAt: _context.t18,
              updatedAt: _context.t19
            };
            _context.t21 = [_context.t4, _context.t8, _context.t12, _context.t16, _context.t20];
            _context.next = 34;
            return _context.t0.bulkInsert.call(_context.t0, "users", _context.t21);
          case 34:
            return _context.abrupt("return", _context.sent);
          case 35:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function up(_x, _x2) {
      return _up.apply(this, arguments);
    }
    return up;
  }(),
  down: function () {
    var _down = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(queryInterface, Sequelize) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.bulkDelete("users", null, {});
          case 2:
            return _context2.abrupt("return", _context2.sent);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function down(_x3, _x4) {
      return _down.apply(this, arguments);
    }
    return down;
  }()
};