/**
 * Rutas del home
 * @module Rutas_home
 */

import { Router } from "express";
import { inicio, login, registro } from "../controllers/controller.inicio";

/**
 * Esta es la ruta del home
 * @type {object}
 */
const rutaInicio = Router();

rutaInicio.get("/", inicio);
rutaInicio.get("/login", login);
rutaInicio.get("/registro", registro);

export default rutaInicio;