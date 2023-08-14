import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Space } from "antd";
import "./Products.scss"

const Products = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);
  //console.log( "products", products)

  useEffect(() => {
    getProducts();
    products;
  }, []);

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

// return (
//   <div className="products-container">
//     {products.map((product) => {
//       return (
//         <Card
//           key={product._id}
//           title={product.name}
//           bordered={false}
//           style={{
//             width: 300,
//             border: "1px solid",
//             borderColor: "pink",
//           }}
//         >
//           <p>{product.price} €</p>
//           {/* metemos addCart dentro de una función para que no se ejecute al cargar el componente */}
//           <button onClick={() => addCart(product)}>Add cart</button>
//         </Card>
//       );
//     })}
//   </div>
// );
