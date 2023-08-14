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
  const register = async (user) => {
    console.log(user);
    const res = await axios.post(API_URL + "/users", user); //url de la api y la ruta que pusimos en backend, user: el que se conecta en frontend por form
  };
  const login = async (user) => {
    console.log(user);
    const res = await axios.post(API_URL + "/users/login", user); 
    dispatch({
      type: "LOGIN", //es el CASE que corresponde con el switch del UserReducer
      payload: res.data, //aquí se guarda el token que recoge de res.data
    });
    if (res.data) {
      //si ha ido bien la petición
      localStorage.setItem("token", JSON.stringify(res.data.token)); //aquí se guarda el token, para que el usuario no se desconecte al refrescar la pág.
    }
  };
  const getUserLogged = async () => {
    const token = JSON.parse(localStorage.getItem("token")); //para dar acceso al usuario autenticado(si en la ruta backend lo solicita): recogemos token de usuario loggeado y se lo pasamos por headers al authoritation
    const res = await axios.get(
      API_URL + "/users/orders", //TODO: crear en backend userLogged (para traer la info de usuario y cambiar esta linea)
      {
        headers: {
          authorization: token, 
        },
      }
      );
      dispatch({
        type: "GET_USER_LOGGED",
        payload: res.data, // y aquí lo guardaremos mediante el case de UserReducer
      })
  };
  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "/users/logout",  
    {
      headers: {
        authorization: token,
      },
    });
    dispatch({ //vaciamos el estado > cuando vaya al UserReducer le diremos que user y token sean null
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) { // eliminamos el token del localStorage
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



