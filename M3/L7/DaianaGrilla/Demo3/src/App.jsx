{
  /* Para agregar código js debo ponerlo entre llaves */
  /* El valor no cambia haciendolo de esta manera, para que cambie el contado necesitamos los estados */
}

import "./App.css";
import CardList from "./components/CardList";
import styles from "./app.module.css";

function App() {
  let counter = 0;
  return (
    <>
      <h1 className={styles.title}>Mi Primera App</h1>

      <h2 className={styles.subtitle}>Contador: {counter}</h2>
      <button onClick={() => counter++}>Contador de Clicks</button>
      <CardList />
    </>
  );
}

export default App;

