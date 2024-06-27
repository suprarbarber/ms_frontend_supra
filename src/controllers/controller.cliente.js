/**
 * Controladores de los clientes
 * @module Controladores_cliente
 */


/**
 * Esta funcion es para mostrar el perfil del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const perfilCliente = (req, res ) => {
    res.render('view.perfil.cliente.ejs');
};

export { perfilCliente }