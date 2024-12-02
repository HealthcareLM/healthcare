import { Router } from "express";
import { Usuarios } from "../models/Usuarios";
import { UsuariosController } from "../controllers/UsuariosController";
import { upload } from "../config/multer";

const router = Router()

router.get('/usuarios', UsuariosController.all)                     // OBTENER TODOS LOS USUARIOS
router.get('/usuarios/:limit', UsuariosController.some)              // OBTENER ALGUNOS USUARIOS
router.get('/doctores', UsuariosController.allDoctors)            // OBTENER TODOS LOS USUARIOS QUE SEAN DOCTORES
router.get('/doctores/:limit', UsuariosController.someDoctors)     // OBTENER ALGUNOS USUARIOS QUE SEAN DOCTORES

router.post('/usuario', UsuariosController.create)              // CREAR UN USUARIO
router.get('/usuario/:id', UsuariosController.readId)              // OBTENER UN USUARIO ESPECIFICO
router.put('/usuarioUpdate/:id', UsuariosController.updateUser)           // ACTUALIZAR UN USUARIO
router.delete('/usuarioDelete/:id', UsuariosController.deleteUserId)        // ELIMINAR UN USUARIO

router.post('/signin', UsuariosController.register)             // REGISTRAR USUARIO (PACIENTE)
router.post('/login', UsuariosController.login)

router.post('/upload', upload.single("file"), UsuariosController.upload)


export default router