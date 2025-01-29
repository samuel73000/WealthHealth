import "./DateTimePicker.css";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faHouse,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

export default function DateTimePicker() {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [openMonth, setOpenMonth] = React.useState(false);
  const [openYear, setOpenYear] = React.useState(false);
  const year = currentDate.getFullYear();
  const yearsList = generateYearsList(year, 1930); // Liste des années de 1950 à l'année actuelle
  const month = currentDate.getMonth();
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const monthsOfYear = [
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

  function nextMonth() {
    // function pour passer au mois suivant
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1); // Passer au mois suivant
      return newDate;
    });
  }
  function previousMonth() {
    // function pour revenir au mois précédent
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1); // Reculer d'un mois
      return newDate;
    });
  }

  function dateIsToday() {
    // function pour revenir à la date d'aujourd'hui
    setCurrentDate(today);
  }

  function generateYearsList(startYear, endYear) {
    // function pour cree la liste des années (pour la slection des l'années)
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }

  return (
    <section className='container-dateTimePicker'>
      <div className='header-dateTimePicker'>
        <FontAwesomeIcon
          icon={faCaretLeft}
          onClick={previousMonth}
          className='icon-header-dateTimePicker'
        />
        <FontAwesomeIcon
          icon={faHouse}
          onClick={dateIsToday}
          className='icon-header-dateTimePicker'
        />
        <p
          className='month-header-dateTimePicker'
          onClick={() => setOpenMonth(!openMonth)}>
          {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
          <FontAwesomeIcon icon={faSortDown} />
        </p>
        {openMonth && (
          <ul className='month-list-dateTimePicker'>
            {monthsOfYear.map((month, index) => (
              <li
                className='li-month-list-dateTimePicker'
                key={index}
                onClick={() => {
                  setCurrentDate(new Date(year, index));
                  setOpenMonth(false);
                }}>
                {month}
              </li>
            ))}
          </ul>
        )}

        <p
          className='month-header-dateTimePicker'
          onClick={() => setOpenYear(!openYear)}>
          {currentDate.getFullYear()} <FontAwesomeIcon icon={faSortDown} />
        </p>
        {openYear && (
          <ul className='year-list-dateTimePicker'>
            {yearsList.map((yearItem, index) => (
              <li
                className='li-month-list-dateTimePicker'
                key={index}
                onClick={() => {
                  setCurrentDate(new Date(yearItem, month, currentDay)); // Mettre à jour l'année en conservant le mois et le jour actuels
                  setOpenYear(false);
                }}>
                {yearItem}
              </li>
            ))}
          </ul>
        )}
        <FontAwesomeIcon
          icon={faCaretRight}
          onClick={nextMonth}
          className='icon-header-dateTimePicker'
        />
      </div>

      <div className='container-days-dateTimePicker'>
        {daysOfWeek.map((day) => (
          <div className='days-week-number-dateTimePicker' key={day}>
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
