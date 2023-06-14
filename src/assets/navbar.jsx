import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <a href="company">
                    <img src="/src/assets/images/logo.png" alt="" />
                </a>
                <div className="menu-btn">
                    <div className="navigation">
                        <div className="navigation_items">
                            <a href="#">About Us</a>
                            <a href="#">Furniture</a>
                            <a href="#">Partnerships</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                </div>
                <div className="account">
                    <div className="account-items">
                        <button className="btn">Sign Up</button>
                        <button className="third">
                            <FontAwesomeIcon icon={faBagShopping} />
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;
