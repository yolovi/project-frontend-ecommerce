import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { LoadingOutlined, GitlabOutlined } from "@ant-design/icons";
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
    <div className="container-profile">
      <div className="container">
        <div className="image">
          <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        <div className="content">
          <div className="info">
            <h2>{user.name_user}</h2>
            <span>{user.last_name}</span>
          </div>
        </div>
        <div className="btn-profile-image">
          <button>
            <span className="btn-profile">User</span>
          </button>

          <button>
            <span className="btn-profile">Orders</span>
          </button>

          <button>
            <span className="btn-profile">Favs</span>
          </button>
        </div>
      </div>

      <div>
        <Space direction="vertical" size={16}>
          <Card size="small" title={user.name_user} style={{ width: 300 }}>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
          </Card>
          <div className="message">General message</div>
          <div className="message-success">Successfully message</div>
        </Space>

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
    </div>
  );
};

export default GetUserLogged;
