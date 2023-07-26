"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.admin = exports.Auth = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../../database/models"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var User = _models["default"].User;
var Role = _models["default"].Role;
var Auth = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))) {
            _context.next = 17;
            break;
          }
          _context.prev = 1;
          token = req.headers.authorization.split(' ')[1];
          decoded = _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
          _context.next = 6;
          return User.findOne({
            where: {
              uuid: decoded.uuid
            }
          });
        case 6:
          user = _context.sent;
          req.user = user;
          // req.role = await Role.findOne({
          //   where: {
          //     roleId: user.roleId,
          //   },
          // });
          next();
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(401).send({
            message: 'Not authorized , token Failed'
          });
        case 15:
          _context.next = 18;
          break;
        case 17:
          if (!token) {
            res.status(401).send({
              message: 'Not authorized, no token'
            });
          }
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 11]]);
  }));
  return function Auth(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.Auth = Auth;
var admin = function admin(req, res, next) {
  if (req.role && req.role.roleName === 'admin' || req.role.roleName === 'developer') {
    next();
  } else {
    res.status(401).send({
      message: 'Not Authorized for the Route'
    });
  }
};
exports.admin = admin;