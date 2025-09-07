import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../Userpannel/Register";
import Login from "../Userpannel/Login";
import Products from "../Products/Products";
import Singleproduct from "../Products/Singleproduct";
import Home from "../Home/Home";
import Search from "../Search/Search.tsx";
import Notfound from "../Notfound/notfound.tsx";
import Resultsearch from "../Search/Resultsearch.tsx";

function Wapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <Search />
      {/* Resultsearch */}
      <Routes>
        <Route path="/Registerpage" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:slug" element={<Singleproduct />} />
        <Route path="/Resultsearch" element={<Resultsearch/>} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Wapper;
// Slider
