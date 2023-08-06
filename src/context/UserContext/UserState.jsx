import { createContext, useReducer } from "react";
import userReducer from "./UserReducer";
import axios from "axios"; //hay que instalar axios: npm i axios y después autoimportar

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:3000"; // la url del backend

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
//guardaremos 2 veces el token del user en el userState (dispatch > payload) y en el localStorage
  const login = async (user) => {
    console.log(user)
    const res = await axios.post(API_URL + "/users/login", user); //url de la api y la ruta que pusimos en backend, user: el que se conecta en frontend por form
    dispatch({
      type: "LOGIN", //es el CASE que corresponde con el switch del UserReducer
      payload: res.data, //aquí se guarda el token que recoge de res.data
    });
    if (res.data) { //si ha ido bien la petición
      localStorage.setItem("token", JSON.stringify(res.data.token));//aquí se guarda el token, para que el usuario no se desconecte al refrescar la pág.
    }
  };

  const register = async (user) => {
    console.log(user)
    const res = await axios.post(API_URL + "/users", user); //url de la api y la ruta que pusimos en backend, user: el que se conecta en frontend por form

  }

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
        register,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserContext = createContext(initialState, userReducer);
