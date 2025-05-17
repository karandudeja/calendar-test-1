"use client";

import React, { useState } from "react";

interface CalendarProps {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
}

const CalDaysPassed: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  // Handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

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

  // Check if a date is selected
  const isDateSelected = (date: Date): boolean => {
    return (
      selectedDate !== null &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Format current month and year
  const formattedMonthYear = `${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  // Generate calendar days
  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Calendar Header */}
      {/* <div className="flex justify-between items-center bg-gray-50 px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          {formattedMonthYear}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={goToPrevMonth}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Prev
          </button>
          <button
            onClick={goToNextMonth}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Next
          </button>
        </div>
      </div> */}

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-px bg-neutral-100 dark:bg-neutral-900">
        {/* Day headers */}
        {dayNames.map((day) => (
          <div
            key={day}
            className="bg-neutral-50 dark:bg-neutral-900 text-center py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400"
          >
            {day.substring(0, 3)}
          </div>
        ))}

        {/* Calendar days */}
        {calendarDays.map((dayInfo, idx) => {
          // base bg/text depending on light/dark
          const baseBg = dayInfo.isCurrentMonth
            ? "bg-neutral-300 dark:bg-neutral-100"
            : "bg-neutral-200 dark:bg-neutral-800";

          const baseText = dayInfo.isCurrentMonth
            ? "text-neutral-300 dark:text-neutral-100 text-xs"
            : "text-neutral-200 dark:text-neutral-800 text-xs";

          // override for past/future/today/selected
          let specialBg = "";
          let specialText = "";

          if (dayInfo.isBeforeToday && dayInfo.isCurrentMonth) {
            specialBg = "bg-neutral-400 dark:bg-neutral-700";
            specialText = "text-neutral-400 dark:text-neutral-700 text-xs";
          } else if (!dayInfo.isBeforeToday && dayInfo.isCurrentMonth) {
            specialBg = "bg-neutral-500 dark:bg-neutral-500";
            specialText = "text-neutral-500 dark:text-neutral-500 text-xs";
          }

          if (dayInfo.isToday)
            (specialBg = "bg-pink-600 dark:bg-yellow-500"),
              (specialText = "text-blue-50 dark:text-blue-900");
          if (isDateSelected(dayInfo.date))
            (specialBg = "bg-blue-100 dark:bg-red-700"),
              (specialText = "text-blue-100 dark:text-blue-800");

          return (
            <div
              key={idx}
              onClick={() => handleDateClick(dayInfo.date)}
              className={`relative min-h-8 p-2  ${specialBg || baseBg} ${
                specialText || baseText
              }`}
            >
              <div
                className={`absolute top-1 right-1 w-6 h-6 flex items-center justify-center text-xs
          ${
            dayInfo.isToday
              ? "bg-pink-600 text-pink-600 dark:bg-yellow-500 dark:text-yellow-500 rounded-full text-xs"
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
