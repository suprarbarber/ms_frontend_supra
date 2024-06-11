import { Router } from "express";
import rutaInicioCliente from "./routes.inicio.cliente";
import rutaInicio from "./routes.inicio";

const ruta = Router();

ruta.use("/", rutaInicioCliente)
ruta.use("/", rutaInicio)

export default ruta;