import { Request, Response } from 'express'
import { Usuarios } from "../models/Usuarios";
import { IUsuario } from '../interfaces/Usuarios';

export class UsuariosController {
  public static all() {
      try {
          
          
      } catch (error) {
      
          
      }
  }

  public static create(req: Request, res: Response) {
    const usuario : IUsuario = req.body

    try {
        
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' })
    }
  }


    public static async register(req: Request, res: Response) {
        // const usuario : IUsuario = req.body
        const { email, password, telefono, birthdate } : Partial<IUsuario> = req.body

        if(!email || !password || !telefono || !birthdate) {
            res.status(400).json({ error: 'Petición insuficiente: Faltan datos' })
        } else {
            const usuario : IUsuario = {
                email: email as string,
                password: password as string,
                telefono: telefono as string,
                birthdate: birthdate as string,
                rol: 'paciente',
                nombre: ''
            }
    
            try {
    
                const existeEmail = await Usuarios.findEmail(usuario.email)
    
                if(existeEmail) {
                    res.status(409).json({ error: 'Ya esta registrado un usuario con ese email'})
                } else {
                    const idUsuario = await Usuarios.create(usuario)
                
                    if(idUsuario) {
                        res.status(201).json({
                            message: 'Usuario Creado con Éxito',
                        })
                    } else {
                        res.status(400).json({
                            message: 'No fue posible crear el usuario',
                        })
                    }
                }
    
            } catch (error) {
                res.status(500).json({ error: 'Error del servidor' })
            }
        }        
    }


  public static async login(req: Request, res: Response) {
    const { email, password } : IUsuario = req.body

    if (!email || !password ) {
      res.status(400).json({ error: 'No puedes dejar campos vacios' })
    }

    try {
      const usuario = await Usuarios.findEmail(email)
      console.log(usuario);
      

      if (!usuario) {
         res.status(404).json({ error: "Usuario NO encontrado" })
        //  res.status(404).json({ success: false, message: "Error" })
      } 
      else {
        const passwordValidate = await Usuarios.verifyPassword(password, usuario.password)
        
        if (!passwordValidate) {
           res.status(401).json({ error: "Contraseña incorrecta" })
        } else {
          res.status(200).json({
           message: 'Inicio de sesión exitoso',
           user: {
             id: usuario.id,
             email: usuario.email,
             rol: usuario.rol,
           },
         });
          
        }
      }

    } catch (error) {
       res.status(500).json({ error: 'Error del servidor' })
    }
  }
}