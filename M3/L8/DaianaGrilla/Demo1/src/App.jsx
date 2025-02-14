{
  /* Para agregar código js debo ponerlo entre llaves */
  /* El valor no cambia haciendolo de esta manera, para que cambie el contado necesitamos los estados */

  UseState;
}

import "./App.css";
import CardList from "./components/CardList";
import styles from "./app.module.css";
import { CustomButton } from "./components/CustomButton";
import { useState } from "react";

function App() {
  const [state, setState] = useState;
  let counter = 0;
  return (
    <>
      <h1 className={styles.title}>Mi Primera App</h1>

      <h2 className={styles.subtitle}>Contador: {counter}</h2>
      <CustomButton>Contador de Clicks</CustomButton>
      <CardList />
    </>
  );
}

export default App;

