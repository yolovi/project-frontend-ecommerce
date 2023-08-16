import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";
import { ProductsProvider } from "./context/ProductsContext/ProductsState";
import Product from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import GetUserLogged from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Orders/Orders";

function App() {
  return (
    <>
      <UserProvider>
        <ProductsProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Product />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<GetUserLogged />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </BrowserRouter>
        </ProductsProvider>
      </UserProvider>
    </>
  );
}

export default App;
