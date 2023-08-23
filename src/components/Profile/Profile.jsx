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
    <div>
      <div className="container">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"></img>
        </div>
        <div class="content">
          <div class="info">
            <h2>Andrew Neil</h2>
            <span>Web Developer</span>
          </div>
        </div>
        <div>
          <ul className="ul-profile">
            <li>
              <button>
                <span className="">User</span>
              </button>
            </li>
            <li>
              <button>
                <span className="">Orders</span>
              </button>
            </li>
            <li>
              <button>
                <span className="">Favs</span>
              </button>
            </li>
          </ul>
        </div>
      </div>

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

//   return (
//     <div>
//         <div>
//       <Space direction="vertical" size={16}>
//         <Card size="small" title={user.name_user} style={{ width: 300 }}>
//           <p>Apellido: {user.last_name}</p>
//           <p>Email: {user.email}</p>
//         </Card>
//         <div className="message">General message</div>
//         <div className="message-success">Successfully message</div>
//       </Space>
//     </div>

//       {/* Renderizar los detalles de los pedidos */}
//       {user.Orders.map((order) => (
//         <div key={order.id}>
//           <p>Order ID: {order.id}</p>
//           <p>Date: {order.createdAt}</p>
//           <p>Products:</p>
//           {order.Products.map((product) => (
//             <div key={product.id}>
//               <p>Name: {product.name_product}</p>
//               <p>Price: {product.price}</p>
//             </div>
//           ))}
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

export default GetUserLogged;
