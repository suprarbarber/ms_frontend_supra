import { Router } from "express"
import { ayuda, inicioCliente, listarBarberos, perfilCliente, reservar, splash } from "../controllers/controller.inicio.cliente";
import { producto } from "../controllers/controller.producto";
import { servicio } from "../controllers/controller.servico";


const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)
rutaInicioCliente.get("/perfil", perfilCliente)
rutaInicioCliente.get("/ayuda", ayuda)
rutaInicioCliente.get("/barberos", listarBarberos)
rutaInicioCliente.get("/producto", producto)
rutaInicioCliente.get("/splash", splash)
rutaInicioCliente.get("/servicio", servicio)

export default rutaInicioCliente;