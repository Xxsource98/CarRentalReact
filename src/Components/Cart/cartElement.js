import React from 'react'
import { Link } from 'react-router-dom'

import * as CartFunctions from "./cartFunctions"

import "./cart.scss"

const CartElement = ({
    carObject = {},
    carImage = "",
    carName = "",
    carOrderType = "",
    carPrice = {},
    expireDate = "",
}) => {
    const curDate = new Date(expireDate);
    curDate.setDate(curDate.getDate() - 1);

    const startDate = new Date(curDate);
    startDate.setDate(startDate.getDate() + 3);

    const endDate = new Date(curDate);
    endDate.setDate(endDate.getDate() + (carOrderType === "For Day" ? 1 : carOrderType === "For Week" ? 7 : 30))

    return (
        <div className="cart-element-container" key={`${curDate.getTime()}-${carName}`}>
            <div className="cart-element-img">
                <Link to={`/car/${carName.toLocaleLowerCase().split(' ').join('-')}`}><img src={carImage.Source} alt={`${carImage.Creator} | ${carImage.Art}`}></img></Link>
            </div>
            <div className="cart-element-desc">
                <Link to={`/car/${carName.toLocaleLowerCase().split(' ').join('-')}`}><p className="carName">{carName}</p></Link>
                <p>Hire Duration: {carOrderType}</p>
                <div className="short-desc">
                    <p>Hire Start: {startDate.toLocaleDateString()}</p>
                    <p>Hire End: {endDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="cart-element-check">
                <p className="extra">For Day: {carPrice.forDay}</p>
                <p className="extra">For Week: {carPrice.forWeek}</p>
                <p className="extra">For Month: {carPrice.forMonth}</p>
                <p>For Caution: {carPrice.caution}</p>
                <button onClick={() => CartFunctions.deleteElement(carObject)}>Remove</button>
            </div>
        </div>
    )
}

export default CartElement;