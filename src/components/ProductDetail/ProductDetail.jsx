import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Card, Space } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const API_URL = "http://localhost:3000";

function ProductDetail() {
  const { productId } = useParams();
  const {addCart} =useContext(ProductsContext)
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get(API_URL + `/products/id/${productId}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <Space direction="vertical" size={16}>
        <h2>IMAGE PRODUCT</h2>
        <Card
          size="small"
          key={product.id}
          title={product.name_product}
          style={{
            width: 300,
            borderColor: "",
          }}
        >
          <h3>PRODUCT DESCRIPTION</h3>
          <p>{product.price} €</p>
          <h3>Quantity + - Button</h3>
          {/* para que no se ejecute autom. la función de addCart y se convierte en un bucle, hay que meterla dentro de una función, para que se ejecute solo al clicar */}
          <button onClick={() => addCart(product)}>Add Cart</button>
          <button onClick={() => alert("do the function add favs")}>Add Favs</button>
        </Card>
      </Space>
    </div>
  );
}

export default ProductDetail;
