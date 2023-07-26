"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generate = exports.check = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = require("bcrypt");
var generate = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(password) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = _bcrypt.hash;
          _context.t1 = password;
          _context.next = 4;
          return (0, _bcrypt.genSalt)(10);
        case 4:
          _context.t2 = _context.sent;
          return _context.abrupt("return", (0, _context.t0)(_context.t1, _context.t2));
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function generate(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.generate = generate;
var check = function check(hashedPassword, password) {
  return (0, _bcrypt.compareSync)(password, hashedPassword);
};
exports.check = check;