import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = [
  /*   { title: "Teclado", price: 100 },
  { title: "Monitor", price: 300 }, */
];

const carritoSlice = createSlice({
  // Nombre del Slice
  name: "carrito",
  // Estado inicial
  initialState: estadoInicial,
  // Reducers
  reducers: {
    agregarProducto: (state, action) => {
      state.push(action.payload);
      console.log(action);
    },
    quitarProducto: (state, action) => {
      return state.filter((producto) => producto.title !== action.payload);
    },
  },
});

console.log(carritoSlice);
// carritoSlice.actions.agregarProduct({ title, price });
// Exportamos acciones:
export const { agregarProducto, quitarProducto } = carritoSlice.actions;

// Exportamos reducer:
export default carritoSlice.reducer;
