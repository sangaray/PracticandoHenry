import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Servicios from "./views/servicios/Servicios.jsx";
import Appointments from "./views/appointments/Appointments.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import Register from "./views/register/Register.jsx";
import Login from "./views/login/Login.jsx";
import Contact from "./views/contact/Contact.jsx";
import Home from "./views/home/Home.jsx"; // Corrige la importación de Home
import SubjectCard from "./components/subjectCard/SubjectCard.jsx"; // Importa SubjectCard
import Landing from "./views/landing/Landing.jsx";
import About from "./views/about/about.jsx";
import ErrorPage from "./views/ErrorPage/ErrorPage.jsx";

function App() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== "/" && pathname !== "/login" && pathname !== "/register" ? (
        <NavBar />
      ) : null}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/servicios/:subjectId" element={<Servicios />} />
        <Route path="/subject/:subjectId" element={<SubjectCard />} />
      </Routes>
    </div>
  );
}

export default App;

