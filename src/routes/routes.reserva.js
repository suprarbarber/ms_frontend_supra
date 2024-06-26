import { Router } from "express"
import { reservaCortes, reservaServicios, reservar } from "../controllers/controller.reserva";


const rutaReserva = Router();

rutaReserva.get("/reserva", reservar)
rutaReserva.get("/reserva-servicio", reservaServicios)
rutaReserva.get("/reserva-corte", reservaCortes)

export default rutaReserva;