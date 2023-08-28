import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
//import { Card, Space } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
//import Meta from "antd/es/card/Meta";
import "./ProductDetail.scss";
import { LeftOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

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
    <>
      <div className="card-product-col">
        <div className="nav-back">
          <LeftOutlined />
          <a>Back to products</a>
        </div>
        <div className="card-content-row">
          <div className="image-detail" key={product.id}>
            <img alt="image-lamp" src={product.image_url} />
          </div>
          <div className="card-detail">
            <div className="product-detail">
              <h2>{product.name_product}</h2>
              <h5>Category: {product.CategoryId}</h5> //FIXME: category name no
              id
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus nobis nihil eligendi natus vitae, repellendus eum
                officiis, debitis quam facere eius quas beatae suscipit illum
                deserunt itaque labore veritatis soluta?
              </p>
            </div>
            <div className="product-detail">
              <p>Quantity</p>
              <p>{product.price} €</p>
            </div>
            <div className="div-btn">
              <button className="btn-black">ADD TO CART</button>
              <button className="btn-wish">
                ADD TO WISHLIST <HeartOutlined className="heart" />
                 {/* <HeartFilled className="heart"/> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
