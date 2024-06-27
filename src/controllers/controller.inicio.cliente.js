/**
 * Controladores de las secciones del roll cliente
 * @module Controladores_secciones_cliente
 */

import { config } from "dotenv";
config();


/**
 * Guarda la url del backend
 * @type {string}
 */
const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para la vista inicial del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
 const inicioCliente = (req, res) => { //este es mi dash

    res.render('view.inicio.clientes.ejs')
}


/**
 * Esta funcion es para la vista ayuda del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
 const ayuda = (req, res) => {
    res.render('view.ayuda.cliente.ejs')
}


/**
 * Esta funcion es para la vista barberos del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const listarBarberos = (req, res) => {
    let datos = "";
    const recurso = url + "/api/barbero"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render("view.barberos.cliente.ejs", {datos : datos});
    })
}


/**
 * Esta funcion es para la vista del splash
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const splash = (req, res) => {
    res.render('view.splash.ejs')
}


/**
 * Esta funcion es para la vista de la documentacion de mi proyecto
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const docu = (req, res) => {
    res.render('view.documentacion.ejs')
}

export { inicioCliente, ayuda, listarBarberos, splash, docu}

