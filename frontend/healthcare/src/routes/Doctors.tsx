import CardDoctor from "../components/CardDoctor";
import { Doctor } from "../types/Usuarios";
import { useState, useEffect } from "react";
import { API_URL } from "../data/Constants";



export default function Doctors() {


  const [doctores, setDoctores] = useState<Doctor[]>([])

  useEffect(() => {
    // Definir la función asíncrona
    const fetchDoctores = async () => {
      try {
        const response = await fetch(`${API_URL}/usuarios/doctores`);
        const data = await response.json();
        setDoctores(data.data); // Actualizar el estado con los datos
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Llamar a la función asíncrona
    fetchDoctores()
  }, []);


  return(
    
    <div className="grid grid-cols-3 gap-5 p-6">
      {doctores.map(doctor => (
        <CardDoctor key={doctor.id} doctor={doctor}/>
      ))}
    </div>
   
  )
} 