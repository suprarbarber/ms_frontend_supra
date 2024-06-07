import { Router } from "express";
import rutaInicio from "./routes.inicio";

const ruta = Router();

ruta.use("/", rutaInicio)

export default ruta;