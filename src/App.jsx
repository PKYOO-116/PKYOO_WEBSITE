import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import WhoAmI from "./pages/WhoAmI.jsx";
import Daily from "./pages/Daily.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const noScrollPages = ["/", "/contact"];
    if (noScrollPages.includes(location.pathname.toLowerCase())) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.pathname]);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}