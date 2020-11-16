import React from 'react'
import { Link } from 'react-router-dom'

const CarWidget = ({
    carBrand = "none",
    carName = "none",
    carImage = "",
    carPrice = {
        caution: 0,
        forDay: 0,
        forWeek: 0,
        forMonth: 0
    },
    carParameters = {
        bodyStyle: "-",
        numberOfSeats: 0,
        numberOfDoors: 0,
        carMileage: 1,
        carFuelType: "-",
        carPower: 0,
        carTransmission: "-",
        carColor: "-",
        carTorque: 0,
        carProdYear: 0,
        accelerationTo100: 0,
        maximumSpeed: 0
    },
    description = ""
}) => {
    const getTheSmallestPrice = () => {
        const perDay = carPrice.forDay;
        const perWeek = carPrice.forWeek;
        const perMonth = carPrice.forMonth;

        const array = [ perDay, perWeek, perMonth ];

        return Math.min(...array);
    }

    return (
        <div className={`car-widget brand-${carBrand}`} style={{display: "none"}} key={`${carName}.${carBrand}`}>
            <div className="car-widget-header">
                <p>{carName}</p>
            </div>
            <div className="car-widget-image">
                <Link to={`/car/${carName.toLocaleLowerCase().split(' ').join('-')}`}><img src={carImage.Source} alt={`${carImage.Creator} | ${carImage.Art}`} title={`${carImage.Creator} | ${carImage.Art}`}/></Link>
            </div>
            <div className="car-widget-desc">
                <div className="car-widget-desc-line">
                    <p>Car Power</p>
                    <p>{carParameters.carPower}</p>
                </div>
                <div className="car-widget-desc-line">
                    <p>Transmission</p>
                    <p>{carParameters.carTransmission}</p>
                </div>
                <div className="car-widget-desc-line">
                    <p>Color</p>
                    <p>{carParameters.carColor}</p>
                </div>
                <div className="car-widget-desc-line">
                    <p>Torque</p>
                    <p>{carParameters.carTorque}</p>
                </div>
                <div className="car-widget-desc-line">
                    <p>Production Year</p>
                    <p>{carParameters.carProdYear}</p>
                </div>
            </div>
            <div className="car-widget-footer">
                <p>Starts from <span className="underline">{getTheSmallestPrice()}€</span></p>
                <Link to={`/car/${carName.toLocaleLowerCase().split(' ').join('-')}`}><button>Read More</button></Link>
            </div>
        </div>
    )
}

export default CarWidget;