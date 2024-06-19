import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar los cortes
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const corte1 = (req, res ) => {
    let datos = "";
    const recurso = url + "/api/corte"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.cortes.servicio1.ejs', {datos : datos});
    })

};

export { corte1 };