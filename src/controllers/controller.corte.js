/**
 * Controladores de los cortes
 * @module Controladores_corte
 */


/**
 * Esta funcion es para mostrar los cortes
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const corte = (req, res ) => {
    res.render('view.cortes.ejs');
};

export { corte };