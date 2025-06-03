import Saludador from "./ReactFC";
import Product from "./Products";
import "./App.css";

function App() {
  return (
    <>
      <Saludador name="Daiana">
        <p>Holis, soy el children</p>
      </Saludador>
      <Product
        title="Producto 1"
        description="Descripción del producto 1"
        price={100}
      />
    </>
  );
}

export default App;

