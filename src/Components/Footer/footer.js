import React from 'react';
import logo from '../../images/logo.svg'




const Footer = () => {
    return (

        <div className={"footer"}>
            <div className="footer-logo">
                <img src={logo} alt="loopstudio logo"/>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
                <div className="footer-links">
                    <ul>
                        {/*<li>*/}
                        <img src="../../images/facebook.svg" alt=""/>
                        {/*</li>*/}
                        <li>
                            <img src="../../images/twitter.svg" alt=""/>
                        </li>
                        <li>
                            <img src="../../images/pinterest.svg" alt=""/>
                        </li>
                        <li>
                            <img src="../../images/instagram.svg" alt=""/>
                        </li>
                    </ul>
                    <li>
                        <img src="../../images/instagram.svg" alt=""/>
                    </li>
                </div>
            </div>
            <li>
                <img src="../../images/instagram.svg" alt=""/>
            </li>
        </div>

    );
};

export default Footer;