import { mdiClockOutline, mdiAccountCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { Cita, Doctor, Paciente } from "../types/Usuarios";
import { useState, useContext, useEffect } from "react";
import {AuthContext} from "../contexts/AuthContext";
import { API_URL } from "../data/Constants";

type CardRegisterProps = {
   cita : Cita
}

export default function CardPatientRecords({cita} : CardRegisterProps){
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
   },[user.id])

   const fecha = () => {
      const dia = new Date(cita.fecha)
      const d = new Date(dia)
      d.setDate(dia.getDate()+1)
      const day = d.toLocaleDateString("en-MX", { weekday: "short" }); 
      const numero = d.getDate()
      return {day,numero}
   }
   const {day,numero} = fecha()
   
   return(
      <div className="group space-y-3 sm:space-y-0 flex flex-col sm:flex-row border rounded-lg p-3 hover:bg-gray-100 ">
         <div className="sm:pr-3">
            <div className=" justify-items-center border rounded-lg px-5 py-2 bg-gray-100">
               <p className="text-xs font-extrabold ">{day}</p>
               <p className="text-xl font-extrabold ">{numero} </p>
            </div>
         </div>
         <div className="sm:px-3 sm:border-l-2 group-hover:border-l-cyan-100 sm:w-1/3 space-y-2">
            <div className="flex space-x-2 items-center">
               <Icon path={mdiClockOutline} size={'20px'} className=""/>          
               <p className="block ">{cita.hora}</p>
            </div>
            <div className="flex space-x-2 items-center">
               <Icon path={mdiAccountCircleOutline} size={'20px'}></Icon>
               <p>{user.rol === "doctor" ? doctor.nombre : paciente.nombre}</p>
            </div>
         </div>
         <div className="flex items-center justify-between w-full">
            <div className="   space-y-2">
               <div className="md:flex sm:gap-3">
                  <p>Issue:</p>
                  <p>{cita.sintomas}</p>
               </div>
               <button className="text-blue-700">View Documents</button>
            </div>            
               <Link className='group-hover:bg-white flex items-center px-10 py-3 text-black font-semibold bg-gray-100 rounded-lg ' to="/">Edit</Link>
         </div>
      </div>
   )
}