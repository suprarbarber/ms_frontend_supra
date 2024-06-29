/**
 * Controladores del home
 * @module Controladores_home
 */

import { config } from "dotenv";
config();



/**
 * Esta funcion es para la vista inicial de la pagina
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const inicio = (req, res ) => {

    res.render('view.inicio.ejs');
};

/**
 * Esta funcion es para la vista de iniciar sesion
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const login = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;

    const options = {url: url};

    res.render('view.login.ejs', options);
};

/**
 * Esta funcion es para la vista del registro
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const registro = (req, res ) => {
    // Se llama a la vista y se le manda la variable
    res.render('view.registro.ejs');
};

export { inicio, login, registro}
