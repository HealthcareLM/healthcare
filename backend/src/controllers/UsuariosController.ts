import { Request, Response } from 'express'
import { Usuarios } from "../models/Usuarios";
import { IUsuario } from '../interfaces/Usuarios';

export class UsuariosController {
  public static async all(req: Request, res: Response) {
      try {
        const usuarios = await Usuarios.all()

        res.status(200).json({
          success: true,
          message: 'La consulta se ejecuto con exito',
          data: usuarios
        })
          
      } catch (error) {
        res.status(500).json({ error: 'Error del servidor' })
      }
  }

  public static async some(req: Request, res: Response) {
    const limit = parseInt(req.params.limit)

    if(isNaN(limit)) {
      res.status(400).json({ error: 'Faltan datos: limit (number) --> Esta tratando de obtener ALGUNOS elementos' })
      return
    }

    try {
      const usuarios = await Usuarios.some(limit)

      res.status(200).json({
        success: true,
        message: 'La consulta se ejecuto con exito',
        data: usuarios
      })

      return

    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' })
      return
    }
  }

  public static async allDoctors(req: Request, res: Response) {
    try {
      const usuarios = await Usuarios.where('rol', 'doctor')

      if(!usuarios) {
        res.status(400).json({
          success: false,
          message: 'No existen doctores en la DB'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'La consulta se ejecuto con exito',
        data: usuarios
      })
        
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  public static async someDoctors(req: Request, res: Response) {
    const limit = parseInt(req.params.limit)

    if(isNaN(limit)) {
      res.status(400).json({ error: 'Faltan datos: limit (number) --> Esta tratando de obtener ALGUNOS elementos' })
      return
    }

    try {
      const usuarios = await Usuarios.somewhere('rol', 'doctor', limit)

      if(!usuarios) {
        res.status(400).json({
          success: false,
          message: 'No existen doctores en la DB'
        })
        return
      }

      res.status(200).json({
        success: true,
        message: 'La consulta se ejecuto con exito',
        data: usuarios
      })
        
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' })
    }
  }

  public static async create(req: Request, res: Response) {
    const usuarioData: IUsuario | IUsuario[] = req.body

    try {
        if (Array.isArray(usuarioData)) {
          const usuariosMany = await Promise.all(usuarioData.map((usuario) => Usuarios.validateUser(usuario))) 

          await Usuarios.insertMany(usuariosMany)
          res.status(201).json({ message: "Usuarios creados correctamente", usuariosMany })

        } else {
          const usuario = await Usuarios.validateUser(usuarioData)

          await Usuarios.create(usuario)
          res.status(201).json({ message: "Usuario creado correctamente" })
        }

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
              nombre: '',
              imagen: 'usuario.jpg'
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

  public static async readId(req: Request, res: Response) {
    const { id } = req.params

    try {
      const usuario = await Usuarios.getUserId(id)
      res.status(201).json({ usuario })
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor Controller Buscar ID' })
    }
  } 

  public static async deleteUserId(req: Request, res: Response) {
    const { id } = req.params

    try {
        await Usuarios.deleteUserId(id) 
      res.status(201).json(`Usuario borrado con éxito id: ${id}`)

    } catch (error) {
      res.status(500).json({ error: 'Error del servidor Controller Borrar ID' })
    }
  }

  public static async updateUser(req: Request, res: Response) {
    const { id } = req.params
    const user = req.body

    try {
      const userUpdate = await Usuarios.updateUserId(id, user)
      res.status(201).json( { 
        message: "Actualizado  con Éxito ",
        user: {
          user: userUpdate
        }
       })

    } catch (error) {
      res.status(500).json({ error: 'Error del servidor Controller actualizar ID' })
    }

  }
}