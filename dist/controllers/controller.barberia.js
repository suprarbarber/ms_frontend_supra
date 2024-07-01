"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.barberia = void 0;
/**
 * Controladores de la seccion barbería
 * @module Controladores_barberia
 */

/**
 * Esta funcion es para mostrar informacion  de la barberia
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var barberia = exports.barberia = function barberia(req, res) {
  res.render('view.barberia.cliente.ejs');
};