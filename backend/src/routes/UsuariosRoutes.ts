import { Router } from "express";
import { Usuarios } from "../models/Usuarios";
import { UsuariosController } from "../controllers/UsuariosController";

const router = Router()

router.get('/usuarios', UsuariosController.all)
router.post('/usuarios', UsuariosController.create)

export default router