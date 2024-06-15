import { config } from "dotenv";
config();

/** */
const url = process.env.BACKEND_URL;

/** */
export const inicioCliente = (req, res) => { //este es mi dash

    res.render('view.inicio.clientes.ejs')
}

export const reservar = (req, res) => {
    res.render('view.baberos.cliente.reserva.ejs')
}

export const perfilCliente = (req, res) => {
    res.render('view.perfil.cliente.ejs')
}

export const ayuda = (req, res) => {
    res.render('view.ayuda.cliente.ejs')
}

export const listarBarberos = (req, res) => {
    let datos = "";
    const recurso = url + "/api/clientes"
    fetch(recurso)
    .then(res => res.json())
    .then(data => {
        datos = data.body;
        res.render("view.barberos.cliente.ejs", {datos : datos});
    })

}

export const splash = (req, res) => {
    res.render('view.splash.ejs')
}

