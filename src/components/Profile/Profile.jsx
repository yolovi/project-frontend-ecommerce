import "./Profile.scss";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Space, Card, Collapse } from "antd";
import dayjs from "dayjs";

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


  const orderInfo = user.Orders.map((order) => ({
    key: order.id,
    label: (
      <div className="label-orders">
        <span>Order nº {order.id}</span>
        <span>Date: {dayjs(order.createdAt).format('DD-MM-YYYY')}</span>
        <span>Itmes</span>
        <span>Total Price</span>
        <span>State</span>
      </div>
    ),
   
    children: order.Products.map((item) => {
      return (
        <div className="profile-table-flex">
          <table key={item.id}>
            <tbody>
              {/* Filas de detalles */}
              <tr>
                <td colSpan="3" className="table-header">
                  <img
                    className="img-cart"
                    alt="product-img"
                    src={item.image_url}
                  />
                </td>
                <td colSpan="6" className="table-header">
                  <h4>{item.name_product}</h4>
                </td>
                <td colSpan="6" className="table-header">
                  <span>Price unit:</span> <span>{item.price} €</span>
                </td>
                <td colSpan="6" className="table-header">
                  <span>Quantity:</span> <span></span>
                </td>
                <td colSpan="6" className="table-header">
                  <span>Total price:</span> <span> €</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }),
  }));

  const onChange = (key) => {
  };

  return (
    <div className="container-profile">
      <div className="container-profile-info">
        <div className="container">
          <div className="image">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
          </div>
          <div className="content">
            <div className="info">
              <h2 className="title">{user.name_user}</h2>
              <span>{user.last_name}</span>
            </div>
          </div>
          <div className="btn-profile-image">
            <button className="btn-profile">
              <span>User</span>
            </button>
            <button className="btn-profile">
              <span>Orders</span>
            </button>
            <button className="btn-profile">
              <span>Favs</span>
            </button>
          </div>
        </div>

        <div className="info-profile">
          <Space direction="vertical" size={16}>
            <Card size="small" title={user.name_user} style={{ width: 300 }}>
              <p>Last Name: {user.last_name}</p>
              <p>Email: {user.email}</p>
            </Card>
          </Space>
        </div>
      </div>

      <div className="collapse-orders">
        <Collapse
          items={orderInfo}
          defaultActiveKey={["1"]}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default GetUserLogged;

