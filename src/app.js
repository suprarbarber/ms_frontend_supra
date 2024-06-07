import express from "express";
import path from "path";
import { config } from "dotenv"
config();
import ruta from "./routes/index"

const app = express();

//configuracion del ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT)

app.use(express.static(path.join(__dirname, 'public')));

app.use("/", ruta)

export default app;