import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Pages/AddProduct";

import Home from "./components/Pages/Home";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <div className="max-w-7xl mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
