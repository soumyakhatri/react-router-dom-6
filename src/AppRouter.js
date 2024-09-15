import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Routes>
  );
}

export default AppRouter;
