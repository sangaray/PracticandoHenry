import { useState } from "react";
import validateUser from "../../helpers/validateUser";

export default function FormLogin() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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
    alert(`username: ${input.username}, password: ${input.password}`);
    setInput({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Formulario en REACT</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={input.username} // vinculo el input con el estado interno
          placeholder="Ingresa tu email"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>
          {errors.username ? errors.username : null}
        </span>
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={input.password} // vinculo el input con el estado interno
          placeholder="Ingresa tu password"
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>
          {errors.password && errors.password}
        </span>
        <br />
        <input
          type="submit"
          value="Enviar"
          disabled={errors.username || errors.password}
        />
      </form>
    </div>
  );
}
