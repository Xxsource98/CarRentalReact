import React, { useEffect } from 'react'

const CarWidgets = ({
    widgetsArray = []
}) => {
    const url = new URL(window.location.href);

    useEffect(() => {
        let brandsArray = [];

        const makeEverythingVisible = () => {
            const selector = document.querySelectorAll(`.car-widget`);
            for (const selectorElement of selector) {
                selectorElement.style.display = "block";
            }
        }

        if (url.searchParams.has("brands")) {
            brandsArray = url.searchParams.get("brands").split(",");
            
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
        const url = new URL(window.location.href);
        if (url.searchParams.has("price")) {
            const is_price_to_high = url.searchParams.get("price") === "pricetohigh";
            const is_price_to_small = url.searchParams.get("price") === "pricetosmall";

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