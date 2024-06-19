import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para mostrar los productos
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const producto = (req, res ) => {
    let datos = "";
    const recurso = url + "/api/producto"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.producto.cliente.ejs', {datos : datos});
    })

};
export { producto }

