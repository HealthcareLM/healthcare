import { mdiFileDocumentOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { Cita, Paciente, Usuario } from "../types/Usuarios";
import { API_URL } from "../data/Constants";
import { useEffect, useState } from "react";

type CardHistoryProps = {
   cita : Cita
}
export default function CardConsultationHistory({cita} : CardHistoryProps){

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

   useEffect(() => {

      const fetchPaciente = async () => {
         try {
            const response = await fetch(`${API_URL}/usuarios/usuario/${cita.patientId}`);
            const data = await response.json();
            setPaciente(data.usuario)
          } catch (error) {
            console.error('Error fetching paciente:', error);
          }
      }
      
      fetchPaciente()

   }, [])

   return(
      <div className=" p-4 border  rounded-lg sm:flex-row">
         <div className="flex flex-col pb-3 sm:flex-row items-center space-x-3">
            <img className="w-20 h-15" src="/users/history.png" alt="" />
            <h3 className="text-sm">{paciente.nombre}</h3>
            <Link className='flex flex-col sm:flex-row text-primary items-center p-3 ' to="/">
               <Icon path={mdiFileDocumentOutline} size={'30px'} className='mr-2'/></Link>                     
         </div>
         <div className="border p-3 text-primary rounded-lg bg-gray-200">
            <time >{cita.fecha}</time>
         </div>
      </div>   
   )
} 