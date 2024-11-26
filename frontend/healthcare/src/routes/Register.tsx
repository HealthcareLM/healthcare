import Inicio from "../layouts/Inicio";
import { useState } from "react";
import showPassword from '/eyePassword.png';
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function Register() {
  const [seePassword, setSeePassword] = useState(false)

  const clicSee = (() =>{
    // console.log('Clic en ver contraseña');
    setSeePassword(!seePassword);
  })

  const { isAuthenticated } = useAuth() 
  
  if(isAuthenticated) {
    return <Navigate to="/profile" />
  }

  return (
    <Inicio>
      <div className="text-center mb-9">
          <h1 className="text-[48px] font-bold">Hey there</h1>
          <h3 className="text-[20px] text-gray-500">Already know Musaki? <a href="/login" className="inline-block text-blue-500 hover:underline hover:scale-110 transition-all duration-75">Log in</a> </h3>
      </div>

       <form action="" className="space-y-4 px-44">
          <div className="mb-4 gap-1">
            <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
            <input type="email" id="email" placeholder="steve.madden@gmail.com" className="w-full p-2 border rounded" required />
          </div>

          <div className="mb-4 gap-1">
            <label htmlFor="number" className="block text-sm font-semibold">Phone Number</label>
            <input type="number" id="number" placeholder="1234567890" className="w-full p-2 border rounded [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" required />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold">Your password</label>
            <div className="flex items-center relative">
              <input type={seePassword ? "text" : "password"} id="password" placeholder="*******" className="w-full p-2 border rounded" required />
              <img src={showPassword} alt="ver contraseña imagen" className="absolute cursor-pointer right-4 h-6"
                onClick={clicSee}/>
            </div>
          </div>

          <div className="mb-4 gap-1">
            <label htmlFor="date" className="block text-sm font-semibold">Birth Date</label>
            <input type="date" id="date" placeholder="23/03/1995" className="w-full p-2 border rounded" required/>
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
