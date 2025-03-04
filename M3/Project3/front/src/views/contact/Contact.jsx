import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div>
      <h2>Contáctanos</h2>
      <form
        className={styles.form}
        method="post"
        action="https://formsubmit.co/scgaraycochea@gmail.com">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          placeholder="Tu nombre"
          required
          name="name"
        />
        <br />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="nombre@empresa.com"
          required
          name="email"
        />
        <br />
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          placeholder="Escribe tu mensaje aquí..."
          required
          name="message"></textarea>
        <br />
        <button type="submit" className={styles.buttonSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
