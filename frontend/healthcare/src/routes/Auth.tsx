import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function Auth() {

    const { getUser, saveUser } = useAuth()

    useEffect(() => {
        saveUser(getUser())
    }, [])

    return <Outlet/>
}
