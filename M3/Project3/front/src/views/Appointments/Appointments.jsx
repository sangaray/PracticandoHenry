import { useState } from "react";
import appointments from "../../helpers/appointmentsDB";
import AppointmentCard from "../../components/appointmentCard/AppointmentCard";
import styles from "./Appointments.module.css";

const Appointments = () => {
  const [appointmentsList, setAppointmentsList] = useState(appointments);

  return (
    <>
      <h2>Tus Turnos</h2>
      <div className={styles.container}>
        {appointments.map((appointment) => (
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
