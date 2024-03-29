import "./Header.scss";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import {
  UserDeleteOutlined,
  UserOutlined,
  UserAddOutlined,
  ShoppingCartOutlined,
  CloseOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import BtnTop from "../assets/BtnTop/BtnTop";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };
  const closeMenu = () => {
    if (size.width <= 768) {
      setMenuOpen(false);
    }
  };

  const { token, logout } = useContext(UserContext);
  const { cart } = useContext(ProductsContext);
  const navigate = useNavigate();
  const logoutUser = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <header className="header">
        <div className="header-content">
          <Link to="/" className="header-content-logo">
            Hikari
          </Link>
          <nav
            className={`${"header-content-nav"}
        ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
        }`}
          >
            <ul>
              <li>
                <Link to="/" onClick={closeMenu} className="btn-hover-line">
                  Home
                </Link>
              </li>
              <li>
                {token ? (
                  <div className="header-menu">
                    <Link
                      to="/profile"
                      onClick={closeMenu}
                      className="btn-hover-line"
                    >
                      {" "}
                      Profile{" "}
                    </Link>
                    <Link
                      to="/cart"
                      onClick={closeMenu}
                      className=" btn-hover-line"
                    >
                      <Badge
                        count={cart.length}
                        overflowCount={99}
                        offset={[10]}
                        size="small"
                      >
                        <ShoppingCartOutlined
                          style={{
                            fontSize: 20,
                          }}
                        />{" "}
                      </Badge>
                    </Link>
                    <Link
                      to="/login"
                      onClick={logoutUser}
                      className="btn-hover-line"
                    >
                      {" "}
                      Logout <UserDeleteOutlined />{" "}
                    </Link>
                  </div>
                ) : (
                  <div className="header-menu">
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className="btn-hover-line"
                    >
                      {" "}
                      Login <UserOutlined />
                    </Link>
                    <Link
                      to="/register"
                      onClick={closeMenu}
                      className="btn-hover-line"
                    >
                      Register <UserAddOutlined />
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="btn-hover-line"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-content-toggle">
            {!menuOpen ? (
              <MenuFoldOutlined onClick={menuToggleHandler} />
            ) : (
              <CloseOutlined onClick={menuToggleHandler} />
            )}
          </div>
        </div>
        <BtnTop />
      </header>
    </>
  );
};

export default Header;
