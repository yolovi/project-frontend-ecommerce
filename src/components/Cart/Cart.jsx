import "./Cart.scss";
import { useContext, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { List, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:3000";

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [productsMap, setProductsMap] = useState(new Map());

  const checkout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios.post(
      API_URL + "/orders",
      { ProductId: cart.map((product) => product.id) },
      { headers: { authorization: token } }
    );

    message.success("Order created succesfully");
    setTimeout(() => {
      navigate("/profile");
    }, 3000);
    clearCart();

    setProductsMap(new Map());
  };

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
                    <tr>
                      <td colSpan="6" className="table-header">
                        <h4>{item.title}</h4>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="3" className="table-header">
                        <img
                          className="img-cart"
                          alt="product image"
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
                        <span className="span-qty">{qty}</span>
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
