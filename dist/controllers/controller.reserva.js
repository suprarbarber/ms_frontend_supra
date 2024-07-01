"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reservar = exports.reservaServicios = exports.reservaRepro = exports.reservaHorario = exports.reservaCortes = void 0;
var _dotenv = require("dotenv");
/**
 * Controladores de las reservas
 * @module Controladores_reserva
 */

(0, _dotenv.config)();

/**
 * Guarda la url del backend
 * @type {string}
 */
var url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar los barberos en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var reservar = exports.reservar = function reservar(req, res) {
  var datos = "";
  var recurso = url + "/api/barbero";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.reserva.barberos.ejs', {
      datos: datos
    });
  });
};

/**
 * Esta funcion es para mostrar los servicios en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var reservaServicios = exports.reservaServicios = function reservaServicios(req, res) {
  var datos = "";
  var recurso = url + "/api/servicio";
  fetch(recurso).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.reserva.servicio.ejs', {
      datos: datos
    });
  });
};

/**
 * Esta funcion es para mostrar los cortes en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var reservaCortes = exports.reservaCortes = function reservaCortes(req, res) {
  res.render('view.reserva.cortes.ejs');
};

/**
 * Esta funcion es para mostrar los horarios en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
var reservaHorario = exports.reservaHorario = function reservaHorario(req, res) {
  var datos = "";
  var endpoint = url + "/api/turno";
  fetch(endpoint).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.reserva.horario.ejs', {
      datos: datos
    });
  });
};
var reservaRepro = exports.reservaRepro = function reservaRepro(req, res) {
  var datos = "";
  var endpoint = url + "/api/turno";
  fetch(endpoint).then(function (res) {
    return res.json();
  }).then(function (data) {
    datos = data.body;
    res.render('view.reserva.horario.repro.ejs', {
      datos: datos
    });
  });
};