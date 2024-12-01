import { createContext, ReactNode, useState } from 'react'

type AuthProvider = {
    children: ReactNode
}

type AuthContextProps = {
    isAuthenticated: boolean
}

export const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false
} as AuthContextProps)

export default function AuthProvider({children} : AuthProvider) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={{
            isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}
