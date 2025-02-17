import { useState } from "react";
// import appointments from "../../helpers/appointmentsDB";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import styles from "./Appointments.module.css";
import { useEffect } from "react";
import axios from "axios";

const GET_APPOINTMENTS_URL = "http://localhost:3000/appointments";

const Appointments = () => {
  const [appointmentsList, setAppointmentsList] = useState([]);

  useEffect(() => {
    axios
      .get(GET_APPOINTMENTS_URL)
      .then((response) => response.data)
      .then((dbData) => setAppointmentsList(dbData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h2>Tus Turnos</h2>
      <div className={styles.container}>
        {appointmentsList.map((appointment) => (
          <div className={styles.itemsContainer} key={appointment.id}>
            <AppointmentCard
              id={appointment.id}
              date={appointment.date}
              time={appointment.time}
              status={appointment.status}
              description={appointment.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Appointments;
