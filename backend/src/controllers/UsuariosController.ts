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
}