import { Routes, Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import Home from "./pages/Home";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
