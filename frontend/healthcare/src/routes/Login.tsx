import Inicio from "../layouts/Inicio";
import { useState } from "react";
import showPassword from '/eyePassword.png';

export default function Login() {
  const [seePassword, setSeePassword] = useState(false)

  const clicSee = (() =>{
    // console.log('Clic en ver contraseña');
    setSeePassword(!seePassword);
  })

  return (
    <Inicio>
      <div className="text-center mb-9">
          <h1 className="text-[48px] font-bold">Welcome back</h1>
          <h3 className="text-[20px] text-gray-500">New to  Musaki? <a href="/signup" className="inline-block text-blue-500 hover:underline hover:scale-110 transition-all duration-75">Sign up</a> </h3>
      </div>

       <form action="" className="space-y-4 px-44">
          <div className="campo mb-4 gap-1">
            <label htmlFor="email" className="block text-sm font-semibold">Email address</label>
            <input type="email" id="email" placeholder="Email address" className="w-full p-2 border rounded" required />
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-semibold">Your password</label>
            <div className="flex items-center relative">
              <input type={seePassword ? "text" : "password"} id="password" placeholder="*******" className="w-full p-2 border rounded" required />
              <img src={showPassword} alt="ver contraseña imagen" className="absolute cursor-pointer right-4 h-6"
                  onClick={clicSee}/>
            </div>
          </div>

          <input type="submit" value={'Log in'} className="w-full bg-btn text-white font-bold rounded-lg p-3 hover:scale-110 transition-all duration-300 cursor-pointer" />

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
 