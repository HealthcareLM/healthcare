import { Router } from "express";
import { Usuarios } from "../models/Usuarios";
import { UsuariosController } from "../controllers/UsuariosController";

const router = Router()

router.get('/usuarios', UsuariosController.all)                     // OBTENER TODOS LOS USUARIOS
router.get('/usuarios/:limit', UsuariosController.all)              // OBTENER ALGUNOS USUARIOS
router.get('/usuarios/doctores', UsuariosController.all)            // OBTENER TODOS LOS USUARIOS QUE SEAN DOCTORES
router.get('/usuarios/doctores/:limit', UsuariosController.all)     // OBTENER ALGUNOS USUARIOS QUE SEAN DOCTORES

router.post('/usuario', UsuariosController.create)              // CREAR UN USUARIO
router.get('/usuario/:id', UsuariosController.readId)              // OBTENER UN USUARIO ESPECIFICO
router.put('/usuarioUpdate/:id', UsuariosController.updateUser)           // ACTUALIZAR UN USUARIO
router.delete('/usuarioDelete/:id', UsuariosController.deleteUserId)        // ELIMINAR UN USUARIO

router.post('/signin', UsuariosController.register)             // REGISTRAR USUARIO (PACIENTE)
router.post('/login', UsuariosController.login)

export default router