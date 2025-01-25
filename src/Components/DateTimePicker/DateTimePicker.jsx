import "./DateTimePicker.css";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faHouse,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { NextPlan } from "@mui/icons-material";

export default function DateTimePicker() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const days = getDaysInMonth(year, month);
  const currentDay = currentDate.getDate();
  const today = new Date();

  function getDaysInMonth(year, month) {
    const days = [];
    const date = new Date(year, month, 1); // Premier jour du mois

    while (date.getMonth() === month) {
      days.push(new Date(date)); // Ajouter le jour au tableau
      date.setDate(date.getDate() + 1); // Passer au jour suivant
    }

    return days;
  }

  function getLastDaysOfPreviousMonth(year, month, count) {
    const previousMonth = month === 0 ? 11 : month - 1; // Décembre si on est en janvier
    const previousYear = month === 0 ? year - 1 : year;
    const daysInPreviousMonth = new Date(
      previousYear,
      previousMonth + 1,
      0
    ).getDate(); // Nombre total de jours du mois précédent

    const lastDays = [];
    for (
      let i = daysInPreviousMonth - count + 1;
      i <= daysInPreviousMonth;
      i++
    ) {
      lastDays.push(new Date(previousYear, previousMonth, i));
    }

    return lastDays;
  }

 

  // Calcul des jours vides au début
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // Jour de la semaine (0 = Dimanche, 1 = Lundi, ...)
  const adjustedFirstDay = (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) - 1; // Ajuster pour que lundi = 0
  const previousMonthDays = getLastDaysOfPreviousMonth(
    year,
    month,
    adjustedFirstDay
  );

  // Combine les jours du mois précédent et les jours actuels
  const allDays = [...previousMonthDays, ...days];





  function nextMonth() { // function pour passer au mois suivant
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1); // Passer au mois suivant
      return newDate;
    });
  }
  function previousMonth() { // function pour revenir au mois précédent
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1); // Reculer d'un mois
      return newDate;
    });
  }

  function dateIsToday() { // function pour revenir à la date d'aujourd'hui
    setCurrentDate(today);
  }





//   function allMonths() {
//     const months = [];
//     setCurrentDate((prevDate) => {
//       for (let i = 0; i < 12; i++) {
//         const newDate = new Date(prevDate);
//         newDate.setMonth(prevDate.getMonth() + i);
//         months.push(newDate.toLocaleString("default", { month: "long" }));
//       }
//       return prevDate; // On retourne l'état inchangé (pas nécessaire de changer la date ici)
//     });
//   }



  return (
    <section className='container-dateTimePicker'>
      <div className='header-dateTimePicker'>
        <FontAwesomeIcon icon={faCaretLeft} onClick={previousMonth} />
        <FontAwesomeIcon icon={faHouse} onClick={dateIsToday} />
        <p>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          <FontAwesomeIcon icon={faSortDown} />
        </p>
        <p>
          {currentDate.getFullYear()} <FontAwesomeIcon icon={faSortDown}  />
        </p>
        <FontAwesomeIcon icon={faCaretRight} onClick={nextMonth} />
      </div>

      <div className='container-days-dateTimePicker'>
        {daysOfWeek.map((day) => (
          <div className='days-number-dateTimePicker' key={day}>
            {day}
          </div>
        ))}
        {allDays.map((day, index) => (
          <div
            className={`days-number-dateTimePicker ${
              day.getMonth() === month ? "" : "previous-month"
            }`}
            key={index}
            style={{
              background:
                day.getDate() === currentDay && day.getMonth() === month
                  ? "lightblue"
                  : "white",
              color: day.getMonth() === month ? "black" : "gray", // Grisé pour les jours du mois précédent
            }}>
            {day.getDate()}
          </div>
        ))}
      </div>
    </section>
  );
}
