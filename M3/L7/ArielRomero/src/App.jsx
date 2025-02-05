import "./App.css";
import Register from "./components/Register";
import { Login } from "./components/Login";

function App() {
  const isRegistered = false;
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        padding: "20px",
        borderRadius: "10px",
      }}>
      <h1>Primera Aplicación en REACT</h1>
      <br />
      {/* {isRegistered && <h3>Por favor, iniciar seción...</h3>}
      {!isRegistered && <h3>Por favor, regístrate...</h3> */}

      {isRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;

