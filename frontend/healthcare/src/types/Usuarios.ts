export type Paciente = {
    id?: string | undefined
    email: string;
    telefono: string;
    password: string;
    birthdate: string;
    rol: 'paciente';
    nombre: string;
    imagen: string;
}

export type Doctor = {
    id?: string | undefined
    email: string;
    telefono: string;
    password: string;
    birthdate: string;
    rol: 'doctor';
    nombre: string;
    imagen: string;
    especialidad: string; // Obligatorio si es doctor
    costo: string;        // Obligatorio si es doctor
    horario: string,
}

export type Cita = {
    id: string;
    doctorId: string;       // ID del doctor asociado
    patientId: string;      // ID del paciente asociado
    fecha: string;          // Fecha de la cita (Formato: YYYY-MM-DD)
    hora: string;           // Hora de la cita (Formato: HH:mm AM/PM)
    receta?: string;        // URL o nombre del archivo de la receta
    sintomas?: string;      // Descripción de síntomas
    confirmado?: boolean;   // Confirmación de la cita (1 = confirmado, 0 = no confirmado)
  }
// Unión discriminada
export type Usuario = Paciente | Doctor;