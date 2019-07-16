import React from "react";
import './Navbar.css';

const Navbar = props => (
    <nav className="navbar">
        <h3>Reading List - Google Book Search</h3>
        <a href="/saved">Saved</a>
        <a href="/">Search</a>
    </nav>
)

export default Navbar;