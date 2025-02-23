import { useState } from "react";
import validateUser from "../../helpers/validateUser";
import styles from "./Register.module.css";

const POSTUSER_URL = "http://localhost:3000/users/register";

export default function () {
  const [input, setInput] = useState({
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "Nombre es requerido",
    email: "E-mail es requerido",
    birthdate: "Birthday es requerido",
    nDni: "DNI es requerido",
    username: "Username es requerido",
    password: "Password es requerido",
  });

  const handleChange = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name); así sé desde qué input estoy se invocó la función
    // const {name, value} = event.target
    setInput({
      ...input,
      // [name]: value,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUser({
        ...input,
        // [name]: value,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Acá se haría la petición al back... con axios/fetch
    alert(
      `name ${input.name}, email: ${input.email}, birthdate: ${input.birthdate}, nDni: ${input.nDni}, username: ${input.username}, password: ${input.password}`
    );
    setInput({
      name: "",
      email: "",
      birthdate: "",
      nDni: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Formulario en Registro</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={input.name} // vinculo el input con el estado interno
          placeholder="Ingresa tu nombre"
          onChange={handleChange}
        />

        <br />
        <span style={{ color: "coral" }}>{errors.name && errors.name}</span>
        <br />

        <label htmlFor="email">Correo:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={input.email} // vinculo el input con el estado interno
          placeholder="Ingresa tu correo"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>{errors.email && errors.email}</span>
        <br />

        <label htmlFor="birthdate">Fecha de Nacimiento:</label>
        <input
          id="birthdate"
          type="text"
          name="birthdate"
          value={input.birthdate} // vinculo el input con el estado interno
          placeholder="Ingresa tu fecha de nacimiento"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.birthdate && errors.birthdate}
        </span>
        <br />

        <label htmlFor="nDni">DNI:</label>
        <input
          id="nDni"
          type="text"
          name="nDni"
          value={input.nDni} // vinculo el input con el estado interno
          placeholder="Ingresa tu DNI"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>{errors.nDni && errors.nDni}</span>
        <br />

        <label htmlFor="username">Nombre de Usuario:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={input.username} // vinculo el input con el estado interno
          placeholder="Ingresa tu email"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.username && errors.username}
        </span>
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={input.password} // vinculo el input con el estado interno
          placeholder="Ingresa tu password"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.password && errors.password}
        </span>
        <br />
        <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
        <input
          id="confirmPassword"
          type="confirmPassword"
          name="confirmPassword"
          value={input.confirmPassword} // vinculo el input con el estado interno
          placeholder="Ingresa tu password"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "coral" }}>
          {errors.confirmPassword && errors.confirmPassword}
        </span>
        <br />
        <input
          className={styles.buttonSubmit}
          type="submit"
          value="Enviar"
          disabled={errors.username || errors.password}
        />
      </form>
    </div>
  );
}
