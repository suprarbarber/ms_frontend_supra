"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.perfilCliente = void 0;
/**
 * Controladores de los clientes
 * @module Controladores_cliente
 */

/**
 * Esta funcion es para mostrar el perfil del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var perfilCliente = exports.perfilCliente = function perfilCliente(req, res) {
  res.render('view.perfil.cliente.ejs');
};