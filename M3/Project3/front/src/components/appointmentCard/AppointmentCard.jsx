import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({ id, date, time, status, description }) => {
  return (
    <div className={styles.container}>
      <span>Día: {date}</span>
      <span>Hora: {time}</span>
      <span>Descripción: {description}</span>
      <span>Status: {status}</span>
    </div>
  );
};

export default AppointmentCard;
