const products = (state, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
        case "ADD_CART":
          return {
            ...state,
            //[entre corchtes porque es un array que guarda varios productos, sino se sobreescriría el producto cada vez que se añade uno nuevo]
            cart: [action.payload, ...state.cart],  //state.cart > mantiene los productos que ya están en cart y añade el nuevo
          };
      default:
        return state;
       
    }
  };
  export default products;
