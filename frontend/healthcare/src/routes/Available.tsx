import Header from "../layouts/Header";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";



export default function Available() {
  
  const localizer = momentLocalizer(moment);
  const components = {
    event: props => {
      // console.log(props);
      return <div className="">{props.title}</div>
    }
  }

  const events = [
    {
      start: moment('2024-11-18T12:00:00').toDate(),
      end: moment('2024-11-18T13:00:00').toDate(),
      title: "Cita 1"
    },
    {
      start: moment('2024-11-18T14:00:00').toDate(),
      end: moment('2024-11-18T15:00:00').toDate(),
      title: "Cita 2"
    },
    {
      start: moment('2024-11-19T09:00:00').toDate(),
      end: moment('2024-11-19T10:00:00').toDate(),
      title: "Cita 3"
    }
  ]

  return (
    <Header>
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
    </Header>
  );
  
}