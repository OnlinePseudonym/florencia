import React from 'react';
import Divider from './divider';
import "./landing.css";

const Landing = () => {
    return (
        <div id="landing" className="landing">
            <h1 className="landing--title-primary">Florencia</h1>
            <h2 className="landing--title-secondary">the Pizza Bistro</h2>
            <Divider className="landing--divider" fill="#111F36" />
        </div>
    )
}

export default Landing;