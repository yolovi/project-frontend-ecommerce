import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";

const Header = ({ children }) => { //Al agregar {children} en el componente Header, permites que los componentes  (ej, login, profile) pasados como contenido entre las etiquetas <Header> en tu componente App se rendericen dentro de él.
    const {token} = useContext(UserContext)
    
    
    return (
      <>
        <nav className="header">
        <span>
            {
                token ? <Link to="/profile"> Profile </Link> :  <Link to="/login"> Login / </Link>
            }
          </span>
        <span>
            <Link to="/register"> Register </Link>
          </span>
        </nav>
        {children}
      </>
    );
  };

export default Header;

