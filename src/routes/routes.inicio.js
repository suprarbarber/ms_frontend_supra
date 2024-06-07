import { Router } from "express"
import { inicio, reservar } from "../controllers/controller.inicio";

const rutaInicio = Router();

rutaInicio.get("/", inicio)
rutaInicio.get("/reservar", reservar)

export default rutaInicio;