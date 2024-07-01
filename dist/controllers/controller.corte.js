"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.corte = void 0;
/**
 * Controladores de los cortes
 * @module Controladores_corte
 */

/**
 * Esta funcion es para mostrar los cortes
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var corte = exports.corte = function corte(req, res) {
  res.render('view.cortes.ejs');
};