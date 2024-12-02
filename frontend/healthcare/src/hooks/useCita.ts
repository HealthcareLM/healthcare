import { useContext } from "react"
import { CitaContext } from "../contexts/CitaContext"

export const useCita = () => {
    const context = useContext(CitaContext)

    if(!context) {
        throw new Error('El hook useAuth debe utilizarse en un AuthProvider')
    }

    return context
}