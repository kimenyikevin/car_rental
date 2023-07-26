"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCategory = exports.getCategory = exports.getAllCategories = exports.deleteCategory = exports.createCategory = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var Category = _models["default"].Category;
var createCategory = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, name, description, category, newCategory;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, description = _req$body.description;
          if (!(!name || !description)) {
            _context.next = 4;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            status: 'fail',
            message: 'Invalid request, Provide valid information'
          }));
        case 4:
          _context.next = 6;
          return Category.findOne({
            where: {
              name: name
            }
          });
        case 6:
          category = _context.sent;
          if (!category) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(403).json({
            status: 'fail',
            message: 'Category already exist'
          }));
        case 9:
          _context.next = 11;
          return Category.create({
            name: name,
            description: description
          });
        case 11:
          newCategory = _context.sent;
          res.status(201).json({
            status: 'success',
            data: {
              category: newCategory
            }
          });
          _context.next = 18;
          break;
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while creating a category',
            err: _context.t0.message
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function createCategory(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createCategory = createCategory;
var getAllCategories = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var categories;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Category.findAll();
        case 3:
          categories = _context2.sent;
          res.status(200).json({
            status: 'success',
            data: {
              categories: categories
            }
          });
          _context2.next = 10;
          break;
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
  return function getAllCategories(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllCategories = getAllCategories;
var getCategory = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var categoryid, category;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          categoryid = req.params.categoryid;
          _context3.next = 4;
          return Category.findOne({
            where: {
              categoryid: categoryid
            }
          });
        case 4:
          category = _context3.sent;
          if (category) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Category not found'
          }));
        case 7:
          res.status(200).json({
            status: 'success',
            data: {
              category: category
            }
          });
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while fetching category',
            err: _context3.t0.message
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getCategory(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getCategory = getCategory;
var updateCategory = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var categoryid, _req$body2, name, description, category, updatedCategory;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          categoryid = req.params.categoryid;
          _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description;
          _context4.next = 5;
          return Category.findOne({
            where: {
              categoryid: categoryid
            }
          });
        case 5:
          category = _context4.sent;
          if (category) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Category not found'
          }));
        case 8:
          _context4.next = 10;
          return Category.update({
            name: name || category.name,
            description: description || category.description
          }, {
            where: {
              categoryid: categoryid
            },
            returning: true,
            plain: true
          });
        case 10:
          updatedCategory = _context4.sent;
          res.status(200).json({
            status: 'success',
            data: {
              category: updatedCategory[1]
            }
          });
          _context4.next = 17;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while updating category',
            err: _context4.t0.message
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function updateCategory(_x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateCategory = updateCategory;
var deleteCategory = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var categoryid, category;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          categoryid = req.params.categoryid;
          _context5.next = 4;
          return Category.findOne({
            where: {
              categoryid: categoryid
            }
          });
        case 4:
          category = _context5.sent;
          if (category) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: 'fail',
            message: 'Category not found'
          }));
        case 7:
          _context5.next = 9;
          return Category.destroy({
            where: {
              categoryid: categoryid
            }
          });
        case 9:
          res.status(200).json({
            status: 'success',
            message: 'Category deleted successfully'
          });
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            status: 'fail',
            message: 'Error while deleting category',
            err: _context5.t0.message
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }));
  return function deleteCategory(_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteCategory = deleteCategory;