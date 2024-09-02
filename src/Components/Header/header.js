import React from 'react';
// import ReactDOM from 'react-dom';
import logo from '../../images/logo.svg';


const Header = () => {

    return (
        <div className={"header"}>
            <div className="logo">
                <img
                    src={logo}
                    alt="loop" srcset=""/>
            </div>
            <nav className="navbar">
                <div>
                    <ul className="nav-links">
                        <li>
                            <button>About</button>
                        </li>
                        <li>
                            <button>Careers</button>
                        </li>
                        <li>
                            <button>Events</button>
                        </li>
                        <li>
                            <button>Products</button>
                        </li>
                        <li>
                            <button>Support</button>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Header;