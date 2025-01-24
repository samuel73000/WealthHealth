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

  function getDaysInMonth(year, month) {
    const days = [];
    const date = new Date(year, month, 1); // Premier jour du mois

    while (date.getMonth() === month) {
      days.push(new Date(date)); // Ajouter le jour au tableau
      date.setDate(date.getDate() + 1); // Passer au jour suivant
    }

    return days;
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();

  const days = getDaysInMonth(year, month);
  const currentDay = today.getDate();

  return (
    <section className='container-dateTimePicker'>
      <div className='header-dateTimePicker'>
        <FontAwesomeIcon icon={faCaretLeft} />
        <FontAwesomeIcon icon={faHouse} />
        <p>{today.toLocaleString("default", { month: "long" })} <FontAwesomeIcon icon={faSortDown} /></p>
        <p>{today.getFullYear()} <FontAwesomeIcon icon={faSortDown} /></p>
        <FontAwesomeIcon icon={faCaretRight} />
      </div>
      {/* <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">Dim</p>
            <p className="days-dateTimePicker">Lun</p>
            <p className="days-dateTimePicker">Mar</p>
            <p className="days-dateTimePicker">Mer</p>
            <p className="days-dateTimePicker">Jeu</p>
            <p className="days-dateTimePicker">Ven</p>
            <p className="days-dateTimePicker">Sam</p>
        </div> */}
      <div className='container-days-dateTimePicker '>
        {days.map((day) => (
          <p
            className='days-number-dateTimePicker'
            key={day.toISOString()}
            style={{
              background: day.getDate() === currentDay ? "lightblue" : "white",
            }}>
            {day.getDate()}
          </p>
        ))}
      </div>
    </section>
  );
}
