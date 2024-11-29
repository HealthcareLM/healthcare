import { Router } from "express";
import { CitasController } from "../controllers/CitasControllers";

const router = Router();

router.get('/', CitasController.all);          // Obtener todas las citas
router.post('/', CitasController.create);      // Crear una cita
router.get('/:id', CitasController.getById);   // Obtener una cita por ID
router.put('/:id', CitasController.update);    // Actualizar una cita
router.delete('/:id', CitasController.delete); // Eliminar una cita
// Obtener todas las citas por usuario
router.get('/citas/usuario/:userId', CitasController.getCitasByUser);

// Obtener todas las recetas por usuario
router.get('/recetas/usuario/:userId', CitasController.getRecetasByUser);

export default router;
