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
        `Desea cancelar el turno del día ${date} a las ${time} hs con id ${id}?`
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
        <span className={styles.activo} onClick={handlerClick}>
          Activo (Cancelar)
        </span>
      ) : (
        <span className={styles.cancelado}>Cancelado</span>
      )}
    </div>
  );
};

export default AppointmentCard;
