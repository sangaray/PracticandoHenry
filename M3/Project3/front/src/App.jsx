import Home from "./views/home/Home.jsx";
import "./App.css";
import Appointments from "./views/Appointments/Appointments.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Register from "./views/Register/Register.jsx";
import Login from "./views/login/Login.jsx";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <NavBar />
      {/* <Appointments /> */}
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;

