

export interface IUsuario {
    email: string,
    telefono: string,
    password: string,
    birthdate: string,
    rol: 'doctor' | 'paciente',
    nombre?: string,
    especialidad?: string,
    costo?: string
}