import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../Userpannel/Register";
import Login from "../Userpannel/Login";
import Products from "../Products/Products";
import Singleproduct from "../Products/Singleproduct";


function Wapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Registerpage" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:slug" element={<Singleproduct />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Wapper;
