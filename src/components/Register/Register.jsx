import React, { useContext, useState } from 'react';
import {  notification } from "antd";
import { UserContext } from '../../context/UserContext/UserState';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name_user = event.target.name_user.value;
    const last_name = event.target.last_name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (!name_user || !last_name || !email || !password) {
      notification.error({
        message: "Register Failed",
        description: "Please fill in both email and password fields.",
      });
    } else {
      try {
        await register({ name_user, last_name, email, password }); // Call the register function from context
        notification.success({
          message: "User created Successfully",
          description: "Please Log in",
        });
        setTimeout(() => {
          //setTimeout para que le de tiempo a procesar la información
          navigate("/login");
        }, 3000);
      } catch (error) {
        notification.error({
          message: "Register Failed",
          description: "Complete all the fields and insert a valid email or password",
        });
      }
    }
  };


  return (
    <>
      <div className="container-flex">
        <div className="card">
          <h2 className='title' >Register</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="inputBox">
              <input
                type="text"
                name="name_user"
                required
                placeholder="Insert your "
              />
              <span className="user">Name</span>
            </div>
            <div className="inputBox">
              <input
                type="text"
                name="last_name"
                required
                placeholder="Insert your "
              />
              <span>Last Name</span>
            </div>
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
        
            <button className="btn-black" type="submit">
            Create
            </button>
            <div className="con">
              <p>Already have an account? </p>
              <Link to="/login" className="a">
              log in
            </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};




export default Register