import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../data/Constants";
import { Cita, Doctor, Paciente } from "../types/Usuarios";
import {AuthContext} from "../contexts/AuthContext";

type CardCitaProps = {
   cita : Cita
}

export default function({cita}: CardCitaProps){
   const [paciente, setPaciente] = useState<Paciente>({
      id: '',
      email: '',
      telefono: '',
      password: '',
      birthdate: '',
      rol: 'paciente',
      nombre: '',
      imagen: ''
   })
   const [doctor,setDoctor] = useState<Doctor>({
      id: '',
      email:'',
      telefono: '', 
      password: '',
      birthdate: '',
      rol:'doctor', 
      nombre: '', 
      imagen:'', 
      especialidad: '',
      costo: '',
      horario: ''
   })

   const { user} = useContext(AuthContext); 
   useEffect(() => {

      const fetchPaciente = async () => {
         try {
            if(user.rol === "paciente" ){
               const response = await fetch(`${API_URL}/usuarios/usuario/${cita.doctorId}`);
               const data = await response.json();
               setPaciente(data.usuario)
            }
            if(user.rol ==="doctor"){
               const response = await fetch(`${API_URL}/usuarios/usuario/${cita.patientId}`);
               const data = await response.json();
               setDoctor(data.usuario)
            }
          } catch (error) { 
            console.error('Error fetching paciente:', error); 
          }
         }
      fetchPaciente()
   },[])
   
   function handleMonthChange(value: string) {
      console.log(value)
      
      throw new Error("Function not implemented.");
   }

   return(
      <div className="flex">
         <div className=" w-full flex flex-col sm:flex-row gap-3 justify-between">
            <nav className="flex ">
               <ul className='flex flex-row w-full justify-between gap-3 p-2 bg-gray-100 rounded-md '>
                  <li className="w-24">
                     <Link className='flex  items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black' to="/patientrecords">Yesterday</Link>
                  </li>
                  <li className="w-24">
                     <Link className='flex justify-center items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black' to="/patientrecords">Today</Link>
                  </li>
                  <li className="w-24">
                     <Link className='flex justify-center items-center py-2 px-3 text-gray-600 rounded-md hover:bg-white hover:text-black' to="/patientrecords">Past</Link>
                  </li>
               </ul>
            </nav>
            <input type="month" className=" rounded-lg bg-gray-100 px-3 border border-black" onChange={(e) => handleMonthChange(e.target.value)}/>
         </div>
      </div>
   )
}