'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
module.exports = {
  up: function up(queryInterface, DataTypes) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return queryInterface.createTable('report', {
              uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIV4,
                primaryKey: true
              },
              beverage: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              food: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              damages: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              tokenBiyali: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              expenses: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              pos: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              credit: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              momo: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              cash: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              totalRecieved: {
                type: DataTypes.INTEGER,
                allowNull: false
              },
              createdAt: {
                allowNull: false,
                type: DataTypes.DATE
              },
              updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
              }
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  down: function down(queryInterface, DataTypes) {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryInterface.dropTable('report');
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  }
};