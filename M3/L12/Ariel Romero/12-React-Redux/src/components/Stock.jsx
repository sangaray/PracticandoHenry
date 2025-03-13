import React from "react";
import { useDispatch } from "react-redux";
import { agregarProducto } from "../redux/carritoSlice"; // Importamos la action

export default function Stock() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Productos en Stock</h2>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Mouse", price: 200 }))
        }>
        Mouse - $200
      </button>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Teclado", price: 100 }))
        }>
        Teclado - $100
      </button>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Monitor", price: 300 }))
        }>
        Monitor - $300
      </button>
      <button
        onClick={() =>
          dispatch(agregarProducto({ title: "Auricular", price: 150 }))
        }>
        Auricular - $150
      </button>
    </div>
  );
}
