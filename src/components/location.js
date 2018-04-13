import React from 'react';
import GoogleMap from './google_map';
import './location.css';

const Hours = () => {
    return (
        <div id="location" className="location">
            <h2 className="section-title location__section-title">hours and location</h2>
            <div className="location__content">
                <div className="address">
                    <p>3646 E Ray Rd,<br />Phoenix, AZ, 85044</p>
                    <p>480-704-7404</p>
                </div>
                <div className="hours">
                    <div>Mon - Wed: <span>4pm - 9pm</span></div>
                    <div>Thursday: <span> 11am - 9pm</span></div>
                    <div>Friday: <span> 11am - 10pm</span></div>
                    <div>Saturday: <span> 11am - 10pm</span></div>
                    <div>Sunday: <span> 11am - 9pm</span></div>
                </div>
            </div>
            <GoogleMap />
        </div>
    )
}

export default Hours;