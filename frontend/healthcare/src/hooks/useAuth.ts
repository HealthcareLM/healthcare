import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

export const useAuth = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('El hook useAuth debe utilizarse en un AuthProvider')
    }

    return context
}