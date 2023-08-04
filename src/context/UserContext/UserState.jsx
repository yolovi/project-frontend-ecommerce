import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:3000";

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

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

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState, userReducer);
