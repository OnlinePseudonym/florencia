import React from 'react';
import Divider from './divider';
import "./landing.css";

const Landing = () => {
    return (
        <div id="landing" className="landing">
            <h1 className="landing__title">Florencia</h1>
            <h2 className="landing__title--secondary">the Pizza Bistro</h2>
            <Divider className="divider--blue divider--bottom" />
        </div>
    )
}

export default Landing;