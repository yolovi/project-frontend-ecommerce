// import React from 'react'

// const Logout = () => {
//   return (
//     <div>Logout</div>
//   )
// }

// export default Logout

//TODO: Diapo Autenticacion Context. Esta parte del Logout va en header, cuando arregle las rutas y funcione header, pasar este contenido al header y eliminar el componente Logout y de la ruta de App
//import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

function Header() {
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
  };

  return (
    <nav className="header">
      <span>Header</span>
      <div>
        {token ? (
          <>
            <span onClick={logoutUser}>
              <Link to="/">Logout</Link>
            </span>
            <span>
              <Link to="/profile">Profile</Link>
            </span>
          </>
        ) : (
          <span>
            <Link to="/">Login</Link>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Header;