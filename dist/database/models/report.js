'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _sequelize = require("sequelize");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
module.exports = function (sequelize, DataTypes) {
  var Report = /*#__PURE__*/function (_Model) {
    (0, _inherits2["default"])(Report, _Model);
    var _super = _createSuper(Report);
    function Report() {
      (0, _classCallCheck2["default"])(this, Report);
      return _super.apply(this, arguments);
    }
    (0, _createClass2["default"])(Report, [{
      key: "toJSON",
      value:
      // static associate({ Credit }) {
      //     this.belongsTo(Credit, { foreignKey: 'creditId', as: 'credit' });
      // }
      function toJSON() {
        return _objectSpread({}, this.get());
      }
    }]);
    return Report;
  }(_sequelize.Model);
  Report.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
    }
  }, {
    sequelize: sequelize,
    tableName: 'report',
    modelName: 'Report'
  });
  return Report;
};