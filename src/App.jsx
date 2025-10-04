import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import WhoAmI from "./pages/WhoAmI.jsx";
import Daily from "./pages/Daily.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}