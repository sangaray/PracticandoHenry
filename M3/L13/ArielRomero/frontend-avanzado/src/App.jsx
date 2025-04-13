import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frontend Avanzado</h1>
      <hr />
      <Navbar />
    </div>
  );
}

export default App;

