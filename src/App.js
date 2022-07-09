import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Pages/Home";
import UpdateProduct from "./components/Pages/UpdateProduct";
import Header from "./Shared/Header";
import AllProduct from "./components/Pages/AllProduct";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
          <Route path="/product" element={<AllProduct />} />
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
