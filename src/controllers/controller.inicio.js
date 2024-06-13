import { config } from "dotenv";
config();

export const inicio = (req, res ) => {
    // se trae la variable url del .env 
    const tpk = process.env.TOKEN_PRIVATEKEY;

    res.render('view.inicio.ejs', {tpk});
};

export const login = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;

    const options = {url: url};

    res.render('view.login.ejs', options);
};

export const registro = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;

    const options = {url: url};
    
    // Se llama a la vista y se le manda la variable
    res.render('view.registro.ejs', options);
};

