import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Space } from "antd";
import "./Products.scss"

const Products = () => {
  const { getProducts, products } = useContext(ProductsContext);
  //console.log( "products", products)

  useEffect(() => {
    getProducts();
    products;
  }, []);

  return (
    <div className="products-container">
      {products.map((product) => {
        //necesitamos el siguiente return para que se muestren los datos que están dentro del div (product.name_product, etc)
        return (
          <Space direction="vertical" size={16}>
            <Card
              size="small"
              key={product._id}
              title={product.name_product}
              style={{ 
                width: 300,
                borderColor: "pink",

              }}
            >
              <p>{product.price} €</p>
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
