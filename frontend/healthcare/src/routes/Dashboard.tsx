import Header from "../layouts/Header"
import Carrusel from "../components/Carrusel"
import Calendar from "../components/Calendar";

import CardDoctor from "../components/CardDoctor";
import CardNearbyDoctor from "../components/CardNearbyDoctor";

import Icon from '@mdi/react';
import { mdiMapMarker, mdiChevronRight, mdiCalendarMonthOutline  } from '@mdi/js';
import { useEffect, useState } from "react";
import { API_URL } from "../data/Constants";
import { Cita, Doctor } from "../types/Usuarios";

export default function Dashboard() {

  const [doctores, setDoctores] = useState<Doctor[]>([])
  const [ubicacion, setUbicacion] = useState(false)
  const [citas, setCitas] = useState<Cita[]>([])
  const handleLocationRequest = () => {
    navigator.geolocation.getCurrentPosition(
      () => {
        setUbicacion(true)
      }
    )
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
    fetchDoctores()
  }, []);

  useEffect(() => {
    const fetchCitasByUsers = async () => {
      try {
        const response = await fetch (`${API_URL}/citas/citas/usuario/HD0jFK4BZlyjVI7dvsIS`)
        const data = await response.json();
        console.log('Datos recibidos:', data);
        setCitas(data.data)
      }catch(error){
        console.log('Error al obtener las citas por usuario', error)
      }
    };
    fetchCitasByUsers()
  }, []);
  

  return (
    <>
        <div className="">
          <div className="flex gap-5 flex-col xl:flex-row">
            <div className="w-full lx:w-3/5">
              <div className="h-72">
                <Carrusel/>
              </div>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold mb-3">Nearby Doctors</h3>
                  { ubicacion ? (
                    <div className="flex items-center">
                      <p className="text-[#4CB269] text-sm font-bold cursor-pointer">View All</p>
                      <Icon path={mdiChevronRight} size={'16px'} className="text-[#4CB269]"/>
                    </div>
                  ) : ('')}
                </div>
                { !ubicacion ? (
                  <div className="flex border border-slateBorder rounded-xl items-center justify-center">
                    <div className="flex flex-col justify-center items-center gap-3 py-8 w-full">
                      <Icon path={mdiMapMarker} size={'42px'} />
                      <p className="text-sm text-['#4E4E4E']">Please enable your location, so we can find nearby doctors. <span className="text-primary underline cursor-pointer text-sm" onClick={handleLocationRequest}>Enable Now</span></p>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-4 flex-col md:flex-row">
                    <CardNearbyDoctor/>
                    <CardNearbyDoctor/>
                    <CardNearbyDoctor/>
                  </div>
                )}
              </div>
            </div>
            <div className="w-full xl:w-2/5 border border-slateBorder rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold">Upcoming Appointments</h3>
                <div className="flex items-center">
                  <p className="text-primary text-sm font-bold cursor-pointer">View All</p>
                  <Icon path={mdiChevronRight} size={'16px'} className="text-primary"/>
                </div>
              </div>
              <div className="">
                <Calendar/>

                <div className="flex flex-col justify-center items-center mt-6">
                  <Icon path={mdiCalendarMonthOutline} size={'48px'} className="text-primary"/>
                  <p>No upcoming appointments</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 border border-slateBorder rounded-xl p-5">
            <h3 className="text-2xl font-semibold mb-5">Recommended Doctors</h3>

            <div className="flex justify-between gap-4 flex-col md:flex-row">
              {doctores.map(doctor => (
                <CardDoctor key={doctor.id} doctor={doctor}/>
              ))}
            </div>
          </div>
        </div>
    </>
  )
}

