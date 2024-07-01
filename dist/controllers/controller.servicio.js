"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.servicio = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores de los servicios
 * @module Controladores_servicio
 */

(0, _dotenv.config)();

/**
 * Guarda la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar lo servicios
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var servicio = exports.servicio = function servicio(req, res) {
  var datos = "";
  var recurso = url + "/api/servicio";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.servicio.cliente.ejs', {
      datos: datos
    });
  });
};