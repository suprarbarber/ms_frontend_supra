"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splash = exports.misCitas = exports.listarBarberos = exports.inicioCliente = exports.docu = exports.ayuda = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores de las secciones del roll cliente
 * @module Controladores_secciones_cliente
 */

(0, _dotenv.config)();

/**
 * Guarda la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;

/**
 * Esta funcion es para la vista inicial del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var inicioCliente = exports.inicioCliente = function inicioCliente(req, res) {
  //este es mi dash

  res.render('view.inicio.clientes.ejs');
};

/**
 * Esta funcion es para la vista ayuda del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var ayuda = exports.ayuda = function ayuda(req, res) {
  res.render('view.ayuda.cliente.ejs');
};

/**
 * Esta funcion es para la vista barberos del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var listarBarberos = exports.listarBarberos = function listarBarberos(req, res) {
  var datos = "";
  var recurso = url + "/api/barbero";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render("view.barberos.cliente.ejs", {
      datos: datos
    });
  });
};

/**
 * Esta funcion es para la vista del splash
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var splash = exports.splash = function splash(req, res) {
  res.render('view.splash.ejs');
};

/**
 * Esta funcion es para la vista de las citas
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var misCitas = exports.misCitas = function misCitas(req, res) {
  res.render('view.citas.cliente.ejs');
};

/**
 * Esta funcion es para la vista de la documentacion de mi proyecto
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var docu = exports.docu = function docu(req, res) {
  res.render('view.documentacion.ejs');
};