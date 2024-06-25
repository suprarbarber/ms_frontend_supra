import { config } from "dotenv";
config();


/**
 * Esta funcion es para mostrar informacion  de la barberia
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const barberia = (req, res ) => {
    res.render('view.barberia.cliente.ejs');
};
export { barberia }