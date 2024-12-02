import PatientRecordsbar from "../components/PatientRecordsbar";
import CardPatientRecords from "../components/CardPatientRecords";
import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../contexts/AuthContext";
import { API_URL } from "../data/Constants";
import { Cita } from "../types/Usuarios";
export default function PatientRecords(){

   const { user} = useContext(AuthContext);

   const[usuarios,setUsuarios] = useState<Cita[]>([])


   useEffect (()=>{
      const fetchRegistro = async () => {
         try{
            const response = await fetch(`${API_URL}/citas/citas/usuario/${user.id}`)
            const data = await response.json()
            setUsuarios(data.citas)
             
         }catch(error){
            console.error('Error fetching history:', error);
         }
      }
      fetchRegistro()
   },[])
   return(
      <div>
         <PatientRecordsbar/>
         <div className=" pt-3 space-y-4">
            {usuarios.map((cita)=>
               cita.confirmado ?(
                  <CardPatientRecords
                     key={cita.id}
                     cita={cita}   
                  />         
               ) : null
            )}           
         </div>
      </div>
   )
}