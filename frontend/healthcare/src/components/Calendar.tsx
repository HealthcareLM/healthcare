import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleMonthChange = (direction: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(prevDate.getMonth() + direction);
      return newDate;
    });
    setSelectedDay(null);
  };

  const generateDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const prevMonthDays = new Date(year, month, 0).getDate();
    const startPaddingDays = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

    const days = [];
    for (let i = startPaddingDays; i > 0; i--) {
      days.push({ day: prevMonthDays - i + 1, isCurrentMonth: false });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, isCurrentMonth: true });
    }

    const endPaddingDays = (7 - (days.length % 7)) % 7;
    for (let i = 1; i <= endPaddingDays; i++) {
      days.push({ day: i, isCurrentMonth: false });
    }

    return days;
  };

  const renderDay = (day: number, isCurrentMonth: boolean) => (
    <div
      onClick={() => isCurrentMonth && setSelectedDay(selectedDay === day ? null : day)}
      className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded-full 
        ${
          selectedDay === day && isCurrentMonth
            ? "bg-cyan-600 text-white"
            : isCurrentMonth
            ? "hover:bg-cyan-600 hover:text-white text-black"
            : "text-gray-400"
        }`}
    >
      <p className="text-xs font-medium">{day}</p>
    </div>
  );

  const days = generateDays();

  return (
    <div className="w-full h-full bg-light_gray rounded-lg px-4 py-3">
      <div className="px-4 flex items-center justify-between">
        <span className="text-lg font-medium text-black">
          {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <div className="flex items-center">
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button
            aria-label="calendar forward"
            onClick={() => handleMonthChange(1)}
            className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800"
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
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
            {Array.from({ length: days.length / 7 }).map((_, weekIdx) => (
              <tr key={weekIdx}>
                {days.slice(weekIdx * 7, weekIdx * 7 + 7).map(({ day, isCurrentMonth }, idx) => (
                  <td key={idx}>
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
