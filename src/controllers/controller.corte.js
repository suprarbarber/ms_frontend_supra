import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar los cortes
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const corte1 = (req, res ) => {
    res.render('view.cortes.servicio1.ejs');
    
};

export { corte1 };