import React, { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Divider, List, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const data = cart.map((product) => product.name_product);
  const navigate = useNavigate();

  // console.log(cart)

  const checkout = async () => {
    const token = JSON.parse(localStorage.getItem("token")); //para dar acceso al usuario autenticado(si en la ruta backend lo solicita): recogemos token de usuario loggeado y se lo pasamos por headers al authoritation
  
    await axios.post(
      API_URL + "/orders",
      { ProductId: cart.map((product) => product.id) },
      { headers: { authorization: token } }
    );
    message.success("Order created succesfully");
    setTimeout(() => {
      //setTimeout para que le de tiempo a procesar la información
      navigate("/profile");
    }, 3000);
    clearCart();
  };

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  return (
    <div>
      <Divider orientation="left">Cart</Divider>
      <List
        size="small"
        header={<div>Products</div>}
        footer={
          <div>
            <button onClick={() => clearCart()}>Clear cart</button>
            <button onClick={checkout}>Checkout</button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Cart;

// // Estructura de datos para el carrito. Para poder añadir cantides del mismo producto
// const cart = [];

// // Función para agregar productos al carrito
// const addToCart = (productId, quantity) => {
//   const existingProduct = cart.find((product) => product.id === productId);

//   if (existingProduct) {
//     existingProduct.quantity += quantity;
//   } else {
//     cart.push({ id: productId, quantity });
//   }
// };

// // Cuando se realiza el pedido, envía la estructura de datos con IDs y cantidades
// const placeOrder = async () => {
//   // Lógica para enviar la estructura de datos al backend
// };
