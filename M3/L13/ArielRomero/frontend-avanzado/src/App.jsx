import { useState, lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Characters from "./components/characters/Characters";
const Characters = lazy(() => import("./components/characters/Characters"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Frontend Avanzado</h1>
      <hr />
      <Navbar />
      <hr />
      <Suspense fallback={<div>Cargando...</div>}>
        <Characters />
      </Suspense>
    </div>
  );
}

export default App;

