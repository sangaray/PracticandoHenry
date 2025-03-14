import { useState } from "react";
import "./App.css";
import { validate } from "./helpers/validate";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Username is required",
    password: "Password is required",
  });
  console.log(errors);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    // const errors = validate(userData);
    // setErrors(errors);
    setErrors(validate(userData));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`username: ${userData.username} password: ${userData.password}`);
  };

  return (
    <div className="card">
      <form className="container" onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <div className="form-inputs">
          <label>Username</label>
          <input
            type="text"
            value={userData.username}
            name="username"
            placeholder="exemple@mail.com"
            onChange={handleInputChange}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <label>Password</label>
          <input
            type="password"
            value={userData.password}
            name="password"
            placeholder="******"
            onChange={handleInputChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

