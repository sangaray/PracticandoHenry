import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quitarProducto } from "../redux/carritoSlice";

function Carrito() {
  const productosEnCarrito = useSelector((state) => state.carrito);
  console.log(productosEnCarrito);

  const dispatch = useDispatch();

  // axios => data = {login: true, usuario:{}}
  // try => dispatch (agregarUsuario(data))
  // catch => dispatch (errorLogin(error))

  return (
    <div>
      <h2>Productos en Carrito</h2>
      {productosEnCarrito.map((producto) => (
        <p>
          {producto.title} - ${producto.price}
          <button onClick={() => dispatch(quitarProducto(producto.title))}>
            X
          </button>
        </p>
      ))}
    </div>
  );
}

export default Carrito;
