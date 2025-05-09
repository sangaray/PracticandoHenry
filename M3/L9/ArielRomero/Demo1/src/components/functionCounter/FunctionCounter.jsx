import { useEffect, useState } from "react";
import FunctionDisplay from "../functionDisplay/FunctionDisplay";

const FunctionCounter = () => {
  const [contador, setContador] = useState(0);
  const sumarUno = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log("FunctionCounter se actualizó");
  }, [contador]);

  return (
    <div>
      <h2>Contador de Función</h2>
      <h3>Contador: {contador}</h3>
      <button onClick={sumarUno}>Sumar 1</button>
      {contador > 2 && contador < 5 ? <FunctionDisplay /> : null}
    </div>
  );
};

export default FunctionCounter;
