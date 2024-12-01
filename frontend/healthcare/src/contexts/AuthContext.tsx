import { createContext, ReactNode, useState } from 'react'

// Definicion de estrcuturas:
type AuthProvider = {
    children: ReactNode
}

// Objeto con la informacion del usuario
type user = {
  id: string,
  nombre: string,
  email: string,
  imagen: string,
  rol: string
}

// Definicion del tipo de contexto para la autenticacion
type AuthContextProps = {
    isAuthenticated: boolean,
    user: user ,
    saveUser: (userData: user) => void,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

// Creacion de contexto para componentes globales para acceder al estado de autenticacion
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

// Funcion para envolver mas componentes y proporcionar el estado de autenticacion a traves del contexto
export default function AuthProvider({children} : AuthProvider) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const [user, setUser] = useState<user>({
      id: '',
      nombre: '',
      email: '',
      imagen: '',
      rol: ''
    })

    function saveUser(userData: user) {
      setIsAuthenticated(true)
      setUser(userData) 
    }
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            user,
            saveUser,
            setIsAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}
