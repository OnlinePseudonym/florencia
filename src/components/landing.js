import React from 'react';
import Divider from './divider';
import "./landing.css";

const Landing = () => {
    return (
        <div id="landing" className="landing">
            <h1 className="landing__title">Florencia</h1>
            <h2 className="landing__title--secondary">the Pizza Bistro</h2>
            <a className="landing__button" href="#menu">View Menu</a>
            <Divider className="divider--steep divider--blue divider--bottom" />
        </div>
    )
}

export default Landing;