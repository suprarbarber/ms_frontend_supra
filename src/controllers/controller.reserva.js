/**
 * Controladores de las reservas
 * @module Controladores_reserva
 */

import { config } from "dotenv";
config();


/**
 * Guarda la url del backend
 * @type {string}
 */
const url = process.env.BACKEND_URL;


/**
 * Esta funcion es para mostrar los barberos en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const reservar = (req, res) => {
    let datos = "";
    const recurso = url + "/api/barbero"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.reserva.barberos.ejs', {datos : datos})
    })
}

/**
 * Esta funcion es para mostrar los servicios en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const reservaServicios = (req, res) =>{
    let datos = "";
    const recurso = url + "/api/servicio"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.reserva.servicio.ejs',{datos : datos});
    })
}

/**
 * Esta funcion es para mostrar los cortes en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const reservaCortes = (req, res ) => {
    res.render('view.reserva.cortes.ejs');
};

/**
 * Esta funcion es para mostrar los horarios en la reserva
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const reservaHorario = (req, res ) => {
    res.render('view.reserva.horario.ejs');
};

export { reservar, reservaServicios, reservaCortes, reservaHorario }