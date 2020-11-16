import React from 'react'

import * as siteArrays from "../../siteArrays" 
import * as CartFunctions from "../Cart/cartFunctions"

import "../../siteContent.scss"
import "./selectedCar.scss"

const SelectedCar = () => {    
    var currentElement = [];
    const url = window.location.href;
    const carName = String(url.slice(url.search("/car/")).split('-').join(' ')).slice(5);
    
    for (const element of siteArrays.carsList) {
        if (element.props.carName.toLocaleLowerCase() === carName) {
            currentElement = element;
        } else continue;
    }

    if (currentElement.length === 0) {
        return (
        <div>
            <div className="site-content-header">Error</div>
            <div className="site-content-container">
                <p>Car is invalid.</p>
            </div>
        </div>)
    } 
    const prop = currentElement.props;

    return (
        <div>
            <div className="site-content-header">{prop.carName}</div>
            <div className="site-content-container">
                <div className="site-content-container-content">
                    <div className="selected-car-header">
                        <div className="selected-car-header-img">
                            <img src={prop.carImage.Source} alt={`${prop.carImage.Creator} | ${prop.carImage.Art}`} title={`${prop.carImage.Creator} | ${prop.carImage.Art}`}/>
                        </div>
                        <div className="selected-car-header-price-box">
                            <div className="selected-car-header-price-box-price-container">
                                <div className="selected-car-header-price-box-price-element">
                                    <p>Caution: </p>
                                    <p>{prop.carPrice.caution}€</p>
                                </div>
                                <div className="selected-car-header-price-box-price-element">
                                    <p>For Day: </p>
                                    <p>{prop.carPrice.forDay}€</p>
                                </div>    
                                <div className="selected-car-header-price-box-price-element">
                                    <p>For Week: </p>
                                    <p>{prop.carPrice.forWeek}€</p>
                                </div>                
                                <div className="selected-car-header-price-box-price-element">
                                    <p>For Month: </p>
                                    <p>{prop.carPrice.forMonth}€</p>
                                </div>                       
                            </div>
                            <select className="current-price-select-c" name="current-price-select">
                                <option value="For Day">For Day</option>
                                <option value="For Week">For Week</option>
                                <option value="For Month">For Month</option>
                            </select>
                            <button className="header-button" onClick={() => CartFunctions.AddToBasket(currentElement, document.querySelector(".current-price-select-c").value)}>Add to Basket</button>
                            <p className="small-text">For custom select, contact with us</p>
                        </div>
                    </div>
                    <div className="selected-car-specs">
                        <div className="selected-car-specs-left-container">
                            <div className="selected-car-specs-element">
                                <p>Body Style</p>
                                <p>{prop.carParameters.bodyStyle}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Power</p>
                                <p>{prop.carParameters.carPower} HP</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Number of Seats</p>
                                <p>{prop.carParameters.numberOfSeats}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Number of Doors</p>
                                <p>{prop.carParameters.numberOfDoors}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Color</p>
                                <p>{prop.carParameters.carColor}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Transmission</p>
                                <p>{prop.carParameters.carTransmission}</p>
                            </div>
                        </div>
                        <div className="selected-car-specs-right-container">
                            <div className="selected-car-specs-element">
                                <p>Mileage</p>
                                <p>{prop.carParameters.carMileage} KM</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Fuel Type</p>
                                <p>{prop.carParameters.carFuelType}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Production Year</p>
                                <p>{prop.carParameters.carProdYear}</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Torque</p>
                                <p>{prop.carParameters.carTorque} RPM</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Acceleration to 100kmph</p>
                                <p>{prop.carParameters.accelerationTo100}s</p>
                            </div>
                            <div className="selected-car-specs-element">
                                <p>Maximum Speed</p>
                                <p>{prop.carParameters.maximumSpeed} KM/h</p>
                            </div>
                        </div>
                    </div>
                    <div className="selected-car-description-container">
                        <div className="selected-car-description">
                            {prop.description}
                            <br/> 
                            <p>The image original source is from: <a href={prop.carImage.Art}>{prop.carImage.Creator}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedCar;