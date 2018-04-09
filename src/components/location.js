import React from 'react';
import SimpleMap from './simple_map';
import './location.css';

const Location = () => {
    return (
        <div className="location" id="location">
            <div className="hours">
                <div>MONDAY: <span className="hours-open">4pm - 9pm</span></div>
                <div>TUESDAY: <span className="hours-open"> 4pm - 9pm</span></div>
                <div>WEDNESDAY: <span className="hours-open"> 4pm - 9pm</span></div>
                <div>THURSDAY: <span className="hours-open"> 11am - 9pm</span></div>
                <div>FRIDAY: <span className="hours-open"> 11am - 10pm</span></div>
                <div>SATURDAY: <span className="hours-open"> 11am - 10pm</span></div>
                <div>SUNDAY: <span className="hours-open"> 11am - 9pm</span></div>
            </div>
            <div className="map-wrapper">
                <SimpleMap />
                <a href="https://www.google.com/maps/place/Florencia+Pizza+Bistro/@33.3164068,-112.0056048,17z/data=!3m1!4b1!4m5!3m4!1s0x872b04f76b425c19:0xed4e02dfbf55618a!8m2!3d33.3164068!4d-112.0034161" className="directions" target="_blank" rel="noopener noreferrer">GET DIRECTIONS</a>
            </div>
        </div>
    )
}

export default Location;