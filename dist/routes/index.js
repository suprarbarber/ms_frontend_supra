"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routesInicio = _interopRequireDefault(require("./routes.inicio.cliente"));
var _routes = _interopRequireDefault(require("./routes.inicio"));
var _routes2 = _interopRequireDefault(require("./routes.reserva"));
/**
 * Rutas del index
 * @module Rutas_index
 */

/**
 * Esta es la ruta principal
 * @type {object}
 */
var ruta = (0, _express.Router)();
ruta.use("/", _routesInicio["default"]);
ruta.use("/", _routes["default"]);
ruta.use("/", _routes2["default"]);
var _default = exports["default"] = ruta;