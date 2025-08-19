import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../Userpannel/Register";

function Wapper() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Registerpage" element={<Register />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Wapper;
