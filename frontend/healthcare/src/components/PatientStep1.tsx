import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import CalendarPatient from "./CalendarPatient";
import { Dispatch } from "react";
import { useEffect, useState } from "react";
import { Doctor } from "../types/Usuarios";
import { API_URL } from "../data/Constants";
import ScheduleDoctor from "../components/ScheduleDoctor";
export default function PatientStep1({
  setStep,
  id,
}: {
  setStep: Dispatch<React.SetStateAction<number>>;
  id: string | undefined
}) {
  const [doctor, setDoctor] = useState<Doctor>({} as Doctor);

  useEffect(() => {
    // Definir la función asíncrona
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${API_URL}/usuarios/usuario/${id}`);
        const data = await response.json();
        setDoctor(data.usuario); // Actualizar el estado con los datos
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Llamar a la función asíncrona
    fetchDoctor();
  }, []); // El arreglo vacío asegura que solo se ejecute al montar el componente

  return (
    <>
    <div className="bg-bgPatient h-screen">
      <div className="h-screen grid grid-cols-5 grid-rows-6 gap-2">
        <div className="bg-white col-span-3 row-span-5 col-start-2 row-start-1 grid grid-cols-3 grid-rows-4 gap-2 mt-10">
          <div className="row-span-3 m-5 border-r border-gray-200">
            <div className="m-5 rounded-ful">
              <button className="" disabled>
                <Icon path={mdiArrowLeft} size={1} />
              </button>
            </div>
            <ScheduleDoctor key={doctor.id} doctor={doctor}/>
          </div>
          <div className="col-span-2 row-span-3">
            <h3 className="m-10 font-bold"> Select Date and Time</h3>
            <CalendarPatient />
            <p className="m-4 text-[16px]">Thursday, 8th November</p>
            <div className="grid grid-cols-5 gap-4 p-4">
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">10:30am</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">11:30am</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">02:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">03:00pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">03:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">04:30pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">05:00pm</p>
              </div>
              <div className="h-full border border-gray-500 rounded hover:bg-blue-gray-100">
                <p className="p-2 text-center">05:30pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-6 justify-items-end">
          <a className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800 grid cursor-pointer" onClick={() => setStep(2)}>Next</a>
        </div>
        
      </div>
    </div>


    </>
  )
}