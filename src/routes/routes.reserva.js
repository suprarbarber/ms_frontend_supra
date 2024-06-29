/**
 * Rutas de la reserva
 * @module Rutas_reserva
 */

import { Router } from "express"
import { reservaCortes, reservaHorario, reservaRepro, reservaServicios, reservar } from "../controllers/controller.reserva";

/**
 * Esta es la ruta de la reserva
 * @type {object}
 */
const rutaReserva = Router();

rutaReserva.get("/reserva", reservar)
rutaReserva.get("/reserva-servicio", reservaServicios)
rutaReserva.get("/reserva-corte", reservaCortes)
rutaReserva.get("/reserva-horario", reservaHorario)
rutaReserva.get("/reserva-horario-reprogramacion", reservaRepro)

export default rutaReserva;