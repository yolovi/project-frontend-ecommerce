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
    <div className="products-container">
      {products.map((product, i) => {
        //necesitamos el siguiente return para que se muestren los datos que están dentro del div (product.name_product, etc)
        return (
          <Space direction="vertical" size={16} key={i}>
            <Card
              className="card-border"
              // hoverable
              size="small"
              key={product.id}
              // cover={
              //   <img
              //     alt="image-lamp"
              //     src={
              //       "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg"
              //     }
              //   />
              // }
              //cover={<img alt="image-lamp" src={product.image_path} />} FIXME: para poder utilizar las imágenes de producto de backend
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
              {/* para que no se ejecute autom. la función de addCart y se convierte en un bucle, hay que meterla dentro de una función, para que se ejecute solo al clicar */}
              {/* <button onClick={() => addCart(product)}>Add Cart</button> */}
              <div className="btn-link-container">
                <button className="btn-card" onClick={() => addCart(product)}>
                  Add{" "}
                  <ShoppingCartOutlined
                    style={{
                      fontSize: 20,
                    }}
                  />
                </button>

                <Link to={`/product/${product.id}`} className="btn-details">
                  Details
                </Link>
              </div>
            </Card>
          </Space>
        );
      })}
    </div>
  );
};

export default Products;
