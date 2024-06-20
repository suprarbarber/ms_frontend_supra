import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar el perfil del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const perfilCliente = (req, res ) => {
    res.render('view.perfil.cliente.ejs');
};

export { perfilCliente }