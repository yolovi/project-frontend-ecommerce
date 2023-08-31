import "./Products.scss";
import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Card, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";

const Products = () => {
  const { getProducts, products, addCart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-flex">
      <div className="products-container">
        {products.map((product, i) => {
          return (
            <Space direction="vertical" size={16} key={i}>
              <Card
                className="card-border"
                size="small"
                key={product.id}
                cover={<img alt="image-lamp" src={product.image_url} />}
                style={{
                  width: 300,
                }}
              >
                <Meta
                  title={product.name_product}
                  description={product.Category.name_category}
                />
                <p>{product.price.toFixed(2)} €</p>
                <div className="btn-link-container">
                  <button
                    className="btn-black"
                    onClick={() => addCart(product, product.quantity || 1)}
                  >
                    Add{" "}
                    <ShoppingCartOutlined
                      style={{
                        fontSize: 20,
                      }}
                    />
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn-details btn-black"
                  >
                    Details
                  </Link>
                </div>
              </Card>
            </Space>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
