import React, { useContext, useState } from "react";
import { notification } from "antd";
import { UserContext } from "../../context/UserContext/UserState";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!email || !password) {
      notification.error({
        message: "Login Failed",
        description: "Please fill in both email and password fields.",
      });
    } else {
      try {
        await login({ email, password }); // Call the login function from context
        notification.success({
          message: "Successfully logged",
          description: "Welcome to our e-commerce",
        });
        setTimeout(() => {
          //setTimeout para que le de tiempo a procesar la información
          navigate("/profile");
        }, 3000);
      } catch (error) {
        notification.error({
          message: "Login Failed",
          description: "Invalid email or password.",
        });
      }
    }
  };

  const [isChecked, setIsChecked] = useState(true);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="container-flex">
        <div className="card">
          <h2 className="title">Log in</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="inputBox">
              <input
                type="text"
                name="email"
                required
                placeholder="Insert your "
              />
              <span className="user">Email</span>
            </div>
            <div className="inputBox">
              <input
                type="password"
                name="password"
                required
                placeholder="Insert your "
              />
              <span>Password</span>
            </div>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              Remember me
            </label>
            <button className="btn-black" type="submit">
              Enter
            </button>
            <div className="con">
              <p>Don't have an account? </p>
              <Link to="/register" className="a">
                sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

//------

export default Login;
