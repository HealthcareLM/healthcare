import CardMenuConsults from "../components/CardMenuConsults";
import { useContext, useState, useEffect } from "react";
import {AuthContext} from "../contexts/AuthContext";
import { API_URL } from "../data/Constants";
import { Cita } from "../types/Usuarios";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

export default function MenuConsults(){

   const { user} = useContext(AuthContext);

   const[usuarios,setUsuarios] = useState<Cita[]>([])
   const [filteredCitas, setFilteredCitas] = useState<Cita[]>([]); // Citas filtradas según el botón seleccionado
   const [filterType, setFilterType] = useState<string>("");
   const [todayCita, setTodayCita] = useState<Cita[]>([]); // Nuevo estado para citas del día
   const [yesterdayCita, setYesterdayCita] = useState<Cita[]>([]); // Nuevo estado para citas del día
   const [nextCita, setNextCita] = useState<Cita[]>([]); // Nuevo estado para citas del día

   const Today = (fecha: string) => {
      const today = new Date();
      const td = new Date(today);
      td.setDate(today.getDate()-1)
      const RJ45 = td.toISOString().split('T')[0];
      return fecha === RJ45;    
   }; 

   const yesterday = (fecha: string) => {
      const today = new Date();
      const yst = new Date(today);
      yst.setDate(today.getDate()-2)
      const RJ45 = yst.toISOString().split('T')[0]; 
      return fecha === RJ45;    
   }; 
   const Next = (fecha: string) => {
      const today = new Date();
      const nxt = new Date(today);
      nxt.setDate(today.getDate())
      const RJ45 = nxt.toISOString().split('T')[0]; 
      return fecha === RJ45;    
   }; 

   useEffect(() => {
      if (usuarios.length > 0) { 
         setTodayCita(usuarios.filter((cita) => Today(cita.fecha)));
         setYesterdayCita(usuarios.filter((cita) => yesterday(cita.fecha))); 
         setNextCita(usuarios.filter((cita) => Next(cita.fecha)));
      }
   }, [usuarios]);

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

   const handleFilterChange = (type: string) => {
      let filtered: Cita[] = [];
  
      if (type === "Yesterday") {
        filtered = yesterdayCita;
      } else if (type === "Today") {
        filtered = todayCita;
      } else if (type === "Next") {
        filtered = nextCita;
      } else if (type === "All"){
        filtered = usuarios; // Si no hay filtro, muestra todas las citas
      }
      
      setFilterType(type);
      setFilteredCitas(filtered);
    };

    const handleMonthChange = (value: string) => {
      const [year, month] = value.split("-");
      const filtered = usuarios.filter((cita) => {
         const citaDate = new Date(cita.fecha);
         return (
            citaDate.getFullYear() === parseInt(year) &&
            citaDate.getMonth() + 1 === parseInt(month)
         );
      });
      setFilteredCitas(filtered);
   };


   return(
      <div>
         <div className="flex">
            <div className=" w-full flex flex-col sm:flex-row gap-3 justify-between">
               <nav className="flex ">
                  <ul className='flex flex-row w-full justify-between gap-3 p-2 bg-gray-100 rounded-md '>
                     <li className="w-24"> 
                        <button className='flex  items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black'onClick={() => handleFilterChange("Yesterday")} >Yesterday</button>
                     </li>
                     <li className="w-24 justify-items-center">
                        <button className='flex  items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black' onClick={() => handleFilterChange("Today")}>Today</button>
                     </li>
                     <li className="w-20 justify-items-center">
                        <button className='flex  items-center py-2 px-3  text-gray-600 rounded-md hover:bg-white hover:text-black' onClick={() => handleFilterChange("Next")}>Next</button>
                     </li>
                     <li className="w-16">
                        <button className='flex  items-center py-2   text-gray-600 rounded-md hover:bg-white hover:text-black justify-items-center px-5 ' onClick={() => handleFilterChange("All")}>All</button>
                     </li>
                  </ul>
               </nav>
               
               <div className="flex justify-between lg:justify-end sm:px-4 w-full  space-x-4">
                  <input type="month" className=" rounded-lg bg-gray-100 px-3 border border-black" onChange={(e) => handleMonthChange(e.target.value)}/>
                  <Link className='flex text-white w-48 items-center justify-items-center p-3 rounded-md bg-primary' to="/schedule">
                  <Icon path={mdiPlus} size={'18px'} className='mr-2 border rounded-sm'/>New Appointment</Link>
               </div>
            </div>
         </div>
         <div className=" pt-3 space-y-4">
         {filteredCitas.length > 0 ? (
          filteredCitas.map((cita) =>
            !cita.confirmado ? (
              <CardMenuConsults key={cita.id} cita={cita} />
            ) : null
          )
        ) : (
          <p>There are no appointments for the selected filter.</p>
        )}      
         </div>
      </div>
   )
}