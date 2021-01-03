import React from "react";
import './styles.css';

function Footer() {
    return (
        <footer className="footer">

            <a href="http://linkedin.com/in/shay-daniel" className='footerText'>linkedIn</a> |
            <a href="http://github.com/shaydaniel7" className='footerText'> github</a> |
            <a href="http://shaydaniel.com" className='footerText'> graphic design</a> | 
            <a href="mailto: shay@shaydaniel.com" className='footerText'> email</a>

        </footer>
    );
}

export default Footer;