import React from 'react'
import { Link } from 'react-router-dom';

import "./navbarStyle.scss";

import RightArrow from "../../Images/Icons/arrow_right.png";

const NavbarElement = ({
    elementText = "",
    contextArray = [],
    urlTo = ""
}) => {
    const displayContextMenu = () => {
        const arrayMap = contextArray.length > 0 ? contextArray.map(element => {
            return (<li key={element.id}><Link to={element.urlTo}>{element.elementText}</Link></li>)
        }) : null;

        const drawLI = () => {
            return (
                <div className="navbar-list-item-dropdown">
                    <ul>{arrayMap}</ul>
                </div>
            )
        }

        return contextArray.length > 0 ? drawLI() : null;       
    }

    return (
        <div className="navbar-list-item">
            <Link className="navbar-list-item-a" to={urlTo}>{elementText}</Link>
            <img src={RightArrow} alt="right_arrow"/>
            {displayContextMenu()}
        </div>
    )
}

export default NavbarElement;