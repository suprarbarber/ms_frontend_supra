/**
 * Rutas del index
 * @module Rutas_index
 */

import { Router } from "express";
import rutaInicioCliente from "./routes.inicio.cliente";
import rutaInicio from "./routes.inicio";
import rutaReserva from "./routes.reserva";

/**
 * Esta es la ruta principal
 * @type {object}
 */
const ruta = Router();

ruta.use("/", rutaInicioCliente)
ruta.use("/", rutaInicio)
ruta.use("/", rutaReserva)

export default ruta;