"use client";

import React, { useState } from "react";

interface CalendarProps {
  initialDate?: Date;
  // Removed onDateSelect prop since selection is disabled
}

const CalDaysPassed: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  // Removed onDateSelect parameter
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  // Removed selectedDate state since selection is disabled

  // Day and month names
  const dayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Navigate to previous month
  const goToPrevMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  // Navigate to next month
  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  // Removed handleDateClick function since selection is disabled

  // Generate calendar days
  const generateCalendarDays = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    // Get first day of month (adjusting for Monday as first day)
    const firstDay = new Date(year, month, 1);
    let startingDay = firstDay.getDay() - 1; // Adjust Sunday from 0 to position 6
    if (startingDay < 0) startingDay = 6;

    // Get last day of month
    const lastDay = new Date(year, month + 1, 0).getDate();

    // Get last day of previous month
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    const today = new Date();
    const isCurrentMonth =
      today.getMonth() === month && today.getFullYear() === year;

    const days = [];

    // Add previous month days
    for (let i = 0; i < startingDay; i++) {
      const day = prevMonthLastDay - startingDay + i + 1;
      const date = new Date(year, month - 1, day);
      days.push({
        date,
        day,
        isCurrentMonth: false,
        isToday: false,
        isBeforeToday: true,
      });
    }

    // Add current month days
    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        day,
        isCurrentMonth: true,
        isToday: isCurrentMonth && day === today.getDate(),
        isBeforeToday: isCurrentMonth && day < today.getDate(),
      });
    }

    // Fill remaining slots with next month days
    const totalDaysNeeded = 42; // 6 rows * 7 columns
    const remainingDays = totalDaysNeeded - days.length;

    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({
        date,
        day,
        isCurrentMonth: false,
        isToday: false,
        isBeforeToday: false,
      });
    }

    return days;
  };

  // Removed isDateSelected function since selection is disabled

  // Format current month and year
  const formattedMonthYear = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  // Generate calendar days
  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full mx-auto bg-white rounded-sm overflow-hidden">
      
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 xl:gap-0.5 bg-zinc-100 dark:bg-zinc-900">
        {/* Day headers */}
        {dayNames.map((day) => (
          <div
            key={day}
            className="bg-zinc-50 dark:bg-zinc-900 text-center py-1 text-xs font-medium text-zinc-400 dark:text-zinc-600"
          >
            {day.substring(0, 3)}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((dayInfo, idx) => {
          // base bg/text depending on light/dark
          const baseBg = dayInfo.isCurrentMonth
            ? "bg-rose-100 dark:bg-zinc-100"
            : "bg-zinc-200 dark:bg-zinc-800";

          const baseText = dayInfo.isCurrentMonth
            ? "text-rose-300 dark:text-zinc-100 text-xs"
            : "text-zinc-200 dark:text-zinc-800 text-xs";

          // override for past/future/today/selected
          let specialBg = "";
          let specialText = "";

          if (dayInfo.isBeforeToday && dayInfo.isCurrentMonth) {
            specialBg = "bg-rose-100 dark:bg-zinc-700";
            specialText = "text-rose-100 dark:text-zinc-700 text-xs";
          } else if (!dayInfo.isBeforeToday && dayInfo.isCurrentMonth) {
            specialBg = "bg-rose-900 dark:bg-zinc-500";
            specialText = "text-rose-900 dark:text-zinc-500 text-xs";
          }

          if (dayInfo.isToday)
            (specialBg = "bg-rose-600 dark:bg-yellow-500"),
              (specialText = "text-blue-50 dark:text-blue-900");
          
          // Removed isDateSelected condition since selection is disabled

          return (
            <div
              key={idx}
              className={`relative h-1 p-1.5  ${specialBg || baseBg} ${
                specialText || baseText
              }`}
              // Removed onClick handler to disable selection
            >
              <div
                className={`absolute top-1 right-1 w-2 h-1.5 flex items-center justify-center text-[4px]
          ${
            dayInfo.isToday
              ? "bg-rose-600 text-white text-[6px] font-medium dark:bg-yellow-500 dark:text-yellow-500 rounded-full text-xs"
              : ""
          }
        `}
              >
                {dayInfo.day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalDaysPassed;