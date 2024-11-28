import { Router } from "express";
import { Usuarios } from "../models/Usuarios";
import { UsuariosController } from "../controllers/UsuariosController";

const router = Router()

router.get('/usuarios', UsuariosController.all)
router.post('/usuario', UsuariosController.create)
router.post('/signin', UsuariosController.register)
// router.post('/login', UsuariosController.login)

export default router