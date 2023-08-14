import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { UserDeleteOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";

//prueba6@example.com // para hacer las pruebas la password es pass

//Implementamos Logout en el nav para que esté accesible desde cualquier parte de la página, pero la lógica está en el componente Logout.

const Header = ({ children }) => {
  //Al agregar {children} en el componente Header, permites que los componentes  (ej, login, profile) pasados como contenido entre las etiquetas <Header> en tu componente App se rendericen dentro de él.
  const { token, logout } = useContext(UserContext); //importamos el logout del userContext(UserState) para poder usar la función en la función logoutUser que vamos a crear
  const navigate = useNavigate();
  const logoutUser = () => {
    logout(); //desloguea al presionar el botón
    navigate("/login");
  };

  return (
    <>
      <nav className="header">
        <span>
          <Link to="/"> Home /</Link>
        </span>
        <span>
          {token ? (
            <>
              <Link to="/profile"> Profile </Link>
              <button onClick={logoutUser}>
                Logout <UserDeleteOutlined />{" "}
              </button>
              {/* Logout <UserDeleteOutlined onClick={logoutUser} />  También podemos poner solo el icono y la función onClick dentro de la etiqueta del icono */}
            </>
          ) : (
            <>
              <Link to="/login"> Login / </Link>
              <Link to="/register">
                {" "}
                Register <UserOutlined />{" "}
              </Link>
            </>
          )}
        </span>
      </nav>
      {children}
    </>
  );
};

export default Header;


