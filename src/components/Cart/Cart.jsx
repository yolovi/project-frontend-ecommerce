import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { List, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.scss";
const API_URL = "http://localhost:3000";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [productsMap, setProductsMap] = useState(new Map());

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

    setProductsMap(new Map());
  };

  //FIXME: 
  //cambiar estado del cart al sumar restar con las funciones handleIncrement / handleDecrement
  //al crear pedido que se muestren las cantidades compradas de cada producto.
  //pasar al ProductsContext la parte del estado

  const handleIncrement = (productId) => {
    const updatedMap = new Map(productsMap);
    if (updatedMap.has(productId)) {
      updatedMap.set(productId, updatedMap.get(productId) + 1);
    } else {
      updatedMap.set(productId, 1);
    }
    setProductsMap(updatedMap);
  };

  const handleDecrement = (productId) => {
    const updatedMap = new Map(productsMap);
    if (updatedMap.has(productId)) {
      const qty = updatedMap.get(productId);
      if (qty > 1) {
        updatedMap.set(productId, qty - 1);
      } else {
        updatedMap.delete(productId);
      }
      setProductsMap(updatedMap);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div>
          <p>Your cart is</p>
          <Link className="btn-cart" to={"/"}>
            {" "}
            Start Shoping!{" "}
          </Link>
        </div>
      </div>
    );
  }

  const productList = cart.map((product) => ({
    id: product.id,
    title: product.name_product,
    price: product.price,
    image: product.image_url,
  }));

  return (
    <div className="container-flex">
      <div className="container-cart">
        <List
          size="small"
          header={<h2 className="title">Cart</h2>}
          footer={
            <div className="btn-link-container">
              <button className="btn-black" onClick={() => clearCart()}>
                Clear
              </button>
              <button className="btn-cart" onClick={checkout}>
                Checkout
              </button>
            </div>
          }
          bordered
          dataSource={productList}
          renderItem={(item) => {
            const qty = productsMap.get(item.id) || 1;
            return (
              <div className="cart-table-flex">
                <table key={item.id}>
                  <tbody>
                    {/* Encabezado de la fila */}
                    <tr>
                      <td colSpan="6" className="table-header">
                        <h4>{item.title}</h4>
                      </td>
                    </tr>
                    {/* Filas de detalles */}
                    <tr>
                      <td colSpan="3" className="table-header">
                        <img
                          className="img-cart"
                          alt="product-img"
                          src={item.image}
                        />
                      </td>
                      <td>
                        <button
                          className="btn-qty"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <span className="span-qty">
                          {/* {productsMap.get(item.id) || 0} // to put remove function at 0 */}
                          {qty}
                        </span>
                        <button
                          className="btn-qty"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </td>

                      <td> {item.price.toFixed(2)} €</td>
                      <td className="price-qty">
                        {" "}
                        {item.price.toFixed(2) * qty} €{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Cart;

//ESTRUCTURA CART nueva solo con div para hacerla responsive Adaptar a la estructura que hay ahora
// return (
// <div className="container-flex">
// <div className="cart-container">
//   <div className="container-item">
//     <img />
//     <div className="item">
//       <div className="item-info">
//         <p>LOGO</p>
//         <h4>Name product</h4>
//       </div>
//       <div className="item-price">
//         indiviudal price €
//       </div>
//       <div className="item-quantity">
//         <button>+ / -</button>
//         <span>Remove button</span>
//       </div>
//     </div>
//     <div className="price-total-item">
//       <h3>Total item €</h3>
//     </div>
//   </div>
//   <div className="checkout-container">
//     <div className="clear-container">
//     <button>CLEAR</button>
//     <span>icono + nº items</span>
//     </div>
//     <button>checkout · total precio €</button>

//   </div>
// </div>
// </div>
// )
