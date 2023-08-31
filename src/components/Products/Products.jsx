import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./Products.scss";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext);
  //console.log( "products", products)

  //se ejecuta cuando se monta el componente
  useEffect(() => {
    getProducts();
  }, []);

  //El useEffect cuando el componente de cart cambia (se llena de productos o se vacía, lo hemos movido al componente Header, porque este componente siempre está por loo que no hay que repetir el mismo código en varios componentes)
  return (
    <div className="container-flex">
      <div className="products-container">
        {products.map((product, i) => {
          //console.log(product);
          //necesitamos el siguiente return para que se muestren los datos que están dentro del div (product.name_product, etc)
          return (
            <Space direction="vertical" size={16} key={i}>
              <Card
                className="card-border"
                // hoverable
                size="small"
                key={product.id}
                cover={<img alt="image-lamp" src={product.image_url} />} // Cargar la imagen usando la URL
                style={{
                  width: 300,
                }}
              >
                <Meta
                  title={product.name_product}
                  description={product.Category.name_category}
                />
                <p>{product.price.toFixed(2)} €</p>

                {/* //FIXME: quantity controls: cambiar el estado del carrito al añadir desde boton o desabilitar add cart y cambiar cantidad en carrito */}
                {/* <div className="quantity-controls">
                  <button
                    onClick={() =>
                      setProductQuantity(product.id, product.quantity - 1)
                    }
                    disabled={product.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    onClick={() =>
                      setProductQuantity(product.id, product.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div> */}

                {/* para que no se ejecute autom. la función de addCart y se convierte en un bucle, hay que meterla dentro de una función, para que se ejecute solo al clicar */}
                {/* <button onClick={() => addCart(product)}>Add Cart</button> */}
                <div className="btn-link-container">
                  <button
                    className="btn-black"
                    onClick={() => addCart(product, product.quantity || 1)}
                  >
                    Add{" "}
                    <ShoppingCartOutlined
                      style={{
                        fontSize: 20,
                      }}
                    />
                  </button>

                  <Link
                    to={`/product/${product.id}`}
                    className="btn-details btn-black"
                  >
                    Details
                  </Link>
                </div>
              </Card>
            </Space>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
