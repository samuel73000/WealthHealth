import "./DateTimePicker.css";
import { useState, useRef , useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faHouse,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export default function DateTimePicker(props) {
  const calendarRef = useRef(null);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] =useState(null);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const year = currentDate
    ? currentDate.getFullYear()
    : new Date().getFullYear();
  const month = currentDate ? currentDate.getMonth() : new Date().getMonth();
  const yearsList = generateYearsList(year, 1930); // Liste des années de 1950 à l'année actuelle
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

  // Fonction qui retourne les jours d'un mois donné
  function getDaysInMonth(year, month) {
    const days = [];
    const date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  // Fonction pour récupérer les derniers jours du mois précédent
  function getLastDaysOfPreviousMonth(year, month, count) {
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousYear = month === 0 ? year - 1 : year;
    const daysInPreviousMonth = new Date(
      previousYear,
      previousMonth + 1,
      0
    ).getDate();
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

  // Calcul du premier jour du mois (pour savoir combien de jours du mois précédent afficher)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const adjustedFirstDay = (firstDayOfMonth === 0 ? 7 : firstDayOfMonth) - 1;
  const previousMonthDays = getLastDaysOfPreviousMonth(
    year,
    month,
    adjustedFirstDay
  );

  let allDays = [...previousMonthDays, ...days];

  // S'assurer d'avoir exactement 35 jours affichés (5 lignes max)
  while (allDays.length > 35) {
    allDays.pop(); // Supprime les derniers jours du mois en trop
  }
  while (allDays.length < 35) {
    allDays.push(new Date(year, month + 1, allDays.length - days.length + 1)); // Ajoute des jours du mois suivant si besoin
  }

  // Fonction pour passer au mois suivant
  function nextMonth() {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  }

  // Fonction pour passer au mois précédent
  function previousMonth() {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  }

  // Fonction pour revenir à la date actuelle
  function dateIsToday() {
    setCurrentDate(today);
  }

  // Générer la liste des années disponibles
  function generateYearsList(startYear, endYear) {
    const years = [];
    for (let year = startYear; year >= endYear; year--) {
      years.push(year);
    }
    return years;
  }

  useEffect(() => {
    // Fonction pour fermer le calendrier lorsqu'on clique en dehors
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setOpenCalendar(false);
      }
    }

    if (openCalendar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCalendar]);

  return (
    <section className='container-all-dateTimePicker'>
      <TextField
      error={props.error}
      sx={{ width: '100%'}}
        id={props.id}
        label={props.label}
        variant='outlined'
        value={selectedDate ? selectedDate.toLocaleDateString("en-US") : ""}
        onClick={() => setOpenCalendar(!openCalendar)}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position='start'></InputAdornment>,
          },
        }}
      />
      {openCalendar && (
        <div ref={calendarRef} className='container-dateTimePicker'>
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
              <FontAwesomeIcon
                icon={faSortDown}
                className='icon-down-header-dateTimePicker'
              />
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
              {currentDate.getFullYear()}{" "}
              <FontAwesomeIcon
                icon={faSortDown}
                className='icon-down-header-dateTimePicker'
              />
            </p>
            {openYear && (
              <ul className='year-list-dateTimePicker'>
                {yearsList.map((yearItem, index) => (
                  <li
                    className='li-month-list-dateTimePicker'
                    key={index}
                    onClick={() => {
                      setCurrentDate(new Date(yearItem, month, currentDay));
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
                  day.getMonth() === month ? "" : "outside-month"
                }`}
                key={index}
                style={{
                  backgroundColor:
                    day.getDate() === currentDay && day.getMonth() === month
                      ? "lightblue" // Sélectionné
                      : day.getMonth() === month
                      ? "#f9f9f9" // Mois courant
                      : "#dfdfdf", // Autres mois
                  fontSize: "0.6em",
                }}
                onClick={() => {
                  setSelectedDate(
                    new Date(day.getFullYear(), day.getMonth(), day.getDate())
                  );
                  setOpenCalendar(false); // Fermer après sélection
                }}>
                {day.getDate()}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
