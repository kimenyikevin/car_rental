"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = require("fs");
var _path = require("path");
var _sequelize = _interopRequireWildcard(require("sequelize"));
var _config = _interopRequireDefault(require("../config/config"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var basename = (0, _path.basename)(__filename);
var env = process.env.NODE_ENV || 'development';
var config = _config["default"][env];
var db = {};
var sequelize;
if (config.url) {
  sequelize = new _sequelize["default"](config.url, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false // Required to accept self-signed certificate from Heroku
      }
    }
  });
} else {
  sequelize = new _sequelize["default"](config.database, config.username, config.password, config);
}
(0, _fs.readdirSync)(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require((0, _path.join)(__dirname, file))(sequelize, _sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
sequelize.authenticate().then(function () {
  console.log('Connected! Database Status : ON 🔥.');
})["catch"](function (err) {
  console.error('Failed to connect! Database Status : OFF:', err);
});
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return sequelize.sync({
          alter: true
        });
      case 3:
        console.log('Database synchronized successfully.');
        _context.next = 9;
        break;
      case 6:
        _context.prev = 6;
        _context.t0 = _context["catch"](0);
        console.error('Error synchronizing the database:', _context.t0);
      case 9:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 6]]);
}))();
var _default = db;
exports["default"] = _default;