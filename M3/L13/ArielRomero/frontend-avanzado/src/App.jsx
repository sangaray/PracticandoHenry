import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Characters from "./components/characters/Characters";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frontend Avanzado</h1>
      <hr />
      <Navbar />
      <hr />
      <Characters />
    </div>
  );
}

export default App;

