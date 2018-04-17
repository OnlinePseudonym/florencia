import React from 'react';
import GoogleMap from './google_map';
import './location.css';
import Facebook from './facebook';
import Instagram from './instagram';
import Email from './email';

const Hours = () => {
    return (
        <div id="location" className="location">
            <h2 className="section-title location__section-title">hours and location</h2>
            <div className="location__content">
                <div className="contact-icons">
                    <a href="https://www.facebook.com/Florencia-Pizza-Bistro-154152167958314/" target="_blank"><Facebook /></a>
                    <a href="https://www.instagram.com/florenciapizza/" target="_blank"><Instagram /></a>
                    <a href="mailto:florenciapizzabistro@msn.com"><Email /></a>
                </div>
                <div className="address">
                    <a className="address__link" href="https://www.google.com/maps/place/Florencia+Pizza+Bistro/@33.3164068,-112.0056048,17z/data=!3m1!4b1!4m5!3m4!1s0x872b04f76b425c19:0xed4e02dfbf55618a!8m2!3d33.3164068!4d-112.0034161" target="_blank"><p>3646 E Ray Rd,<br />Phoenix, AZ, 85044</p></a>
                    <a className="phone" href="tel:1-480-704-7404">480-704-7404</a>
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