{
  /* Renderizado Condicional
  /* Para agregar código js debo ponerlo entre llaves */
  /* El valor no cambia haciendolo de esta manera, para que cambie el contado necesitamos los estados 
  /* Para reducir código vamos a utilizar el operador && (and)
  /* Para establecer la condición puedo usar:
  /* Si lógico: if(isRegistered) {return <Login/>}
  /* Operador And (&&): {isRegistered && <Login/>} {!isRegistered && <Register/>}
  /* Operador Ternario: {isRegistered ? <Login/> : <Register/>}

  */
}

import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const isRegistered = true;

  return (
    <>
      <h1>Bienvenido a mi Primera App</h1>
      {isRegistered ? <Login /> : <Register />}
    </>
  );
}

export default App;

