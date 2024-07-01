"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllerInicio = require("../controllers/controller.inicio.cliente");
var _controller = require("../controllers/controller.producto");
var _controller2 = require("../controllers/controller.servicio");
var _controller3 = require("../controllers/controller.corte");
var _controller4 = require("../controllers/controller.cliente");
var _controller5 = require("../controllers/controller.barberia");
var _controller6 = require("../controllers/controller.rese\xF1as");
/**
 * Rutas del inicio del cliente
 * @module Rutas_inicio_cliente
 */

/**
 * Esta es la ruta de las secciones del cliente
 * @type {object}
 */
var rutaInicioCliente = (0, _express.Router)();
rutaInicioCliente.get("/inicio", _controllerInicio.inicioCliente);
rutaInicioCliente.get("/perfil", _controller4.perfilCliente);
rutaInicioCliente.get("/ayuda", _controllerInicio.ayuda);
rutaInicioCliente.get("/barberos", _controllerInicio.listarBarberos);
rutaInicioCliente.get("/producto", _controller.producto);
rutaInicioCliente.get("/splash", _controllerInicio.splash);
rutaInicioCliente.get("/servicio", _controller2.servicio);
rutaInicioCliente.get("/corte", _controller3.corte);
rutaInicioCliente.get("/barberia", _controller5.barberia);
rutaInicioCliente.get("/resena", _controller6.resena);
rutaInicioCliente.get("/documentacion", _controllerInicio.docu);
rutaInicioCliente.get("/citas", _controllerInicio.misCitas);
var _default = exports["default"] = rutaInicioCliente;