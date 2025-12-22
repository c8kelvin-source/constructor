import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Menu điều hướng */}
      <nav>
        <Link to="/">Trang chủ</Link> |{" "}
        <Link to="/about">Giới thiệu</Link> |{" "}
        <Link to="/contact">Liên hệ</Link>
      </nav>

      {/* Khai báo các route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
