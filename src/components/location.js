import React from 'react';
import GoogleMap from './google_map';
import './location.css';

const Hours = () => {
    return (
        <div id="location" className="location">
            <h2 className="hours--title">HOURS AND LOCATION</h2>
            <div className="hours">
                <div className="address">
                    <p className="address-txt">3646 E Ray Rd,<br />Phoenix, AZ, 85044</p>
                    <p classNmae="address-txt">480-704-7404</p>
                </div>
                <div className="operating-hours">
                    <div>Mon - Wed: <span className="hours-open">4pm - 9pm</span></div>
                    <div>Thursday: <span className="hours-open"> 11am - 9pm</span></div>
                    <div>Friday: <span className="hours-open"> 11am - 10pm</span></div>
                    <div>Saturday: <span className="hours-open"> 11am - 10pm</span></div>
                    <div>Sunday: <span className="hours-open"> 11am - 9pm</span></div>
                </div>
            </div>
            <GoogleMap />
        </div>
    )
}

export default Hours;