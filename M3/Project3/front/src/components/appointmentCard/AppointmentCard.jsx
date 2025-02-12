import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({ id, date, time, status, description }) => {
  const handlerClick = () => {
    alert(`Desea cancelar el turno ${id}`);
  };

  return (
    <div className={styles.container}>
      <span>Día: {date}</span>
      <span>Hora: {time}</span>
      <span>Descripción: {description}</span>
      {status === "Activo" ? (
        <span className={styles.active} onClick={handlerClick}>
          Activo (Cancelar)
        </span>
      ) : (
        <span className={styles.canceled}>Cancelado</span>
      )}
    </div>
  );
};

export default AppointmentCard;
