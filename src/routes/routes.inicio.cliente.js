/**
 * Rutas del inicio del cliente
 * @module Rutas_inicio_cliente
 */

import { Router } from "express"
import { ayuda, docu, inicioCliente, listarBarberos, misCitas, splash } from "../controllers/controller.inicio.cliente";
import { producto } from "../controllers/controller.producto";
import { servicio } from "../controllers/controller.servicio";
import { corte } from "../controllers/controller.corte";
import { perfilCliente } from "../controllers/controller.cliente";
import { barberia } from "../controllers/controller.barberia";
import { resena } from "../controllers/controller.reseñas";

/**
 * Esta es la ruta de las secciones del cliente
 * @type {object}
 */
const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/perfil", perfilCliente)
rutaInicioCliente.get("/ayuda", ayuda)
rutaInicioCliente.get("/barberos", listarBarberos)
rutaInicioCliente.get("/producto", producto)
rutaInicioCliente.get("/splash", splash)
rutaInicioCliente.get("/servicio", servicio)
rutaInicioCliente.get("/corte", corte)
rutaInicioCliente.get("/barberia", barberia)
rutaInicioCliente.get("/resena", resena)
rutaInicioCliente.get("/documentacion", docu)
rutaInicioCliente.get("/citas", misCitas)

export default rutaInicioCliente;