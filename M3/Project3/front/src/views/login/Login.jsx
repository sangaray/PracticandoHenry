import { useState } from "react";
import validateUserLogin from "../../helpers/validateUserLogin";
import styles from "./Login.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/userSlice";

const POSTUSERLOGIN_URL = "http://localhost:3000/users/login";

export default function Login() {
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };

  // ESTADOS
  const [input, setInput] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  // HANDLERS
  const handleChange = (event) => {
    setInput({
      ...input,

      [event.target.name]: event.target.value,
    });
    setErrors(
      validateUserLogin({
        ...input,

        [event.target.name]: event.target.value,
      })
    );
  };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      username: input.username,
      password: input.password,
    };
    // Acá se haría la petición al back... con axios/fetch
    axios
      .post(POSTUSERLOGIN_URL, userData)
      .then(({ data }) => {
        // Despachamos la acción
        dispatch(setUserData(data));
        alert("Usuario logueado con éxito");
        setInput(initialState);
        navigate("/appointments");
      })
      .catch((error) => {
        alert(
          `Se ha producido un error al loguear al usuario. ${
            error.response.data.message || "Error desconocido"
          }`
        );
      });
  };

  // COMPONENTE
  return (
    <div>
      <h1>Formulario de Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <input
          className={styles.buttonSubmit}
          type="submit"
          value="Enviar"
          disabled={Object.keys(errors).length > 0} // si hay errores, deshabilito el boton
        />
      </form>
    </div>
  );
}
