import React from 'react'

// Components
import * as Filter from './filterboxElements';
import CarWidgets from './carWidgets'
import * as siteArrays from '../../siteArrays';

// Style
import "../../siteContent.scss"
import "./carsStyle.scss";

const OurCars = () => {
    return (
        <div>
            <div className="site-content-header">Our Cars</div>
            <div className="site-content-container">
                <div className="cars-site-container">
                    <div className="site-content-container-content">
                        <div className="cars-site-filter-container">
                            <Filter.CreateSelectBrandFilterBox filterText="Look For" className="brand-filter-box" arrayElements={siteArrays.filterBrandArray}/>
                            <Filter.CreatePriceFilterBox filterText="Sort By" className="price-filter-box" arrayElements={siteArrays.filterPriceArray}/>
                        </div>                          
                        <CarWidgets widgetsArray={siteArrays.carsList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCars;