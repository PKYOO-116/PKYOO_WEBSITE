import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import WhoAmI from "./pages/WhoAmI";
import Projects from "./pages/Projects";
import Daily from "./pages/Daily";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/daily" element={<Daily />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}