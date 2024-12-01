import { Request, Response } from 'express';
import { Citas } from '../models/Citas';
import { ICita } from '../interfaces/Citas';

export class CitasController {
    public static async all(req: Request, res: Response) {
        try {
            const citas = await Citas.getAll();
            res.status(200).json(citas);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al obtener las citas';
            res.status(500).json({ error: errorMessage });
        }
    }

    public static async create(req: Request, res: Response) {
        const cita: ICita = req.body;

        try {
            const id = await Citas.create(cita);
            res.status(201).json({ message: 'Cita creada con éxito', id });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al crear la cita';
            res.status(400).json({ error: errorMessage }); // Cambiado a 400 porque puede ser un conflicto lógico, no del servidor
        }
    }

    public static async getById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const cita = await Citas.getById(id);
            res.status(200).json(cita);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Cita no encontrada';
            res.status(404).json({ error: errorMessage });
        }
    }

    public static async update(req: Request, res: Response) {
        const { id } = req.params;
        const data: Partial<ICita> = req.body;

        try {
            await Citas.update(id, data);
            res.status(200).json({ message: 'Cita actualizada con éxito' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al actualizar la cita';
            res.status(500).json({ error: errorMessage });
        }
    }

    public static async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            await Citas.delete(id);
            res.status(200).json({ message: 'Cita eliminada con éxito' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error al eliminar la cita';
            res.status(500).json({ error: errorMessage });
        }
    }
    
    public static async getCitasByUser(req: Request, res: Response) {
        const { userId } = req.params;

        try {
            const citas = await Citas.getCitasByUser(userId);
            
            res.status(200).json({citas});
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            res.status(500).json({ error: errorMessage || 'Error al obtener las citas del usuario' });
        }
    }

    // Obtener todas las recetas de un usuario
    public static async getRecetasByUser(req: Request, res: Response) {
        const { userId } = req.params;

        try {
            const recetas = await Citas.getRecetasByUser(userId);
            res.status(200).json(recetas);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
            res.status(500).json({ error: errorMessage || 'Error al obtener las recetas del usuario' });
        }
    }
}
