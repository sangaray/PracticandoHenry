import { useState } from "react";
import validateUser from "../../helpers/validateUser";
import styles from "./Register.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const POSTUSER_URL = "http://localhost:3000/users/register";

const initialState = {
  name: "",
  email: "",
  birthdate: "",
  nDni: "",
  username: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  // HOOKS
  const navigate = useNavigate();

  // ESTADOS
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  // HANDLERS
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
    const userData = {
      name: input.name,
      email: input.email,
      birthdate: input.birthdate,
      nDni: input.nDni,
      username: input.username,
      password: input.password,
    };
    // Acá se haría la petición al back... con axios/fetch
    axios
      .post(POSTUSER_URL, userData)
      .then(({ data }) => {
        console.log(data);
        alert(data.message);
        setInput(initialState);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        alert(
          `Se ha producido un error al regisrtrar al usuario. ${error.response.data.error}`
        );
      });
    /* alert(
      `name ${input.name}, email: ${input.email}, birthdate: ${input.birthdate}, nDni: ${input.nDni}, username: ${input.username}, password: ${input.password}`
    ); */
  };

  const handleClear = () => {
    setInput(initialState);
  };

  // COMPONENTE
  return (
    <div>
      <h2>Formulario en Registro</h2>
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
          placeholder="Ingresa tu nombre de usuario"
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
          type="password"
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
          disabled={Object.keys(errors).length > 0} // si hay errores, deshabilito el boton
        />
        <button onClick={handleClear} className={styles.buttonSubmit}>
          Borrar Formulario
        </button>
      </form>
    </div>
  );
}
