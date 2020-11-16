import React from 'react';
import { Link } from 'react-router-dom';

import * as siteArrays from '../../siteArrays'

// Style
import "./navbarStyle.scss";

// Images
import BasketIcon from "../../Images/Icons/shop.png";
import Menu from "../../Images/Icons/menu.png";

const Navbar = () => {
    const mappedArray = siteArrays.navbarItems.map(e => { return <li key={e.key}>{e}</li>; });

    return (
        <nav className="navbar">
            <img className="navbar-menu-icon" alt="menu-icon" src={Menu} onClick={
                () => {
                    document.querySelector(".navbar-wrapper").classList.toggle("active");
                }
            }/>
            <div className="navbar-header-logo">
                <a href="/">ExpressCars</a>
            </div>
            <div className="navbar-wrapper">
                <div className="navbar-header-items">
                    <Link to="/cart" className="navbar-header-item">
                        <img src={BasketIcon} alt={BasketIcon}/>
                        <span className="navbar-header-cart-items"><p></p></span>
                    </Link>
                </div>
                <div className="navbar-list-items">
                    <ul>
                        {mappedArray}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;