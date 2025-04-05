import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../App.css";
import styles from "./AppointmentForm.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm(props) {
  // HOOKS y ESTADOS GLOBALES
  const navigate = useNavigate();
  const userId = useSelector((state) => state.actualUser?.userData.user.id);

  // REDIRIGIMOS A "/" SI NO HAY USUARIO LOGUEADO
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  // ESTADOS LOCALES
  const initialState = {
    date: "",
    hours: "09",
    minutes: "00",
    description: "",
  };

  const [appointment, setAppointment] = useState(initialState);
  const [errors, setErrors] = useState({
    date: "Debe ingresar una fecha",
  });

  // FUNCIONES AUXILIARES
  // Convertir fecha al formato "dd-mm-yyyy"
  const formatDateToDDMMYYYY = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}-${month}-${year}`; // Devuelve "dd-mm-yyyy"
  };

  // Validar si la fecha es un fin de semana
  const isWeekend = (date) => {
    const [day, month, year] = date.split("-");
    const formattedDate = new Date(`${year}-${month}-${day}`); // Convertir a formato ISO
    const dayOfWeek = formattedDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 0: domingo, 6: sábado
  };

  // VALIDACIÓN
  const validateAppointment = ({ date, hours, minutes, description }) => {
    const errors = {};
    if (!date) {
      errors.date = "Ingresar fecha";
    } else {
      const formattedDate = formatDateToDDMMYYYY(date); // Convertir al formato "dd-mm-yyyy"
      if (isWeekend(formattedDate)) {
        errors.date = "La fecha seleccionada es un fin de semana";
      }
    }

    if (!description) {
      errors.description = "Ingresar descripción";
    } else if (description.length < 5) {
      errors.description = "Descripción de al menos 5 caracteres";
    } else if (description.length > 25) {
      errors.description = "Descripción de no más de 25 caracteres";
    }

    return errors;
  };

  // HANDLERS
  const handleChange = (event) => {
    const { value, name } = event.target;
    const updatedAppointment = {
      ...appointment,
      [name]: value,
    };
    setAppointment(updatedAppointment);
    setErrors(validateAppointment(updatedAppointment));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      date: formatDateToDDMMYYYY(appointment.date), // Convertir al formato "dd-mm-yyyy"
      time: `${appointment.hours}:${appointment.minutes}`,
      description: appointment.description,
      userId,
    };
    axios
      .post(POSTAPPOINTMENT_URL, newAppointment)
      .then(({ data }) => {
        alert(
          `Ha sido creada la reserva: Fecha ${data.date}, hora ${data.time}`
        );
        setAppointment(initialState);
        navigate("/appointments");
      })
      .catch((error) => {
        alert(`Error: ${error.response.data.error}`);
      });
  };

  // GENERAR SELECT HORAS Y MINUTOS VÁLIDOS
  const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
  const validMinutes = ["00", "30"];

  // RESTRINGIR FECHAS EN INPUT DE FECHA
  function getTomorrow() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  }

  function getFourteenDaysAhead() {
    const today = new Date();
    const fourteenDaysAhead = new Date(today);
    fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
    return fourteenDaysAhead.toISOString().split("T")[0];
  }

  // RENDERIZADO
  return (
    <div className={styles.form}>
      <h2>Nueva Reserva</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Fecha: </label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrow()}
            max={getFourteenDaysAhead()}
            value={appointment.date}
            onChange={handleChange}
          />
          {errors.date && <span style={{ color: "red" }}>{errors.date}</span>}
        </div>

        <div>
          <label htmlFor="time">Horario: </label>
          <select
            id="hours"
            name="hours"
            value={appointment.hours}
            onChange={handleChange}>
            {validHours.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select
            id="minutes"
            name="minutes"
            value={appointment.minutes}
            onChange={handleChange}>
            {validMinutes.map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="description">Descripción: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={appointment.description}
            placeholder="Ingresar descripción..."
            onChange={handleChange}
          />
          {errors.description && (
            <span style={{ color: "red" }}>{errors.description}</span>
          )}
        </div>

        <button
          className={styles.buttonSubmit}
          type="submit"
          disabled={Object.keys(errors).length > 0}>
          Enviar
        </button>
      </form>
    </div>
  );
}
