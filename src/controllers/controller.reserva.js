import { config } from "dotenv";
config();

const url = process.env.BACKEND_URL;

const reservar = (req, res) => {
    let datos = "";
    const recurso = url + "/api/barbero"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.reserva.barberos.ejs', {datos : datos})
    })
}

const reservaServicios = (req, res) =>{
    let datos = "";
    const recurso = url + "/api/servicio"

    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.reserva.servicio.ejs',{datos : datos});
    })
}

/**
 * Esta funcion es para mostrar los cortes
 * @param {object} req peticion
 * @param {object} res respuesta
 */
const reservaCortes = (req, res ) => {
    res.render('view.reserva.cortes.ejs');
};

export { reservar, reservaServicios, reservaCortes }