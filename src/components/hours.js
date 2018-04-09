import React from 'react';
import './hours.css';

const Hours = () => {
    return (
        <div className="hours">
            <h2 className="hours--title">HOURS AND LOCATION</h2>
            <div className="address">
                {/* <p className="address-txt">Ahwatukee</p> */}            
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
    )
}

export default Hours;