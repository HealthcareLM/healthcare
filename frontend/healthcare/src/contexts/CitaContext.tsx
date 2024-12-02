import React, { ReactNode, useState, createContext} from "react";
import { Cita } from "../types/Usuarios";


type CitaProvider = {
    children: ReactNode
}

type CitaContextProps = {
    cita: Omit<Cita, 'id'>
    setCita: React.Dispatch<React.SetStateAction<Omit<Cita, "id">>>
}

export const CitaContext = createContext<CitaContextProps>({} as CitaContextProps)

export default function CitaProvider({children}: CitaProvider) {

    const [cita, setCita] = useState<Omit<Cita, 'id'>>({
        doctorId: '',
        patientId: '',
        fecha: '',
        hora: '',
        sintomas: '',
        confirmado: false
    })
    
    return (
        <CitaContext.Provider value={{
            cita,
            setCita
        }}>
            {children}
        </CitaContext.Provider>
    )
}