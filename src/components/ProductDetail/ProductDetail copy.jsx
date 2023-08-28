import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Card, Space } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import Meta from "antd/es/card/Meta";
import "./ProductDetail.scss";

const API_URL = "http://localhost:3000";

function ProductDetail() {
  const { productId } = useParams();
  const { addCart } = useContext(ProductsContext);
  const [product, setProduct] = useState({});

  const getProduct = async () => {
    const res = await axios.get(API_URL + `/products/id/${productId}`);
    setProduct(res.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(product);

  return (
    <div className="container-product-detail">
      <div className="image-detail" key={product.id}>
        <img alt="image-lamp" src={product.image_url} />
      </div>
      <div className="product-detail">
        <Space direction="vertical" size={16}>
          <Card
            className="card-detail"
            size="large"
            key={product.id}
            style={{
              width: 300,
              borderColor: "",
              margin: 0,
            }}
          >
            <Meta
              style={{
                fontSize: 30,
              }}
              //description={product.Category.name_category}
            />
            <h2>{product.name_product}</h2>
            {/* <span>{product.Category.name_category}</span> */}
            <p>PRODUCT DESCRIPTION</p>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis recusandae ratione reprehenderit quibusdam similique
              est laudantium, eligendi, amet id vero possimus pariatur aperiam
              iure quidem voluptate quae perspiciatis error ab.
            </span>
            <p>{product.price} €</p>
            <h3>Quantity + - Button</h3>
            {/* para que no se ejecute autom. la función de addCart y se convierte en un bucle, hay que meterla dentro de una función, para que se ejecute solo al clicar */}
            <button onClick={() => addCart(product)}>Add Cart</button>
            <button onClick={() => alert("do the function add favs")}>
              Add Favs
            </button>
          </Card>
        </Space>
      </div>
    </div>
  );
}

export default ProductDetail;
