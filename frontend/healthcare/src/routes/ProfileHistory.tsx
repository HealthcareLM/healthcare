import Profilebar from "../components/Profilebar"
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import CardConsultationHistory from "../components/CardConsultationHistory";
import { useContext, useEffect, useState } from "react";
import { Cita, Paciente, Usuario } from "../types/Usuarios";
import { API_URL } from "../data/Constants";
import {AuthContext} from "../contexts/AuthContext";

export default function ProfileHistory() {

   //const [date, setDate] = useState<Date | null>(new Date());
   const [history,setHistory] = useState<Cita[]>([])
   const [pacientes, setPacientes] = useState<Record<string, Paciente>>({}); // Almacenar datos de pacientes por ID
   const [todayCita, setTodayCita] = useState<Cita[]>([]); // Nuevo estado para citas del día
   const [yesterdayCita, setYesterdayCita] = useState<Cita[]>([]); // Nuevo estado para citas del día
   const [nextCita, setNextCita] = useState<Cita[]>([]); // Nuevo estado para citas del día

   const { user} = useContext(AuthContext);
   const Today = (fecha: string) => {
      const today = new Date();
      const RJ45 = today.toISOString().split('T')[0];
      return fecha === RJ45;    
   }; 

   const yesterday = (fecha: string) => {
      const today = new Date();
      const yst = new Date(today);
      yst.setDate(today.getDate()-1)
      const RJ45 = yst.toISOString().split('T')[0]; 
      return fecha === RJ45;    
   }; 

   const Next = (fecha: string) => {
      const today = new Date();
      const nxt = new Date(today);
      nxt.setDate(today.getDate()+1)
      const RJ45 = nxt.toISOString().split('T')[0]; 
      return fecha === RJ45;    
   }; 
   useEffect(() => {
      const fetchHistory = async () => {
         try{
            const response = await fetch(`${API_URL}/citas/citas/usuario/${user.id}`)
            const data = await response.json()
            
            setHistory(data.citas)
            const patientIds = [...new Set<string>(data.citas.map((cita: Cita) => cita.patientId))];
            await Promise.all(
               patientIds.map(async (id) => {
                  const res = await fetch(`${API_URL}/usuarios/usuario/${id}`);
                  const pacienteData = await res.json();
                  setPacientes(pacienteData.usuario)
               })
            ) 
         }catch(error){
            console.error('Error fetching history:', error);
         }
      }      
      fetchHistory()
   },[])

   useEffect(() => {
      if (history.length > 0) {
         setTodayCita(history.filter((cita) => Today(cita.fecha)));
         setYesterdayCita(history.filter((cita) => yesterday(cita.fecha))); 
         setNextCita(history.filter((cita) => Next(cita.fecha)));
      }
   }, [history]);


   return(
      <>
         <div className="w-full flex flex-col pb-7 md:flex-row border rounded-lg ">
            <Profilebar/>
            <div className="lg:w-full m-4 flex-col sm:flex-row border rounded-lg space-y-5">
               <div className="p-4 flex flex-col sm:flex-row  justify-between items-center">
                  <h1 className="text-2xl font-bold">History</h1> 
                  <Link className='flex text-white items-center p-3 rounded-md bg-primary' to="/">
                     <Icon path={mdiPlus} size={'18px'} className='mr-2 border rounded-sm'/>New Appointment</Link>
               </div>
               <div className="m-4 space-y-2">
                  <h1 className="text-xl font-bold">Yesterday</h1>
                  <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">     
                  {yesterdayCita.map((cita) => (
                  <CardConsultationHistory key={cita.id} cita={cita}/>
                   ))}
                  </div>
               </div>
               <div className=" m-4 space-y-3 ">
                  <h1 className="text-xl font-bold ">Today</h1>
                  {todayCita.map((cita) => (
                  <CardConsultationHistory key={cita.id} cita={cita} />
                   ))}
               </div>
               <div className="m-4 pb-4">
                  <h1 className="text-xl font-bold pb-2">asd</h1>
                  <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
                  {nextCita.map((cita) => (
                  <CardConsultationHistory key={cita.id} cita={cita}/>
                   ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}