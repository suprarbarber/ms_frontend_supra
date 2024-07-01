"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
var _dotenv = require("dotenv");
var _index = _interopRequireDefault(require("./routes/index"));
var _msj = require("./message/msj");
(0, _dotenv.config)();
/**
 * Ruta de mi proyecto
 * @type {object}
 */
var app = (0, _express["default"])();

//configuracion del ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('views', _path["default"].join(__dirname, 'views'));
app.set('port', process.env.PORT);
app.set('mensajeconsola', _msj.msjconsola);
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use("/", _index["default"]);

//error 404
app.use("/", function (req, res) {
  res.render("views.error404.ejs");
});
var _default = exports["default"] = app;