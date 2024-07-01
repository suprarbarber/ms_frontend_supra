"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.producto = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores de los productos
 * @module Controladores_producto
 */

(0, _dotenv.config)();

/**
 * Guarda la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar los productos
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var producto = exports.producto = function producto(req, res) {
  var datos = "";
  var recurso = url + "/api/producto";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.producto.cliente.ejs', {
      datos: datos
    });
  });
};