import { Router } from "express";
import usuariosRouter from "./UsuariosRoutes"

const router = Router()

router.use('/usuarios', usuariosRouter)

export default router

