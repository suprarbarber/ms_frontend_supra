"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registro = exports.login = exports.inicio = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores del home
 * @module Controladores_home
 */

(0, _dotenv.config)();

/**
 * Esta funcion es para la vista inicial de la pagina
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var inicio = exports.inicio = function inicio(req, res) {
  res.render('view.inicio.ejs');
};

/**
 * Esta funcion es para la vista de iniciar sesion
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var login = exports.login = function login(req, res) {
  // se trae la variable url del .env 
  var url = process.env.BACKEND_URL;
  var options = {
    url: url
  };
  res.render('view.login.ejs', options);
};

/**
 * Esta funcion es para la vista del registro
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var registro = exports.registro = function registro(req, res) {
  // Se llama a la vista y se le manda la variable
  res.render('view.registro.ejs');
};