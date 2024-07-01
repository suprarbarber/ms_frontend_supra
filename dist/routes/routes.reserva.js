"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controller = require("../controllers/controller.reserva");
/**
 * Rutas de la reserva
 * @module Rutas_reserva
 */

/**
 * Esta es la ruta de la reserva
 * @type {object}
 */
var rutaReserva = (0, _express.Router)();
rutaReserva.get("/reserva", _controller.reservar);
rutaReserva.get("/reserva-servicio", _controller.reservaServicios);
rutaReserva.get("/reserva-corte", _controller.reservaCortes);
rutaReserva.get("/reserva-horario", _controller.reservaHorario);
rutaReserva.get("/reserva-horario-reprogramacion", _controller.reservaRepro);
var _default = exports["default"] = rutaReserva;