import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  console.log(userData);

  const handleInputChange = (event) => {
    // console.log(event);

    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
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
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

