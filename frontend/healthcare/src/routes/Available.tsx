import Header from "../layouts/Header";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);


export default function Available() {

  return (
    <Header>
      <div>
      <Calendar
        localizer={localizer}
         startAccessor="start"
         endAccessor="end"
      />
      </div>
    </Header>
  );
  
}