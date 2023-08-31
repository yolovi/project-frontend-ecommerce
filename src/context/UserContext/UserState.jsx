import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import axios from "axios";
import { message } from "antd";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const register = async (user) => {
    const res = await axios.post(API_URL + "/users", user);
  };
  const login = async (user) => {
    const res = await axios.post(API_URL + "/users/login", user);
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };
  const getUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "/users/orders", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "GET_USER_LOGGED",
      payload: res.data,
    });
  };
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout", {
      headers: {
        authorization: token,
      },
    });
    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        register,
        getUserLogged,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState, userReducer);
