// Recibe {type: "AGREGAR_PRODUCTO", payload: producto}

const { AGREGAR_PRODUCTO, QUITAR_PRODUCTO } = require("./actions");

const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    // action = {type: "AGREGAR_PRODUCTO", payload: {id: 1, name: "Monitor"}}
    case AGREGAR_PRODUCTO:
      return [...state, action.payload];

    // action = {type: "QUITAR_PRODUCTO", payload: 1}
    case QUITAR_PRODUCTO:
      return state.filter((producto) => producto.id !== action.payload);
    default:
      return state;
  }
}
