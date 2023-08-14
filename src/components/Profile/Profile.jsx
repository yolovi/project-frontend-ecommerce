import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Card, Space } from "antd";
import "./Profile.scss";

const antIcon = //icono spin de ant para utilizar en el if para darle tiempo a montar el componente
  (
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
    getUserLogged(); //metemos la función dentro del useEffect para que se ejecute cuando se monte el componente
  }, []);

  if (!user) {
    // si no hay usuario cargará mensaje/spinner > es necesario esta linea para que le de tiempo a montar el componente antes de mostrar usuario y evitar un error
    return <Spin indicator={antIcon} />;
  }

  return (
    <div>
      <Space direction="vertical" size={16}>
        <Card size="small" title={user.name_user} style={{ width: 300 }}>
          <p>{user.last_name}</p>
          <p>{user.email}</p>
        </Card>
        <div className="message">General message</div>
        <div className="message-success">Successfully message</div>
      </Space>
      {/* {console.log(user)} */}
    </div>
  );
};

export default GetUserLogged;
