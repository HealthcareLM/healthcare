import { Link } from "react-router-dom"

import Icon from "@mdi/react"
import { mdiRenameOutline} from "@mdi/js"
import Profilebar from "../components/Profilebar"
import { useContext, useEffect, useState } from "react"
import { Usuario } from "../types/Usuarios"
import { API_URL } from "../data/Constants"
import { AuthContext } from "../contexts/AuthContext";

export default function Profile( ) {   
   
   const [perfil,setPerfil] = useState<Usuario>({
      id: '',
      email: '',
      telefono: '',
      password: '',
      birthdate: '',
      rol: 'paciente',
      nombre: '',
      imagen: ''
   })

   const { user} = useContext(AuthContext);
   useEffect(() => {
      const fetchUsuario = async () => {
         try{
            //const id = request.params
            const response = await fetch(`${API_URL}/usuarios/usuario/${user.id}`)
            const data = await response.json();
            setPerfil(data.usuario)
         }catch(error){
            console.error('Error Fetch Profile', error)
         }
      }
      fetchUsuario()      
   },[])

   function AGE (){
      const actual = new Date()
      const nacimiento = new Date(perfil.birthdate)
      let edad = actual.getFullYear() - nacimiento.getFullYear()
      return edad
   }

   return (
    <>
      {user.nombre === '' ? (
         <div className="w-full bg-red-600 rounded-md text-white text-center py-2">Antes de continuar, es necesario que termines de configurar tu cuenta.</div>
      ) :
         ''
      }
      <div className="flex flex-col md:flex-row pb-7 border rounded-lg w-full">
         <Profilebar/>
         <div className=" p-3 w-full space-y-4">
            <h1 className="w-full text-2xl font-bold">My profile</h1>
            <div className="w-full rounded-lg border flex flex-row sm:items-center justify-between gap-4">
               <div className="flex items-center">
                  <div className="m-5 w-[100px] h-[100px] rounded-full overflow-hidden">
                     <img src={`/users/${user.imagen}`} alt="" className="object-cover w-full h-full" />
                  </div>
                  <div>
                     <p className="text-lg font-semibold">{perfil?.nombre}</p>
                     {perfil?.rol === "doctor" && (
                        <>
                           <p className="text-gray-500 text-sm">{perfil?.especialidad}</p>
                        </>
                     )}
                     <p className="text-gray-500 text-sm">Unites states</p>                     
                  </div>
               </div>
               <div className="flex items-center sm:justify-end p-4">
                     <Link className='flex items-center w-24 px-6 py-2 border-black text-black font-semibold p-3 border  rounded-lg hover:border-primary hover:text-primary' to="/profile/configure">Edit  <Icon path={mdiRenameOutline} size={'20px'}  /></Link>
               </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <div className="justify-between flex items-center">
                  <h1 className="text-xl font-bold">Personal Information</h1>
                  <Link className='flex items-center w-24 px-6 py-2 border-black text-black font-semibold p-3 border  rounded-lg hover:border-primary hover:text-primary' to="/profile/configure">Edit  <Icon path={mdiRenameOutline} size={'20px'}  /></Link>
               </div>
                  <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6">
                        <p className="text-gray-500 text-sm ">Name</p>
                        <p className="font-semibold">{perfil?.nombre}</p>
                        <p className="text-gray-500 pt-3 text-sm ">Phone Number</p>
                        <p className="font-semibold">{perfil?.telefono}</p>
                     </div>
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6">
                        <p className="text-gray-500 text-sm ">Date of Birth</p>
                        <p className="font-semibold">{perfil?.birthdate}</p>
                        <p className="text-gray-500 pt-3 text-sm ">Email Address</p>
                        <p className="font-semibold">{perfil?.email}</p>
                     </div>
                     <div className="sm:w-1/3 md:w-3/6 lg:w-4/6" >
                        <p className="text-gray-500 text-sm ">Age</p>
                        <p className="font-semibold">{AGE()}</p>
                        <p className="text-gray-500 pt-3 text-sm">Bio</p>
                        {perfil?.rol === "doctor" && (
                        <>
                           <p className="font-semibold">{perfil?.especialidad}</p>
                        </>
                        )}
                     </div>
                  </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <h1 className="w-full text-xl font-bold">Pre-existing Diseases</h1>
               <div className="w-full flex flex-col sm:flex-row sm:justify-between">
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 ">
                     <p className="text-gray-500 text-sm md:border-r-4">Speech</p>
                     <p className="md:border-r-4">None</p>
                     <p className="text-gray-500 text-sm pt-3">Physical</p>
                     <p>None</p>
                  </div>
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 md:pl-4">
                     <p className="text-gray-500 text-sm">Speech</p>
                     <p>None</p>
                  </div>
               </div>
            </div>
            <div className="w-full p-4 rounded-lg border flex flex-col gap-4">
               <h1 className="w-full text-xl font-bold ">General</h1>
               <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 md:border-r-4 flex sm:flex-row items-center justify-between sm:pr-4">
                     <p className="text-lg font-semibold">Change Password</p>
                     <Link className='items-center border-black text-black font-semibold px-3 py-2 border rounded-lg hover:border-primary hover:text-primary' to="/">Change</Link>                     
                  </div>
                  <div className="sm:w:1/2 md:w-1/2 lg:w-1/2 sm:pl-4 flex flex-col lg:flex-row sm:items-center justify-between">
                     <p className="text-lg font-semibold">Notifications</p>
                     <label className="inline-flex sm:items-center cursor-pointer space-x-5">
                        <input type="checkbox" hidden value="" className="sr-only peer"/>
                        <span className="text-gray-500 text-sm">Enable Notifications</span>
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:bg-primary rounded-full peer dark:bg-slate-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                     </label>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}

