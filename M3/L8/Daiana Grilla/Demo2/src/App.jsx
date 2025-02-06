{
  /* Para agregar código js debo ponerlo entre llaves */
  /* El valor no cambia haciendolo de esta manera, para que cambie el contado necesitamos los estados */
}

import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Dai");

  console.log(name);
  const changeName = () => {
    if (name === "Dai") setName("Pepita");
    else setName("Dai");

    console.log(name);
  };

  return (
    <>
      <h1>Hola, soy {name}</h1>
      <button onClick={changeName}>Cambiar</button>
    </>
  );
}

export default App;

