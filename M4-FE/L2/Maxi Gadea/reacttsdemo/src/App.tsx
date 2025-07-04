import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { PrimerComponente, SegundoComponente } from "./components/Example";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
  const [state, setState] = useState<Array<number>>([]);

  useEffect(() => {
    const response = axios.get("https://localhost:3000/appointments");
    const responseData = [1, 2, 3, 4, 5];
    setState(responseData);
  }, []);

  return (
    <>
      <PrimerComponente name="Maximiliano">
        SOY EL HIJO
        <Footer />
      </PrimerComponente>
      <SegundoComponente
        name="Iphone 14 pro"
        price={800}
        description="Es el mejor celular del mundo"
      />
    </>
  );
}

export default App;

