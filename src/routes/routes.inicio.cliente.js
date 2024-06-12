import { Router } from "express"
import { ayuda, inicioCliente, perfilCliente, reservar } from "../controllers/controller.inicio.cliente";

const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)
rutaInicioCliente.get("/perfil", perfilCliente)
rutaInicioCliente.get("/ayuda", ayuda)

export default rutaInicioCliente;