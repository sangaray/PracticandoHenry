const Contact = () => {
  return (
    <div>
      <h2 className="main__subtitle texto__contacto">Contáctanos</h2>
      <form
        className="form"
        method="post"
        action="https://formsubmit.co/scgaraycochea@gmail.com">
        <div className="form__input-container">
          <label for="name" className="form__label">
            Nombre
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder="Tu nombre"
              required
              name="name"
            />
          </label>
        </div>
        <div className="form__input-container">
          <label for="email" className="form__label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="nombre@empresa.com"
            required
            name="email"
          />
        </div>
        <div className="form__textarea-container form__input-container">
          <label for="message" className="form__label">
            Mensaje
          </label>
          <textarea
            id="message"
            className="form__textarea"
            placeholder="Escribe tu mensaje aquí..."
            required
            name="message"></textarea>
        </div>
        <button type="submit" className="form__button-submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
