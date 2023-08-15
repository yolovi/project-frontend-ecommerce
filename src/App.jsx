import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserProvider } from "./context/UserContext/UserState";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GetUserLogged from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Product from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<GetUserLogged />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
