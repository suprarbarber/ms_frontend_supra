import { Router } from "express"
import { ayuda, inicioCliente, listarBarberos, reservar, splash } from "../controllers/controller.inicio.cliente";
import { producto } from "../controllers/controller.producto";
import { servicio } from "../controllers/controller.servicio";
import { corte1 } from "../controllers/controller.corte";
import { perfilCliente } from "../controllers/controller.cliente";


const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)

rutaInicioCliente.get("/perfil", perfilCliente)

rutaInicioCliente.get("/ayuda", ayuda)
rutaInicioCliente.get("/barberos", listarBarberos)
rutaInicioCliente.get("/producto", producto)
rutaInicioCliente.get("/splash", splash)
rutaInicioCliente.get("/servicio", servicio)
rutaInicioCliente.get("/corte1", corte1)

export default rutaInicioCliente;