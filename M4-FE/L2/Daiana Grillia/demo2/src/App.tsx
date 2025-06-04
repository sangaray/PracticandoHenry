import Saludador from "./ReactFC";
import Product from "./Products";
import ListUseExample from "./components/ListUseExample/ListUseExample";
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
      <ListUseExample />
    </>
  );
}

export default App;

