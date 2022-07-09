import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Pages/Home";
import UpdateProduct from "./components/Pages/UpdateProduct";
import Header from "./Shared/Header";
import AllProduct from "./components/Pages/AllProduct";
import Login from "./components/Pages/Login";
import NotFound from "./components/Pages/NotFound";
import ProductDetail from "./components/Pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/product" element={<AllProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
