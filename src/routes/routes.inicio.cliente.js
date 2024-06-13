import { Router } from "express"
import { ayuda, inicioCliente, listarBarberos, perfilCliente, reservar } from "../controllers/controller.inicio.cliente";


const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)
rutaInicioCliente.get("/perfil", perfilCliente)
rutaInicioCliente.get("/ayuda", ayuda)
rutaInicioCliente.get("/barberos", listarBarberos)

export default rutaInicioCliente;