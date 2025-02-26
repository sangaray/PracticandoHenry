import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Navbar from "./components/NavBar";
import LoginPage from "./views/LoginPage";
import AboutPage from "./views/AboutPage";
import DetailPage from "./views/DetailPage";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  });

  return (
    <div className="App">
      <Navbar />{" "}
      {/* por estar afuera de routes se va a renderizar siempre, en todas las páginas o vistas */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage contacts={contacts} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;

