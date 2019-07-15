import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.scss';

export const Navbar = () => (
  <div className="navbar">
    <ul className="nav">
      <li className="nav-item"><Link to="/" >About Us</Link></li>
      <li className="nav-item"><Link to="/">Contact Us</Link></li>
      <li className="nav-item"><Link to="/">Bus</Link></li>
      <li className="nav-item"><Link to="/">Hotel</Link></li>
      <li className="nav-item"><Link to="/">Flight</Link></li>
    </ul>
  </div>
)
