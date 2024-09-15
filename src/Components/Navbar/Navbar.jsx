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
        <NavLink to="/services">Services</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
