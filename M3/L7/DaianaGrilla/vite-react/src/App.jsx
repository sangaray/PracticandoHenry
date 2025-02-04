{
  /* Para agregar código js debo ponerlo entre llaves */
  /* El valor no cambia haciendolo de esta manera, para que cambie el contado necesitamos los estados */
}

import "./App.css";
import CardList from "./components/CardList";

function App() {
  let counter = 0;
  return (
    <>
      <h1>Mi Primera App</h1>
      <CardList />
      <p>Clicks: {counter}</p>
      <button onClick={() => counter++}>Contador de Clicks</button>
    </>
  );
}

export default App;

