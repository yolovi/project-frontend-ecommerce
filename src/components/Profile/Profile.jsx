import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Space, Card } from "antd";
import "./Profile.scss";

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const GetUserLogged = () => {
  const { getUserLogged, user } = useContext(UserContext);

  useEffect(() => {
    getUserLogged();
  }, []);

  if (!user) {
    return <Spin indicator={antIcon} />;
  }

  return (
    <div>
        <div>
      <Space direction="vertical" size={16}>
        <Card size="small" title={user.name_user} style={{ width: 300 }}>
          <p>Apellido: {user.last_name}</p>
          <p>Email: {user.email}</p>
        </Card>
        <div className="message">General message</div>
        <div className="message-success">Successfully message</div>
      </Space>
    </div>

      {/* Renderizar los detalles de los pedidos */}
      {user.Orders.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Date: {order.createdAt}</p>
          <p>Products:</p>
          {order.Products.map((product) => (
            <div key={product.id}>
              <p>Name: {product.name_product}</p>
              <p>Price: {product.price}</p>
            </div>
          ))}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default GetUserLogged;
