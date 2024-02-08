import { CartContext } from "./CartContext";
import { useReducer } from "react";

const initialState = [];

export const CartProvider = ({ children }) => {
  const comprasReducer = (state, action) => {
    switch (action.type) {
      case "[CARRITO] agregar compra":
        return [...state, action.payload];

      case "[CARRITO] eliminar":
        return state.filter((compra) => compra.id !== action.payload);

      default:
        return state;
    }
  };

  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    const action = {
      type: "[CARRITO] agregar compra",
      payload: compra,
    };
    dispatch(action);
  };

  const eliminarCompra = (id) => {
    const action = {
      type: "[CARRITO] eliminar",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <CartContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        eliminarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
