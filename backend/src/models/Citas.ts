import db from "../config/database";
import { ICita } from "../interfaces/Citas";

const collectionName = 'citas';

export const Citas = {
    async getCitasByUser(userId: string): Promise<ICita[]> {
        try {
            console.log(`Buscando citas para el usuario: ${userId}`); // Depuración
            const snapshot = await db.collection(collectionName)
                .where('patientId', '==', userId)
                .get();
    
            if (snapshot.empty) {
                console.log('No se encontraron citas para este usuario'); // Depuración
                return [];
            }
    
            const citas: ICita[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as ICita[];
    
            console.log('Citas encontradas:', citas); // Depuración
            return citas;
        } catch (error) {
            console.error('Error al obtener citas del usuario:', error);
            throw new Error('Ocurrió un error al obtener las citas del usuario');
        }
    },
    async getRecetasByUser(userId: string): Promise<{ id: string; receta: string }[]> {
        try {
            const snapshot = await db.collection(collectionName)
                .where('patientId', '==', userId)
                .get();

            const recetas = snapshot.docs
                .map(doc => {
                    const data = doc.data();
                    if (data.receta) {
                        return { id: doc.id, receta: data.receta };
                    }
                    return null;
                })
                .filter(Boolean) as { id: string; receta: string }[];

            return recetas;
        } catch (error) {
            throw new Error('Ocurrió un error al obtener las recetas del usuario');
        }
    },

    async create(cita: ICita): Promise<string> {
        try {
            // Validar si ya existe una cita en la misma fecha y hora para el mismo doctor
            const snapshot = await db.collection(collectionName)
                .where('doctorId', '==', cita.doctorId)
                .where('fecha', '==', cita.fecha)
                .where('hora', '==', cita.hora)
                .get();

            if (!snapshot.empty) {
                throw new Error('Ya existe una cita programada con este doctor en la misma fecha y hora');
            }

            // Crear la nueva cita si no hay conflicto
            const newCita = await db.collection(collectionName).add(cita);
            return newCita.id;
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Ocurrió un error al crear la cita';
            throw new Error(errorMessage);
        }
    },

    async getAll(): Promise<ICita[]> {
        try {
            const snapshot = await db.collection(collectionName).get();

            const citas: ICita[] = snapshot.docs.map(doc => {
                const data = doc.data();

                if (
                    typeof data.doctorId === 'string' &&
                    typeof data.patientId === 'string' &&
                    typeof data.fecha === 'string' &&
                    typeof data.hora === 'string'
                ) {
                    return {
                        id: doc.id,
                        doctorId: data.doctorId,
                        patientId: data.patientId,
                        fecha: data.fecha,
                        hora: data.hora,
                        receta: data.receta || undefined,
                        sintomas: data.sintomas || undefined,
                        confirmado: data.confirmado || false,
                    };
                } else {
                    throw new Error(`Los datos de la cita con ID ${doc.id} no cumplen con la estructura esperada`);
                }
            });

            return citas;
        } catch (error) {
            throw new Error('Ocurrió un error al obtener las citas');
        }
    },

    async getById(id: string): Promise<ICita> {
        try {
            const doc = await db.collection(collectionName).doc(id).get();

            if (!doc.exists) {
                throw new Error('Cita no encontrada');
            }

            const data = doc.data();

            if (
                data &&
                typeof data.doctorId === 'string' &&
                typeof data.patientId === 'string' &&
                typeof data.fecha === 'string' &&
                typeof data.hora === 'string'
            ) {
                return {
                    id: doc.id,
                    doctorId: data.doctorId,
                    patientId: data.patientId,
                    fecha: data.fecha,
                    hora: data.hora,
                    receta: data.receta || undefined,
                    sintomas: data.sintomas || undefined,
                    confirmado: data.confirmado || false,
                };
            } else {
                throw new Error(`Los datos de la cita con ID ${id} no cumplen con la estructura esperada`);
            }
        } catch (error) {
            throw new Error('Ocurrió un error al obtener la cita');
        }
    },

    async update(id: string, data: Partial<ICita>): Promise<boolean> {
        try {
            await db.collection(collectionName).doc(id).update(data);
            return true;
        } catch (error) {
            throw new Error('Ocurrió un error al actualizar la cita');
        }
    },

    async delete(id: string): Promise<boolean> {
        try {
            await db.collection(collectionName).doc(id).delete();
            return true;
        } catch (error) {
            throw new Error('Ocurrió un error al eliminar la cita');
        }
    }
};
