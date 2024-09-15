import React from 'react'
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import ContactUs from './Components/ContactUs/ContactUs';
function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Login/>} />
      </Routes>
  )
}

export default AppRouter