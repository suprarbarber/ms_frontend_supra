"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resena = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores de las reseñas
 * @module Controladores_reseñas
 */

(0, _dotenv.config)();

/**
 * Guarda la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar las reseñas
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var resena = exports.resena = function resena(req, res) {
  var datos = "";
  var recurso = url + "/api/resena";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.reseñas.cliente.ejs', {
      datos: datos
    });
  });
};