import { config } from "dotenv";
config();
/**
 * Vista de inicio de la pagina
 * @param {object} req peticion
 * @param {object} res respuesta
 */

const inicio = (req, res ) => {

    res.render('view.inicio.ejs');
};

const login = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;

    const options = {url: url};

    res.render('view.login.ejs', options);
};

const registro = (req, res ) => {
    // se trae la variable url del .env 
    const url = process.env.BACKEND_URL;
    

    const options = {url: url};
    
    // Se llama a la vista y se le manda la variable
    res.render('view.registro.ejs', options);
};

export { inicio, login, registro}
