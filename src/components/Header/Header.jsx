import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

//prueba6@example.com // para hacer las pruebas la password es pass

//Implementamos Logout en el nav para que esté accesible desde cualquier parte de la página, pero la lógica está en el componente Logout.

const Header = ({ children }) => {
  //Al agregar {children} en el componente Header, permites que los componentes  (ej, login, profile) pasados como contenido entre las etiquetas <Header> en tu componente App se rendericen dentro de él.
  const { token, logout } = useContext(UserContext);//importamos el logout del userContext(UserState) para poder usar la función en la función logoutUser que vamos a crear
  const navigate = useNavigate()
  const logoutUser = () => {
    logout(); //desloguea al presionar el botón
    navigate("/login")
  }

  return (
    <>
      <nav className="header">
        <span>
          {token ? (
            <>
             <Link to="/profile"> Profile </Link>
             <button onClick={logoutUser}>Logout</button> 
            </>
           ) : (
            <>
            <Link to="/login"> Login / </Link>
            <Link to="/register"> Register </Link>
            </>
          )}
        </span>
      </nav>
      {children}
    </>
  );
};

export default Header;
