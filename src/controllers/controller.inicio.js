import { config } from "dotenv";
config();

export const inicio = (req, res ) => {
    res.render('view.inicio.ejs');
};

export const login = (req, res ) => {
    const url = process.env.BACKEND_URL;

    const options = {url: url};

    res.render('view.login.ejs', options);
};

export const registro = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;

    const options = {url: url};
    
    // Se llama a la vista 
    res.render('view.registro.ejs', options);
};

