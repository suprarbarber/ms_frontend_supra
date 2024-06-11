import { Router } from "express";
import { inicio, login, registro } from "../controllers/controller.inicio";

const rutaInicio = Router();

rutaInicio.get("/", inicio);
rutaInicio.get("/logueo", login);
rutaInicio.get("/registro", registro);

export default rutaInicio;