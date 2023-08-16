import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function ProductDetail() {
  const { productId } = useParams();
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
      <h1>{product.name_product}</h1>
    </div>
  );
}

export default ProductDetail;
