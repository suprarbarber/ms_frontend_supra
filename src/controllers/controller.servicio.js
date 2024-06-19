import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar lo servicios
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const servicio = (req, res ) => {

    // // se trae la variable url del .env 
    // const url = process.env.BACKEND_URL;

    // const options = {url: url};

    let datos = "";
    const recurso = url + "/api/servicio"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.servicio.cliente.ejs',{datos : datos});
    })

};

export { servicio }