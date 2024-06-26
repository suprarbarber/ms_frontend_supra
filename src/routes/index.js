import { Router } from "express";
import rutaInicioCliente from "./routes.inicio.cliente";
import rutaInicio from "./routes.inicio";
import rutaReserva from "./routes.reserva";

const ruta = Router();

ruta.use("/", rutaInicioCliente)
ruta.use("/", rutaInicio)
ruta.use("/", rutaReserva)

export default ruta;