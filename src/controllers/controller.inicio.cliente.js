import { config } from "dotenv";
config();


const url = process.env.BACKEND_URL;

/**
 * Esta funcion es para la vista inicial del cliente
 * @param {object} req peticion
 * @param {object} res respuesta
 */
 const inicioCliente = (req, res) => { //este es mi dash

    res.render('view.inicio.clientes.ejs')
}

 const reservar = (req, res) => {
    res.render('view.baberos.cliente.reserva.ejs')
}

 const perfilCliente = (req, res) => {
    res.render('view.perfil.cliente.ejs')
}

 const ayuda = (req, res) => {
    res.render('view.ayuda.cliente.ejs')
}

 const listarBarberos = (req, res) => {
    let datos = "";
    const recurso = url + "/api/clientes"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render("view.barberos.cliente.ejs", {datos : datos});
    })
}

 const splash = (req, res) => {
    let datos = "";
    const recurso = url + "/api/clientes"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render('view.splash.ejs', {datos})
    })

}

export { inicioCliente, reservar, perfilCliente, ayuda, listarBarberos, splash}

