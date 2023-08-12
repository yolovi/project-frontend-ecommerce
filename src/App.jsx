import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GetUserLogged from "./components/GetUserLogged/GetUserLogged";




function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<GetUserLogged />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
