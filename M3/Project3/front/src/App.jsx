import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Servicios from "./views/servicios/Servicios.jsx";
import Appointments from "./views/appointments/Appointments.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import Register from "./views/register/Register.jsx";
import Login from "./views/login/Login.jsx";
import Contact from "./views/contact/Contact.jsx";
import Home from "./views/contact/Contact.jsx";
// import Landing from "./views/landing/Landing.jsx";
import SubjectCard from "./components/subjectCard/SubjectCard.jsx";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" ? <NavBar /> : null}

      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/appointment" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ruta para el SubjectCard, recibiendo el id como parámetro */}
        <Route path="/subject/:subjectId" element={<SubjectCard />} />
      </Routes>
    </div>
  );
}

export default App;

