/**
 * Controladores de las reseñas
 * @module Controladores_reseñas
 */

import { config } from "dotenv";
config();


/**
 * Guarda la url del backend
 * @type {string}
 */
const url = process.env.BACKEND_URL;



/**
 * Esta funcion es para mostrar las reseñas
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const resena = (req, res ) => {
    let datos = "";
    const recurso = url + "/api/resena"
    
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;

        res.render('view.reseñas.cliente.ejs', {datos : datos});
    })

};


export { resena }