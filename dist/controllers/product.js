//product controller

'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProduct = exports.getProductById = exports.getAllProductsByCategory = exports.getAllProducts = exports.deleteProduct = exports.createProduct = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../database/models"));
var Product = _models["default"].Product;
var createProduct = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var product;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Product.create(req.body);
        case 3:
          product = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            product: product
          }));
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function createProduct(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createProduct = createProduct;
var getAllProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var products;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Product.findAll();
        case 3:
          products = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            products: products
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getAllProducts = getAllProducts;
var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, product;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return Product.findOne({
            where: {
              productid: id
            }
          });
        case 4:
          product = _context3.sent;
          if (!product) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(200).json({
            product: product
          }));
        case 7:
          return _context3.abrupt("return", res.status(404).send('Product with the specified ID does not exists'));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).send(_context3.t0.message));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getProductById = getProductById;
var updateProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, _yield$Product$update, _yield$Product$update2, updated, updatedProduct;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return Product.update(req.body, {
            where: {
              productid: id
            }
          });
        case 4:
          _yield$Product$update = _context4.sent;
          _yield$Product$update2 = (0, _slicedToArray2["default"])(_yield$Product$update, 1);
          updated = _yield$Product$update2[0];
          if (!updated) {
            _context4.next = 12;
            break;
          }
          _context4.next = 10;
          return Product.findOne({
            where: {
              productid: id
            }
          });
        case 10:
          updatedProduct = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            product: updatedProduct
          }));
        case 12:
          throw new Error('Product not found');
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).send(_context4.t0.message));
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 15]]);
  }));
  return function updateProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateProduct = updateProduct;
var deleteProduct = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, deleted;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return Product.destroy({
            where: {
              productid: id
            }
          });
        case 4:
          deleted = _context5.sent;
          if (!deleted) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(204).send('Product deleted'));
        case 7:
          throw new Error('Product not found');
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).send(_context5.t0.message));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function deleteProduct(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

//get all products by category
exports.deleteProduct = deleteProduct;
var getAllProductsByCategory = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, products;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return Product.findAll({
            where: {
              categoryid: id
            }
          });
        case 4:
          products = _context6.sent;
          if (!products) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(200).json({
            products: products
          }));
        case 7:
          return _context6.abrupt("return", res.status(404).send('Product with the specified ID does not exists'));
        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).send(_context6.t0.message));
        case 13:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return function getAllProductsByCategory(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getAllProductsByCategory = getAllProductsByCategory;