import Home from "./views/home/Home.jsx";
import "./App.css";
import Appointments from "./views/Appointments/Appointments.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <NavBar />
      <Appointments />
    </div>
  );
}

export default App;

