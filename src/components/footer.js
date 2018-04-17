import React from 'react';
import Facebook from './facebook';
import Instagram from './instagram';
import Divider from './divider';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Divider className="divider--grey divider--blue-background" />
            <a href="#" className="footer--logo">FBP</a>
            <div className="footer__content">
                <a href="mailto:florenciapizzabistro@msn.com" className="footer__email">florenciapizzabistro@msn.com</a>
                <p>&copy; Florencia Pizza Bistro 2018</p>
                <p>All rights reserved</p>
            </div>
            <div className="footer--icons">
                <a href="https://www.facebook.com/Florencia-Pizza-Bistro-154152167958314/" target="_blank"><Facebook className="footer--icon" /></a>
                <a href="https://www.instagram.com/florenciapizza/" target="_blank"><Instagram className="footer--icon" /></a>
            </div>
        </div>
    )
}

export default Footer;
