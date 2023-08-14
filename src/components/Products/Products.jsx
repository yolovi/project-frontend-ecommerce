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
    products;
  }, []);

//se ejecuta cuando el componente cambia (en este caso [cart])
//con el siguiente useEffect lo que hará es que cada vez que cambie el estado del carrito que lo guarde en el localStorage (esto lo hace cada vez que se añade un producto al carrito)  
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


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


