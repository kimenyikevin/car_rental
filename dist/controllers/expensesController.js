"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExpensesByName = exports.getDailyExpenses = exports.creatExpenses = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _sequelize = require("sequelize");
var Expenses = _models["default"].Expenses;
var creatExpenses = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, amount, comment, date, targetDate, startDate, endDate, expenses, newExpenses;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, amount = _req$body.amount, comment = _req$body.comment, date = _req$body.date;
          targetDate = new Date(date); // Get the start and end timestamps of the target date
          startDate = targetDate.setHours(0, 0, 0, 0);
          endDate = targetDate.setHours(23, 59, 59, 999); // Find records with createdAt between the start and end timestamps
          _context.next = 7;
          return Expenses.findAll({
            where: {
              name: name,
              date: (0, _defineProperty2["default"])({}, _sequelize.Op.between, [startDate, endDate])
            }
          });
        case 7:
          expenses = _context.sent;
          if (!(expenses.length !== 0)) {
            _context.next = 10;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            status: 'fail',
            message: ' expense has been created today'
          }));
        case 10:
          _context.next = 12;
          return Expenses.create({
            name: name,
            amount: amount,
            comment: comment,
            date: date
          });
        case 12:
          newExpenses = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            status: 'success',
            data: newExpenses
          }));
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: _context.t0.message
          });
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return function creatExpenses(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.creatExpenses = creatExpenses;
var getDailyExpenses = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var expenses;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Expenses.findAll({});
        case 3:
          expenses = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: 'success',
            data: expenses
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getDailyExpenses(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getDailyExpenses = getDailyExpenses;
var getExpensesByName = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var expenses;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Expenses.findAll({
            attributes: ['name', [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('amount')), 'totalExpenses']],
            group: ['name'],
            raw: true
          });
        case 3:
          expenses = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: 'success',
            data: expenses
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while fetching categories',
            err: _context3.t0.message
          });
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getExpensesByName(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getExpensesByName = getExpensesByName;