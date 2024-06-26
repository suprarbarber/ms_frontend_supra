import express from "express";
import path from "path";
import { config } from "dotenv"
config();
import ruta from "./routes/index"
import { msjconsola } from "./message/msj";

const app = express();

//configuracion del ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT)
app.set('mensajeconsola', msjconsola)

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", ruta)

//error 404
app.use("/", (req, res) =>{
    res.render("views.error404.ejs")
})
export default app;