

export interface IUsuario {
    email: string,
    telefono: string,
    password: string,
    birthdate: Date,
    rol: ['doctor', 'paciente'],
    nombre?: string,
    especialidad?: string,
    costo?: string
}