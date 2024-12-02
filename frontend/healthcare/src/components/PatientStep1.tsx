import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import CalendarPatient from "./CalendarPatient";
import { Dispatch, useEffect, useState } from "react";
import { Doctor } from "../types/Usuarios";
import { API_URL } from "../data/Constants";
import ScheduleDoctor from "../components/ScheduleDoctor";
import { useCita } from '../hooks/useCita';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';


export default function PatientStep1({
  id,
  setStep
}: {
  id: string | undefined,
  setStep: Dispatch<React.SetStateAction<number>>
}) {
  const [doctor, setDoctor] = useState<Doctor>({} as Doctor);
  const [horarios, setHorarios] = useState<string[]>([])

  const { user } = useAuth()
  const { cita, setCita } = useCita()

  useEffect(() => {
    // Definir la función asíncrona
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${API_URL}/usuarios/usuario/${id}`);
        const data = await response.json();
        setDoctor(data.usuario); // Actualizar el estado con los datos
        generarHorarios(data.usuario.horario)
        setCita({
          ...cita,
          patientId: user.id,
          doctorId: id as string
        })
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    // Llamar a la función asíncrona
    fetchDoctor();
  }, []); // El arreglo vacío asegura que solo se ejecute al montar el componente

  function generarHorarios(horario: string, intervalo: number = 30) {
    const [inicio, fin] = horario.split(' - ');
  
    const convertirAHoras = (hora: string) => {
      const [h, m] = hora.split(':').map(Number);
      return h * 60 + m; // Convertir a minutos
    };
  
    const convertirAFormato = (minutos: number) => {
      const h = Math.floor(minutos / 60);
      const m = minutos % 60;
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    };
  
    const inicioEnMinutos = convertirAHoras(inicio);
    const finEnMinutos = convertirAHoras(fin);
  
    const horarios: string[] = [];
    for (let t = inicioEnMinutos; t < finEnMinutos; t += intervalo) {
      horarios.push(convertirAFormato(t));
    }
  
    setHorarios(horarios)
  }

  return (
    <>
    <div className="bg-bgPatient w-full">
      <div className=" flex flex-col w-[60%] mx-auto pb-10">
        <div className="bg-white flex gap-2 mt-10 mb-4">
          <div className="m-2 border-r border-gray-200 w-2/5">
            <div className="m-5 rounded-ful">
              <Link to={'/dashboard'}>
                <Icon path={mdiArrowLeft} size={1} />
              </Link>
            </div>
            <ScheduleDoctor key={doctor.id} doctor={doctor}/>
          </div>
          <div className="w-3/5">
            <h3 className="my-10 mx-4 font-bold"> Select Date and Time</h3>
            <CalendarPatient/>
            <p className="m-4 text-[16px]">Thursday, 8th November</p>
            <div className="grid grid-cols-5 gap-4 p-4">
              {horarios.map(hora => (
                <div className={`w-full border border-gray-500 rounded hover:bg-blue-gray-100 cursor-pointer ${hora === cita.hora ? 'bg-primary text-white' : ''}`} onClick={() => setCita({...cita, hora})}>
                  <p className="p-2 text-center block text-sm">{hora}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-6 justify-items-end">
          <a className="text-base font-medium text-white px-[75px] py-[14px] bg-primary rounded-md hover:bg-cyan-800 grid cursor-pointer" onClick={() => setStep(2)} to={`/schedule/${doctor.id}`}>Next</a>
        </div>
        
      </div>
    </div>


    </>
  )
}