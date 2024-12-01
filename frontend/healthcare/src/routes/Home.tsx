import Carrusel from "../components/Carrusel"
import CardDoctor from "../components/CardDoctor";

import Icon from '@mdi/react';
import { mdiMagnify, mdiMapMarkerOutline, mdiMapMarker } from '@mdi/js';
import BarraNewUser from "../components/BarraNewUser";
import { useEffect, useState } from "react";
import { Doctor } from "../types/Usuarios";
import { API_URL } from "../data/Constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Home() {

  const navigate = useNavigate()

  const { isAuthenticated } = useAuth()

  const [doctores, setDoctores] = useState<Doctor[]>([])

  if(isAuthenticated) {
    navigate('/dashboard')
  }

  useEffect(() => {
    // Definir la función asíncrona
    const fetchDoctores = async () => {
      try {
        const response = await fetch(`${API_URL}/usuarios/doctores/3`);
        const data = await response.json();
        setDoctores(data.data); // Actualizar el estado con los datos
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Llamar a la función asíncrona
    fetchDoctores();
  }, []); // El arreglo vacío asegura que solo se ejecute al montar el componente

  return (
    <>
      <BarraNewUser />
      <div className="container mx-auto mt-8 px-4 md:px-0">
        <div className="relative">
          <Carrusel/>

          <form className='flex items-center bg-white rounded-md h-fit w-fit absolute top-[250px] left-1/2 transform -translate-x-1/2 shadow-lg'>
            <div className="w-full relative after:content-[''] after:block after:absolute after:top-2 after:right-0 after:h-3/4 after:bg-gray_3 after:w-px">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none"><Icon path={mdiMagnify} size='20px' className='text-gray_2'/></div>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="Find doctors"
                    className="w-full p-3 ps-10 text-sm text-gray_2 border border-white rounded-lg bg-white"
                />
            </div>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none flex-grow"><Icon path={mdiMapMarkerOutline} size='20px' className='text-gray_2'/></div>
                <input 
                    type="text" 
                    name="location" 
                    id="location" 
                    placeholder="Location"
                    className="w-52 p-3 ps-10 text-sm text-gray_2 border border-white rounded-lg bg-white"
                />
            </div>

            <input type="submit" value="Search" className='text-white bg-primary hover:bg-cyan-700 py-2 px-4 text-sm font-medium text-center rounded-md mx-2'/>
          </form>
        </div>
        <div className="mt-[73px]">
          <h3 className="text-2xl font-semibold mb-5">Recommended Doctors</h3>

          <div className="flex justify-between gap-4 flex-col md:flex-row">
            {doctores.map(doctor => (
              <CardDoctor key={doctor.id} doctor={doctor}/>
            ))}
          </div>
        </div>
        <div className="my-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold mb-3">Nearby Doctors</h3>
          </div>
          <div className="flex border border-slateBorder rounded-xl items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-3 py-8 w-full px-4">
              <Icon path={mdiMapMarker} size={'42px'} />
              <p className="text-sm text-['#4E4E4E']">Please enable your location, so we can find nearby doctors. <span className="text-primary underline cursor-pointer text-sm">Enable Now</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
