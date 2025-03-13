import { configureStore } from "@reduxjs/toolkit";
import carritoSlice from "./carritoSlice";
import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: {
    carrito: carritoSlice,
  },
  devTools: composeWithDevTools(), // Habilitar Redux DevTools
});

// state = { carrito }

export default store;
