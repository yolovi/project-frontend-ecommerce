import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GetUserLogged from "./components/GetUserLogged/GetUserLogged";
import Logout from "./components/Logout/Logout";
import Header from "./components/Header/Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Header>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<GetUserLogged />} />
            </Routes>
          </Header>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
