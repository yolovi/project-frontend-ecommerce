import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import {
  UserDeleteOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./Header.scss";
import { Badge } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

//prueba6@example.com // para hacer las pruebas la password es pass

//Implementamos Logout en el nav para que esté accesible desde cualquier parte de la página, pero la lógica está en el componente Logout.

const Header = () => {
  //Al agregar {children} en el componente Header, permites que los componentes  (ej, login, profile) pasados como contenido entre las etiquetas <Header> en tu componente App se rendericen dentro de él.
  const { token, logout } = useContext(UserContext); //importamos el logout del userContext(UserState) para poder usar la función en la función logoutUser que vamos a crear
  const {cart} = useContext(ProductsContext)
  const navigate = useNavigate();
  const logoutUser = () => {
    logout(); //desloguea al presionar el botón
    navigate("/login");
  };

//se ejecuta cuando el componente cambia (en este caso [cart])
//con el siguiente useEffect lo que hará es que cada vez que cambie el estado del carrito que lo guarde en el localStorage (esto lo hace cada vez que se añade un producto al carrito)  
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  return (
    <>
      <nav className="header">
        <span>
          <Link to="/"> Home /</Link>
        </span>
        <span>
          {token ? (
            <>
              <Link to="/profile"> Profile / </Link>
              <Link to="/cart">
              <Badge count={cart.length}  overflowCount={99} offset={[10]} size="small">
                <ShoppingCartOutlined />{" "}
                </Badge>
              </Link>            
              <button onClick={logoutUser}>
                Logout <UserDeleteOutlined />
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
    </>
  );
};

export default Header;
