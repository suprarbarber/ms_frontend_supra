export const inicioCliente = (req, res) => {
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


