import { useState } from "react";
import { useCita } from "../hooks/useCita";

export default function CalendarPatient() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Estado para el mes y año actual
  const [selectedDay, setSelectedDay] = useState<number | null>(null); // Día seleccionado

  const { cita, setCita } = useCita()

  // Función para cambiar de mes
  const handleMonthChange = (direction: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
    setSelectedDay(null); // Desseleccionar día al cambiar de mes
  };

  // Generar días del mes
  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Calcular días del mes anterior para llenar la primera fila si es necesario
    const prevMonthDays = new Date(year, month, 0).getDate();
    const startPaddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const days = [];
    for (let i = startPaddingDays; i > 0; i--) {
      days.push({ day: prevMonthDays - i + 1, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    // Calcular días del mes siguiente para llenar la última fila
    const endPaddingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= endPaddingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const renderDay = (day: number, isCurrentMonth: boolean) => (
    <div
      onClick={() => {
        isCurrentMonth && setSelectedDay(selectedDay === day ? null : day)
        const fecha = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${day}`
        setCita({
          ...cita,
          fecha: fecha
        })
      }}
      className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full 
        ${
          selectedDay === day && isCurrentMonth
            ? "bg-cyan-600 text-white"
            : isCurrentMonth
            ? "hover:bg-cyan-600 hover:text-white"
            : "text-gray-400"
        }`}
    >
      <p className={`text-xs font-medium ${selectedDay === day ? "text-white" : "text-black"}`}>
        {day}
      </p>
    </div>
  );

  const days = generateDays();

  return (
    <div className="w-full bg-white rounded-lg px-4 py-3">
      {/* Controles del mes */}
      <div className="px-4 flex items-center justify-between">
        <button
          aria-label="calendar backward"
          onClick={() => handleMonthChange(-1)}
          className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24V0H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <span className="text-lg font-medium text-black flex text-center">
          {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
        </span>
        <button
          aria-label="calendar forward"
          onClick={() => handleMonthChange(1)}
          className="focus:text-gray-400 hover:text-gray-400 text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24V0H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>

      {/* Días del mes */}
      <div className="flex items-center justify-between pt-3 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <th key={day}>
                  <div className="w-full flex justify-center">
                    <p className="text-xs font-medium text-center text-[#878787]">{day}</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(days.length / 7) }).map((_, weekIndex) => (
              <tr key={weekIndex}>
                {days.slice(weekIndex * 7, weekIndex * 7 + 7).map(({ day, isCurrentMonth }, idx) => (
                  <td key={idx} className="pt-6">
                    {renderDay(day, isCurrentMonth)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
