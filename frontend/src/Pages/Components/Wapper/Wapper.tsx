import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../Userpannel/Register";
import Login from "../Userpannel/Login";
import Products from "../Products/Products";
import Home from "../Home/Home";
import Search from "../Search/Search.tsx";
import Notfound from "../Notfound/Notfound.tsx";
import Resultsearch from "../Search/Resultsearch.tsx";
import Totalsingelproduct from "../Products/Totalsingelproduct.tsx";
import Cartitem from "../Cartitem/Cartitem.tsx";

function Wapper() {
  return (
    <>
      <div className="dark:bg-slate-800 duration-500 dark:min-h-screen">
        <BrowserRouter>
          <Navbar />
          <Search />
          <Routes>
            <Route path="/Registerpage" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:slug" element={<Totalsingelproduct />} />
            <Route path="/Resultsearch" element={<Resultsearch />} />
            <Route path="/Cartitem" element={<Cartitem />} />
            <Route path="/*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default Wapper;
// Slider
