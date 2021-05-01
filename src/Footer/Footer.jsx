import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">

            <div className="footer__left footer__flex">
                <span>Advertising</span>
                <span>Business</span>
                <span>How Search works</span>
            </div>
            <div className="footer__middle footer__flex">
                <span>Carbon neutral since 2007</span>
            </div>
            <div className="footer__right footer__flex">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Settings</span>
            </div>

        </div>
    )
}

export default Footer;
