import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

const initialState = {
  products: [],
  cart: [],
};

const API_URL = "http://localhost:3000";

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "/products/getAll");
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
    return res;
  };

  const addCart = (product) => { //añade el product al carrito (cart.state)
    dispatch({ //para modificar el estado
      type: "ADD_CART",
      payload: product,
    });
  };


  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        getProducts,
        addCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};


export const ProductsContext = createContext(initialState);