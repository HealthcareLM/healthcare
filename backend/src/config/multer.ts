import multer from 'multer'
import { UPLOADS_DIR } from '../utils/Uploads_dir';

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_DIR); // Guardar los archivos en la carpeta 'uploads'
    },
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${file.originalname}`; // Nombre único para evitar colisiones
      cb(null, uniqueName);
    },
});

export const upload = multer({ storage });