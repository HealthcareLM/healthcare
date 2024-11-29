import { Router } from "express";
import { Usuarios } from "../models/Usuarios";
import { UsuariosController } from "../controllers/UsuariosController";

const router = Router()

router.get('/usuarios', UsuariosController.all)                     // OBTENER TODOS LOS USUARIOS
router.get('/usuarios/:limit', UsuariosController.all)              // OBTENER ALGUNOS USUARIOS
router.get('/usuarios/doctores', UsuariosController.all)            // OBTENER TODOS LOS USUARIOS QUE SEAN DOCTORES
router.get('/usuarios/doctores/:limit', UsuariosController.all)     // OBTENER ALGUNOS USUARIOS QUE SEAN DOCTORES

router.post('/usuario', UsuariosController.create)              // CREAR UN USUARIO
router.get('/usuario/:id', UsuariosController.all)              // OBTENER UN USUARIO ESPECIFICO
router.delete('/usuario/:id', UsuariosController.create)        // ELIMINAR UN USUARIO
router.put('/usuario/:id', UsuariosController.create)           // ACTUALIZAR UN USUARIO

router.post('/signin', UsuariosController.register)             // REGISTRAR USUARIO (PACIENTE)
// router.post('/login', UsuariosController.login)
router.get('/usuarios', UsuariosController.all)
router.post('/usuario', UsuariosController.create)
router.post('/signin', UsuariosController.register)
router.post('/login', UsuariosController.login)

export default router