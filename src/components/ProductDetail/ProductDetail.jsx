import "./ProductDetail.scss";
import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { LeftOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";

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


  return (
    <>
    <div className="container-flex">
      <div className="card-product-col">
        <div className="nav-back">
          <LeftOutlined />
          <Link to={"/"}><a>Back to products</a></Link>         
        </div>
        <div className="card-content-row">
          <div className="image-detail" key={product.id}>
            <img alt="image-lamp" src={product.image_url} />
          </div>
          <div className="card-detail">
            <div className="product-detail">
              <h2>{product.name_product}</h2>
              <h5>Category: {product.CategoryId}</h5>
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
              <p>{product.price} €</p>
              <p>Quantity + -</p>
            </div>
            <div className="div-btn">
              <button className="btn-large" onClick={() => addCart(product)}>ADD TO CART</button>
              <button className="btn-wish" onClick={() => alert("do the function add favs")}>
                ADD TO WISHLIST <HeartOutlined className="heart" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ProductDetail;
