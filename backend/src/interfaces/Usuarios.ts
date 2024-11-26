

export interface IUsuarios {
    email: string,
    telefono: string,
    password: string,
    nombre: string,
    birthdate: Date,
    rol: ['doctor', 'paciente'],
    especialidad?: string,
    costo?: string
}