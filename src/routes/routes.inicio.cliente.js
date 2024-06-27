import { Router } from "express"
import { ayuda, docu, inicioCliente, listarBarberos, splash } from "../controllers/controller.inicio.cliente";
import { producto } from "../controllers/controller.producto";
import { servicio } from "../controllers/controller.servicio";
import { corte } from "../controllers/controller.corte";
import { perfilCliente } from "../controllers/controller.cliente";
import { barberia } from "../controllers/controller.barberia";
import { resena } from "../controllers/controller.reseñas";


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

export default rutaInicioCliente;