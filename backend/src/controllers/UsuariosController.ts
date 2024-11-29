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

    // public static async login(req: Request, res: Response) {
    //     const {email, password} : {email: string, password: string} = req.body

    //     if(!email || !password) {
    //         res.status(500).json({ error: 'Error del servidor' })
    //     }

    //     try {
    //         const usuario = await Usuarios.findEmail(email)

    //         if(usuario) {

    //         } else {
    //             res.status(500).json({ error: 'No existe una cuenta asociada con este email' })
    //         }

    //     } catch (error) {
    //         res.status(500).json({ error: 'Error del servidor' })
    //     }

    // }
}