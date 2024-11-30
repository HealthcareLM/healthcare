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
    especialidad: string; // Obligatorio si es doctor
    costo: string;        // Obligatorio si es doctor
    imagen: string;
}

// Unión discriminada
export type Usuario = Paciente | Doctor;