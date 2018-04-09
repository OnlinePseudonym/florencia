import React from 'react';
import "./nav.css";

const Nav = () => {
    return (
        <nav className="nav">
            <h2 className="nav--logo"><a href="#landing">FPB</a></h2>
            <a href="#location" className="nav__item">LOCATION</a>
            <a href="#about" className="nav__item">ABOUT</a>
            <a href="#menu" className="nav__item">MENU</a>
        </nav>
    )
}

export default Nav;