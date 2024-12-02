import Inicio from "../layouts/Inicio";
import { ChangeEvent, FormEvent, useState } from "react";
import showPassword from '/eyePassword.png';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../data/Constants";
import { Modal } from "@mui/material";

import check from '../assets/checkmark.png';

type SignInType = {
  email: string,
  telefono: string,
  password: string,
  birthdate: string
}

export default function Register() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth() 

  // GUARDADO DE DATOS
  const [sigin, setSigin] = useState<SignInType>({
    email: '',
    telefono: '',
    password: '',
    birthdate: ''
  })
  const [errores, setErrores] = useState<string>('')
  const [modal, setModal] = useState(false)
  

  // PASSWORD
  const [seePassword, setSeePassword] = useState(false)

  const clicSee = (() =>{
    // console.log('Clic en ver contraseña');
    setSeePassword(!seePassword);
  })


  if(isAuthenticated) {
    navigate('/dashboard')
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSigin({
      ...sigin,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setErrores('')

    e.preventDefault()
    
    try {
      const response = await fetch(`${API_URL}/usuarios/signin`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sigin)
      })

      if(response.ok) {
        setModal(true)

        setTimeout(() => {
          navigate("/login")
        }, 3000)
      } else {
        const data = await response.json()
        setErrores(data.error)
      }
    } catch (error) {
      throw new Error('Ha ocurrido un error al registrarse.')
    }
  }

  return (
    <Inicio>

      <Modal
        open={modal}
        onClose={() => setModal(false)}
      >
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-gray-900 w-[500px] shadow-lg rounded-md p-10 text-center">
          <h3 className="text-white text-2xl">Te has registrado con éxito</h3>
          <p className="text-white py-2">A continuación, tendrás que iniciar sesión para ingresar en tu cuenta</p>
          <img src={check} className="w-40 mx-auto my-4" />
        </div>
      </Modal>

      <div className="text-center mb-9">
          <h1 className="text-[48px] font-bold">Hey there</h1>
          <h3 className="text-[20px] text-gray-500">Already know Musaki? <a href="/login" className="inline-block text-blue-500 hover:underline hover:scale-110 transition-all duration-75">Log in</a> </h3>
      </div>

       <form action="" className="space-y-4 px-44 md:px-16" onSubmit={handleSubmit}>
          {errores ? (
            <div className="text-red-600 text-sm py-2 font-semibold">{errores}</div>
          ) : ''}

          <div className="mb-4 gap-1">
            <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
            <input type="email" id="email" name="email" placeholder="steve.madden@gmail.com" className="w-full p-2 border rounded" required value={sigin.email} onChange={handleChange}/>
          </div>

          <div className="mb-4 gap-1">
            <label htmlFor="number" className="block text-sm font-semibold">Phone Number</label>
            <input type="number" id="number" name="telefono" placeholder="1234567890" className="w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" required value={sigin.telefono} onChange={handleChange}/>
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold">Your password</label>
            <div className="flex items-center relative">
              <input type={seePassword ? "text" : "password"} id="password" name="password" placeholder="*******" className="w-full p-2 border rounded" required value={sigin.password} onChange={handleChange}/>
              <img src={showPassword} alt="ver contraseña imagen" className="absolute cursor-pointer right-4 h-6"
                onClick={clicSee}/>
            </div>
          </div>

          <div className="mb-4 gap-1">
            <label htmlFor="date" className="block text-sm font-semibold">Birth Date</label>
            <input type="date" id="date" name="birthdate" placeholder="23/03/1995" className="w-full p-2 border rounded" required value={sigin.birthdate} onChange={handleChange}/>
          </div>

            <input type="submit" value={'Sign Up'} className="w-full bg-btn text-white font-bold rounded-lg p-3 hover:scale-110 transition-all duration-300 cursor-pointer" />

            <div className="flex items-center justify-between">
              <div className="flex justify-center">
                <input type="checkbox" id="remember" className="mr-2"   />
                <label htmlFor="remember" >Remember me</label>

              </div>
              <a href="#" className="text-blue-500 hover:scale-105 transition-all duration-75 ">Forgot password?</a>
            </div>
          </form>
    </Inicio>
  );
}
