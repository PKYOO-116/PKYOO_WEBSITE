import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WhoAmI from "./pages/WhoAmI.jsx";
import Projects from "./pages/Projects.jsx";
import Daily from "./pages/Daily.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}