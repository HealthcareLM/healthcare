import Header from "../layouts/Header";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useAuth } from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Cita, Doctor } from "../types/Usuarios";
import { API_URL } from "../data/Constants";



export default function Available() {
  
  const localizer = momentLocalizer(moment);
  const components = {
    event: (props: {title: string}) => {
      // console.log(props);
      return <div>{props.title}</div>
    }
  }

  const { user } = useAuth()
  const [ citaCalendar, setCitaCalendar ] = useState<Cita[]>([])


  const nameUser = async(id: string) => {
    try {
      const responseDoc = await fetch(`${API_URL}/usuarios/usuario/${id}`)
      const docJSON = await responseDoc.json()
      // setPatientName(docJSON.nombre)

      // console.log(docJSON);
      
      console.log(docJSON.usuario.nombre);
      
      return docJSON.usuario.nombre;

    } catch (error) {
        throw new Error("Error al recuperar citas por usuario")
    }
  }

  useEffect(() => {
    const CalendarData = async() => {
      if (user.id) {
        try {
          const response = await fetch(`${API_URL}/citas/citas/usuario/${user.id}`)
          
          const dataJSON = await response.json()
        
          setCitaCalendar(dataJSON.citas)
  
        } catch (error) {
          throw new Error("Error al recuperar citas por usuario")
        }
      }
      
    }
    CalendarData()
  }, [user.id]) // Aseguranos de pasar siempre el user.id


  interface Event {
    start: Date,
    end: Date,
    title: string
  }

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const promiseResolve = await Promise.all(
        citaCalendar.map(async (cita) => {
          const nombrePaciente = await nameUser(cita.patientId); // Resolviendo la promesa
          return {
            start: moment(`${cita.fecha}T${cita.hora}`).toDate(),
            end: moment(`${cita.fecha}T${cita.hora}`).add(30, 'minutes').toDate(),
            title: `Paciente: ${nombrePaciente}`,
          };
        })
      );
      setEvents(promiseResolve); // Suponiendo que tienes un estado 'events'
    };
  
    if (citaCalendar.length > 0) {
      fetchEvents();
    }
  }, [citaCalendar]); // Dependencia de citas

  // const events = citaCalendar.map( cita => ({
  //       start: moment(`${cita.fecha}T${cita.hora}`).toDate(),
  //       end: moment(`${cita.fecha}T${cita.hora}`).add(30,'minutes').toDate(),
  //       title: `Paciente: ${ nameUser(cita.patientId) }`
  //   }))

    // console.log(events);
    

  //  [z
  //   {
  //     start: moment('2024-11-18T12:00:00').toDate(),
  //     end: moment('2 24-11-18T13:00:00').toDate(),
  //     title: "Cita 1"
  //   }//,
    // {
    //   start: moment('2024-11-18T14:00:00').toDate(),
    //   end: moment('2024-11-18T15:00:00').toDate(),
    //   title: "Cita 2"
    // },
    // {
    //   start: moment('2024-11-19T09:00:00').toDate(),
    //   end: moment('2024-11-19T10:00:00').toDate(),
    //   title: "Cita 3"
    // }
  // ]

  return (
    <>
      <div className="flex gap-6 ">
        <div className="h-[48rem] w-[75%] border rounded-md p-4">
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            events={events}
            views={["month", "week", "day", "agenda"]}
            min={moment('2024-01-01T08:00:00').toDate()}
            max={moment('2024-01-01T21:00:00').toDate()}
            formats={{
                // dayHeaderFormat : date => { return moment(date).format("dddd MMM YYYY")}
                dayHeaderFormat : date => { return moment(date).format("MMMM dddd, YYYY")}
              }
            }
            components={ components }
            
          />
        </div>

        <div className="w-[25%] border rounded-md p-4">
          <h2 className="mb-3 font-semibold">Upcoming</h2>
          <hr />
          <h3 className="mt-5 font-normal text-[1rem]">Today</h3>
            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 1</h1>
              <div className="flex justify-between items-center">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px] ">Nov 01, 2022</p>
              </div>
            </div>

            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 2</h1>
              <div className="flex justify-between">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px]">Nov 01, 2022</p>
              </div>
            </div>

            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 3</h1>
              <div className="flex justify-between">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px]">Nov 01, 2022</p>
              </div>
            </div>


          <hr className="mt-4"/>
          <h3 className="mt-5 font-normal text-[1rem]">Tomorrow</h3>
            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 1</h1>
              <div className="flex justify-between">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px]">Nov 01, 2022</p>
              </div>
            </div>

            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 2</h1>
              <div className="flex justify-between">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px]">Nov 01, 2022</p>
              </div>
            </div>

            <div className="bg-light_gray p-5 mt-3 border rounded-md">
              <h1 className="font-semibold">Sit at clinic 3</h1>
              <div className="flex justify-between">
                <p className="text-gray_2 text-[14px]">10:00am - 11:00am</p>
                <p className="text-gray_2 text-[12px]">Nov 01, 2022</p>
              </div>
            </div>
        </div>
      </div>
    </>
  );
  
}