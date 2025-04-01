import styles from "./AppointmentCard.module.css";

const AppointmentCard = ({
  id,
  date,
  time,
  status,
  description,
  handleAppointmentCancel,
}) => {
  const handlerClick = () => {
    if (
      window.confirm(
        `Desea cancelar el turno del día ${date} a las ${time} hs?`
      )
    ) {
      handleAppointmentCancel(id);
    }
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
