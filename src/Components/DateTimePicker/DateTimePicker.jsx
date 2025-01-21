import "./DateTimePicker.css";
import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft ,faCaretRight ,faHouse } from '@fortawesome/free-solid-svg-icons'


export default function DateTimePicker() {

return(
    <section className="container-dateTimePicker">
        <div className="header-dateTimePicker">
        <FontAwesomeIcon icon={faCaretLeft} />
        <FontAwesomeIcon icon={faHouse} />
        <p>janvier</p>
        <p>2025</p>
        <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="container-days-dateTimePicker" id="container-days-dateTimePicker-1">
            <p className="days-dateTimePicker">Dim</p>
            <p className="days-dateTimePicker">Lun</p>
            <p className="days-dateTimePicker">Mar</p>
            <p className="days-dateTimePicker">Mer</p>
            <p className="days-dateTimePicker">Jeu</p>
            <p className="days-dateTimePicker">Ven</p>
            <p className="days-dateTimePicker">Sam</p>
        </div>

        <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">1</p>
            <p className="days-dateTimePicker">2</p>
            <p className="days-dateTimePicker">3</p>
            <p className="days-dateTimePicker">4</p>
            <p className="days-dateTimePicker">5</p>
            <p className="days-dateTimePicker">6</p>
            <p className="days-dateTimePicker">7</p>
        </div>

        <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">8</p>
            <p className="days-dateTimePicker">9</p>
            <p className="days-dateTimePicker">10</p>
            <p className="days-dateTimePicker">11</p>
            <p className="days-dateTimePicker">12</p>
            <p className="days-dateTimePicker">13</p>
            <p className="days-dateTimePicker">14</p>
        </div>

        <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">15</p>
            <p className="days-dateTimePicker">16</p>
            <p className="days-dateTimePicker">17</p>
            <p className="days-dateTimePicker">18</p>
            <p className="days-dateTimePicker">19</p>
            <p className="days-dateTimePicker">20</p>
            <p className="days-dateTimePicker">21</p>
        </div>

        <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">22</p>
            <p className="days-dateTimePicker">23</p>
            <p className="days-dateTimePicker">24</p>
            <p className="days-dateTimePicker">25</p>
            <p className="days-dateTimePicker">26</p>
            <p className="days-dateTimePicker">27</p>
            <p className="days-dateTimePicker">28</p>
        </div>

        <div className="container-days-dateTimePicker">
            <p className="days-dateTimePicker">29</p>
            <p className="days-dateTimePicker">30</p>
            <p className="days-dateTimePicker">31</p>
            <p className="days-dateTimePicker">1</p>
            <p className="days-dateTimePicker">2</p>
            <p className="days-dateTimePicker">3</p>
            <p className="days-dateTimePicker">4</p>
        </div>


    </section>
)

}