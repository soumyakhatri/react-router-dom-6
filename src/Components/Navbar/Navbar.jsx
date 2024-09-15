import React from 'react';
import './Navbar.css'; // Make sure to include the CSS file
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="contact-us">Contact Us</Link>
        <NavLink to="/services">Services</NavLink>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
