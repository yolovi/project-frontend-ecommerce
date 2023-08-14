import { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";

//nos traemos cart del localStorage para poder usarlo en el estado de cart (initialState)
const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  cart:  cart ? cart : [], 
  //ternario del cart > de esta manera si hay algo en el localStorage lo mantendrá sino será un array vacío. Si no ponemos esto cuando se refresque la página estará siempre vacío cart, porque no lo recoge del localStorage
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
        // si no ponemos el cart dentro del value no lo podremos utilizar mediante el provider (Products.Provider), por ej. en el componente de Products en el useEffect para guardar su estado en localStorage
        cart: state.cart,  
        getProducts,
        addCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};


export const ProductsContext = createContext(initialState);