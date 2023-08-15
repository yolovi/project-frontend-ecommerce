import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Space } from "antd";
import "./Products.scss";

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
              size="small"
              key={product.id}
              title={product.name_product}
              style={{
                width: 300,
                borderColor: "pink",
              }}
            >
              <p>{product.price.toFixed(2)} €</p>
              {/* para que no se ejecute autom. la función de addCart y se convierte en un bucle, hay que meterla dentro de una función, para que se ejecute solo al clicar */}
              <button onClick={() => addCart(product)}>Add Cart</button>
            </Card>
          </Space>
        );
      })}
    </div>
  );
};

export default Products;


