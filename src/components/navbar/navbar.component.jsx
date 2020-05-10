import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";

export const Navbar = ({ color }) => (
  <div className="navbar">
    <div className="navbar__logo">BookIT</div>
    <ul className="nav">
      <li className={`nav-item ${color ? "dark" : ""}`}>
        <Link to="/">About Us</Link>
      </li>
      <li className={`nav-item ${color ? "dark" : ""}`}>
        <Link to="/">Contact Us</Link>
      </li>
      <li className={`nav-item ${color ? "dark" : ""}`}>
        <Link to="/">Bus</Link>
      </li>
      <li className={`nav-item ${color ? "dark" : ""}`}>
        <Link to="/">Hotel</Link>
      </li>
      <li className={`nav-item ${color ? "dark" : ""}`}>
        <Link to="/">Flight</Link>
      </li>
    </ul>
  </div>
);
