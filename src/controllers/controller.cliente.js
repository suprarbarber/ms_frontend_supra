import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar el perfil del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const perfilCliente = (req, res ) => {
    let datos = "";
    const recurso = url + "/api/cliente"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        console.log(data.body);
        datos = data.body;
        res.render('view.perfil.cliente.ejs', {datos : datos});
    })

};


export { perfilCliente }