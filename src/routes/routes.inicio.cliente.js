import { Router } from "express"
import { inicioCliente, perfilCliente, reservar } from "../controllers/controller.inicio.cliente";

const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)
rutaInicioCliente.get("/perfil", perfilCliente)

export default rutaInicioCliente;