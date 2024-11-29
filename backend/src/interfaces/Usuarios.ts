export interface IPaciente {
    id?: string | undefined
    email: string;
    telefono: string;
    password: string;
    birthdate: string;
    rol: 'paciente';
    nombre: string;
}

export interface IDoctor {
    id?: string | undefined
    email: string;
    telefono: string;
    password: string;
    birthdate: string;
    rol: 'doctor';
    nombre: string;
    especialidad: string; // Obligatorio si es doctor
    costo: string;        // Obligatorio si es doctor
}

// Unión discriminada
export type IUsuario = IPaciente | IDoctor;


// export interface IUsuario {
//     email: string,
//     telefono: string,
//     password: string,
//     birthdate: string,
//     rol: 'doctor' | 'paciente',
//     nombre?: string,
//     especialidad?: string,
//     costo?: string
// }