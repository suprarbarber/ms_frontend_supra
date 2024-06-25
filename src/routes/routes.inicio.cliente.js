import { Router } from "express"
import { ayuda, inicioCliente, listarBarberos, reservar, splash } from "../controllers/controller.inicio.cliente";
import { producto } from "../controllers/controller.producto";
import { servicio } from "../controllers/controller.servicio";
import { corte } from "../controllers/controller.corte";
import { perfilCliente } from "../controllers/controller.cliente";
import { barberia } from "../controllers/controller.barberia";


const rutaInicioCliente = Router();

rutaInicioCliente.get("/inicio", inicioCliente)
rutaInicioCliente.get("/reserva", reservar)
rutaInicioCliente.get("/perfil", perfilCliente)
rutaInicioCliente.get("/ayuda", ayuda)
rutaInicioCliente.get("/barberos", listarBarberos)
rutaInicioCliente.get("/producto", producto)
rutaInicioCliente.get("/splash", splash)
rutaInicioCliente.get("/servicio", servicio)
rutaInicioCliente.get("/corte", corte)
rutaInicioCliente.get("/barberia", barberia)

export default rutaInicioCliente;