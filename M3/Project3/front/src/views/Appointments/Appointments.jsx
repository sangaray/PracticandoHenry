// import { useState } from "react";
// import appointments from "../../helpers/appointmentsDB";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import styles from "./Appointments.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserAppointments } from "../../redux/userSlice";

// const GET_APPOINTMENTS_URL = "http://localhost:3000/appointments";

const GET_USERBYID_URL = "http://localhost:3000/users/";
const CANCEL_URL = "http://localhost:3000/appointments/cancel/";

const Appointments = () => {
  // const [appointmentsList, setAppointmentsList] = useState([]);

  const login = useSelector((state) => state.actualUser.userData.login);
  console.log(login);

  const navigate = useNavigate();
  useEffect(() => {
    !login && navigate("/");
  }, [login]);

  // Traer el id del usuario desde el estado global
  const actualUserId = useSelector(
    (state) => state.actualUser.userData.user.id
  );

  // Despachar la acción
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(GET_USERBYID_URL + actualUserId)
      .then((response) => response.data)
      .then((actualUser) =>
        dispatch(setUserAppointments(actualUser.appointments))
      )
      .catch((error) => console.log(error.message));
  }, [actualUserId, dispatch]);

  const appointments = useSelector(
    (state) => state.actualUser.userAppointments
  );

  const handleAppointmentCancel = (appointmentId) => {
    console.log("Cancelando cita", appointmentId);
    axios
      .put(CANCEL_URL + appointmentId)
      .then((response) => response.data)
      .then((data) => {
        axios
          .get(GET_USERBYID_URL + actualUserId)
          .then((response) => response.data)
          .then((actualUser) =>
            dispatch(setUserAppointments(actualUser.appointments))
          )
          .catch((error) => console.log(error.message));
      })
      .catch((error) => `Error al cancelar: ${error?.response.data.message}`);
  };

  // Ordenar los appointments por fecha y hora
  const sortedAppointments = [...appointments].sort((a, b) => {
    // Convertir las fechas y horas de cadenas de texto a objetos Date
    const [dayA, monthA, yearA] = a.date.split("-"); // "dd-mm-yyyy"
    const [dayB, monthB, yearB] = b.date.split("-");
    const dateA = new Date(`${yearA}-${monthA}-${dayA}T${a.time}`); // "yyyy-mm-ddTHH:mm"
    const dateB = new Date(`${yearB}-${monthB}-${dayB}T${b.time}`);

    // Comparar las fechas y horas
    return dateA - dateB; // Orden ascendente
  });

  return (
    <>
      <h2>Tus Turnos</h2>
      <div className={styles.container}>
        {appointments.length ? (
          sortedAppointments.map((appointment) => (
            <div className={styles.itemsContainer} key={appointment.id}>
              <AppointmentCard
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                status={appointment.status}
                description={appointment.description}
                handleAppointmentCancel={handleAppointmentCancel}
              />
            </div>
          ))
        ) : (
          <h3>No tienes turnos registrados</h3>
        )}
      </div>
    </>
  );
};

export default Appointments;
