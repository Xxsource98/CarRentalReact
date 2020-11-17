import React, { useEffect } from 'react'
import {useHistory} from 'react-router-dom'

const CarWidgets = ({
    widgetsArray = []
}) => {
    const history = useHistory();
    const urlParams = new URLSearchParams(history.location.search);

    /* make everything visible when something is null - tomorrow */
    const makeEverythingVisible = () => {
        const selector = document.querySelectorAll(`.car-widget`);
        for (const selectorElement of selector) {
            selectorElement.style.display = "block";
        }
    }

    useEffect(() => {
        let brandsArray = [];

        /*if (urlParams.has("brands") && urlParams.has("price")) {
            if (urlParams.get("price") === "") { 
                window.location.href = history.createHref({
                    pathname: `cars`
                });    
                window.location.reload();
            }
        }*/

        if (urlParams.has("brands")) {
            brandsArray = urlParams.get("brands").split(",");
            
            if (brandsArray[0] === "") {
                makeEverythingVisible();
                return;
            }

            for (const brand of brandsArray) {
                const selector = document.querySelectorAll(`.brand-${brand}`);
                for (const e of selector) {
                    e.style.display = "none";
                }
                for (const element of widgetsArray) {
                    if (element.props.carBrand === brand) {
                        for (const selectorElement of selector) {
                            selectorElement.style.display = "block";
                        }
                    } else {
                        continue;
                    }
                }
            }
        }
        else {
            makeEverythingVisible();
        };
    });

    const displayWidgets = () => {
        if (urlParams.has("price")) {
            if (urlParams.get("price") !== "pricedefault" || 
                urlParams.get("price") !== "pricetohigh"  ||
                urlParams.get("price") !== "pricetosmall") {
                makeEverythingVisible();
                return widgetsArray;
            }
            
            if (urlParams.get("price") === "pricedefault") {
                return widgetsArray;
            }

            const is_price_to_high = urlParams.get("price") === "pricetohigh";
            const is_price_to_small = urlParams.get("price") === "pricetosmall";

            if (is_price_to_high && !is_price_to_small) {
                const sorted = widgetsArray.sort(function(a, b) {
                    return a.props.carPrice.forDay - b.props.carPrice.forDay;
                }); 
                return sorted;
            }
            if (is_price_to_small && !is_price_to_high) {
                const sorted = widgetsArray.sort(function(a, b) {
                    return b.props.carPrice.forDay - a.props.carPrice.forDay;
                }); 
                return sorted;
            }

            return;
        }
        else {
            return widgetsArray;
        }
    }

    return (
        <div className="cars-site-widgets-container">
            {displayWidgets()}
        </div>
    );    
}

export default CarWidgets;