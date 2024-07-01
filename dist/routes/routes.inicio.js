"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.inicio");
/**
 * Rutas del home
 * @module Rutas_home
 */

/**
 * Esta es la ruta del home
 * @type {object}
 */
var rutaInicio = (0, _express.Router)();
rutaInicio.get("/", _controller.inicio);
rutaInicio.get("/login", _controller.login);
rutaInicio.get("/registro", _controller.registro);
var _default = exports["default"] = rutaInicio;