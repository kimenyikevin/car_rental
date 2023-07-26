"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDailyRepport = exports.getAllreportAndCount = exports.creteReport = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var _sequelize = require("sequelize");
var Report = _models["default"].Report;
var creteReport = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, beverage, food, damages, tokenBiyali, expenses, momo, pos, credit, cash, totalRecieved, today, result, dataCreatedToday, newReport;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, beverage = _req$body.beverage, food = _req$body.food, damages = _req$body.damages, tokenBiyali = _req$body.tokenBiyali, expenses = _req$body.expenses, momo = _req$body.momo, pos = _req$body.pos, credit = _req$body.credit, cash = _req$body.cash;
          totalRecieved = Number(beverage) + Number(food) + Number(tokenBiyali) - Number(expenses) - Number(credit) - Number(damages);
          today = new Date();
          today.setHours(0, 0, 0, 0); // Set time to midnight to represent the start of the day.
          _context.next = 7;
          return Report.findOne({
            attributes: [[_sequelize.Sequelize.fn('COUNT', _sequelize.Sequelize.col('*')), 'count']],
            where: {
              createdAt: (0, _defineProperty2["default"])({}, _sequelize.Sequelize.Op.gte, today)
            },
            raw: true
          });
        case 7:
          result = _context.sent;
          dataCreatedToday = result.count > 0;
          if (!dataCreatedToday) {
            _context.next = 11;
            break;
          }
          return _context.abrupt("return", res.status(401).json({
            status: 'fail',
            message: 'Report has been created today'
          }));
        case 11:
          _context.next = 13;
          return Report.create({
            beverage: beverage,
            food: food,
            damages: damages,
            tokenBiyali: tokenBiyali,
            expenses: expenses,
            momo: momo,
            pos: pos,
            credit: credit,
            cash: cash,
            totalRecieved: totalRecieved
          });
        case 13:
          newReport = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            status: 'success',
            data: newReport
          }));
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while creating a report',
            err: _context.t0.message
          });
        case 20:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 17]]);
  }));
  return function creteReport(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.creteReport = creteReport;
var getDailyRepport = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var report;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Report.findAll({});
        case 3:
          report = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: 'success',
            data: report
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
  return function getDailyRepport(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getDailyRepport = getDailyRepport;
var getAllreportAndCount = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Report.findAll({
            attributes: [[_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('beverage')), 'beverage'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('food')), 'food'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('damages')), 'damages'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('tokenBiyali')), 'tokenBiyali'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('expenses')), 'expenses'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('pos')), 'pos'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('credit')), 'credit'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('momo')), 'momo'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('cash')), 'cash'], [_sequelize.Sequelize.fn('SUM', _sequelize.Sequelize.col('totalRecieved')), 'totalRecieved']],
            raw: true
          });
        case 3:
          result = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: 'success',
            data: result
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
  return function getAllreportAndCount(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getAllreportAndCount = getAllreportAndCount;