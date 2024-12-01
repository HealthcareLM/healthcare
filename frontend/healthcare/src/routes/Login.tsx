import Inicio from "../layouts/Inicio";
import { useState } from "react";
import showPassword from '/eyePassword.png';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../data/Constants";


export default function Login() {

  const navigate = useNavigate()

  const [seePassword, setSeePassword] = useState(false)

  const clicSee = (() =>{
    // console.log('Clic en ver contraseña');
    setSeePassword(!seePassword);
  })

  const { isAuthenticated, saveUser } = useAuth()

  if(isAuthenticated) {
    navigate('/dashboard')
  }
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string>('')
  const navegate = useNavigate()

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/usuarios/login`, { 
        method: 'POST',
        headers: { 
          "Content-Type": "application/json"
         },
         body: JSON.stringify({
          email,
          password
         })
      })

      if (response.ok) {
        const data = await response.json()
        saveUser(data.user)
          // window.location.href = '/profile' -> Refrezca la pagina, se implementa mejor Navegation, pero no  se puede usar en try-catch
        navegate('/profile')
      } else {
        // console.log(response.body);
        // await response.json()
        setError('Credenciales Invalidas')
        throw new Error("Crendenciales Invalidas, vuelve a intentar")
      }
      
    } catch (error) {
      throw new Error("Error al iniciar sesion")
    }
  }

  return (
    <Inicio>
      <div className="text-center mb-9">
          <h1 className="text-[48px] font-bold">Welcome back</h1>
          <h3 className="text-[20px] text-gray-500">New to  Musaki? <a href="/signup" className="inline-block text-blue-500 hover:underline hover:scale-110 transition-all duration-75">Sign up</a> </h3>
      </div>

       <form action="" className="xl:space-y-4 px-44 md:space-y-1 md:px-16 " onSubmit={ handleLogin }>

          { error && (<div className="text-white font-semibold text-center text-sm mb-4 py-2 bg-red-500"> {error} </div>) }

          <div className="campo mb-4 gap-1 md:mt-4 md:mb-5">
            <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
            <input type="email" id="email" placeholder="Email address" className="w-full p-2 border rounded" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold">Your password</label>
            <div className="flex items-center relative md:mb-6 xl:mb-0">
              <input type={seePassword ? "text" : "password"} id="password" placeholder="*******" className="w-full p-2 border rounded" value={password} onChange={e => setPassword(e.target.value)}  required />
              <img src={showPassword} alt="ver contraseña imagen" className="absolute cursor-pointer right-4 h-6"
                  onClick={clicSee}/>
            </div>
          </div>

          <input type="submit" value={'Log in'} className="w-full bg-btn text-white font-bold rounded-lg p-3 hover:scale-110 transition-all duration-300 cursor-pointer mt-6 " />

          <div className="flex items-center justify-between md:flex-col">
            <div className="flex justify-center md:mt-6">
              <input type="checkbox" id="remember" className="mr-2 " />
              <label htmlFor="remember" >Remember me</label>

            </div>
            <a href="#" className="text-blue-500 hover:scale-105 transition-all duration-75 md:mt-3 ">Forgot password?</a>
          </div>
        </form>
    </Inicio>
  );
}
 