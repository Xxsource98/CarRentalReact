import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

// Pictures
import CloseIMG from "../../Images/Icons/close.png";

export const SelectedElement = {
    LowToHigh: false,
    HighToLow: false,
}

export const CreatePriceFilterBox = ({
    filterText = "",
    className = "",
    arrayElements = [],
}) => {
    const [ currentElement, setCurrentElement ] = useState("Default");
    const history = useHistory();
    const urlParams = new URLSearchParams(history.location.search);

    const setPriceURL = (price_type) => {
        let brandsString = "";
        if (urlParams.has("brands")) {
            brandsString = urlParams.getAll("brands");
        }

        window.location.href = history.createHref({
            pathname: `cars?brands=${brandsString}&price=${price_type}`
        });    
        window.location.reload();
    }

    const setCurrentElementFromURL = () => {
        if (urlParams.has("price")) {
            setCurrentElement(urlParams.get("price") === "pricetohigh" ? "Price to High" : urlParams.get("price") === "pricetosmall" ? "Price to Small" : "Default");
        } else return;
    }

    const mappedArray = arrayElements.map(e => {
        return (
            <div key={e.ElementID} className={`filter-container-box-element ${e.ElementID}`} onClick={f => {
                setCurrentElement(e.ElementText);
                setPriceURL(e.ElementID);
                document.querySelector(`.${className}`).classList.toggle("active");
                
            }}>{e.ElementText}</div>
        )
    });

    useEffect(() => {
        setCurrentElementFromURL();
    });

    return (
        <div className={`filter-container-box ${className}`} onClick={f => {
            const selector = document.querySelector(`.${className}`);
            if (f.target !== selector) {
                return;
            }
            else {
                selector.classList.toggle("active");
            }
        }}>
            <p>{filterText}</p>
            <p>{currentElement}</p>
            <div className="filter-container-box-dropdown">
                {mappedArray}
            </div>
        </div>
    )
}

export const CreateSelectBrandFilterBox = ({
    filterText = "",
    className = "",
    arrayElements = [],
}) => {
    let selectedBrandsArray = [];
    const history = useHistory();
    const urlParams = new URLSearchParams(history.location.search);

    const setURLTo = (URL) => {
        let pricePathElement = "";

        if (urlParams.has("price")) {
            pricePathElement = urlParams.get("price");
        }

        window.location.href = history.createHref({
            pathname: `${URL}&price=${pricePathElement}`
        });    
        window.location.reload();
    }

    const PushFilterURL = (array) => {
        const mappedArray = array.map(e => { return `${e.ElementID},`; });
        const selectedBrands = mappedArray.join(" ");
        let brandsPathElements = "";
        
        if (urlParams.has("brands")) {
            const brandsInURL = urlParams.getAll("brands");
            brandsPathElements = selectedBrands.concat(brandsInURL);
        } else {
            brandsPathElements = selectedBrands;
        }

        setURLTo(`cars?brands=${brandsPathElements}`);
    }

    const pushElementToArray = (elementID, element) => {
        const index = window.location.href.search(elementID);
        if (index >= 0) {
            return;
        } else {
            selectedBrandsArray.push({ // I didn't use hook set function, because it wasn't work property
                ElementID: elementID,
                ElementText: element
            });
        }
    }
    
    const removeElement = element => {
        const brands = urlParams.get("brands").split(",");
        const index = brands.findIndex(e => e === element);
        if (index>= 0) {
            brands.splice(index, 1);
            setURLTo(`cars?brands=${brands}`);
         } else {
             return;
         }
    }

    const getBrandsArrayFromURL = () => {
        if (urlParams.has("brands")) {
            const brands = urlParams.get("brands").split(",");
            for (const brand of brands) {           
                if (brand === "")
                    continue;

                const eText = brand.charAt(0).toUpperCase() + brand.slice(1);
                 
                let parent = document.querySelector(".filter-container-box-dropdown-selected-brands");

                const newElement = document.createElement("div");
                newElement.setAttribute("class", `filter-container-box-element ${brand}`);
                newElement.addEventListener("click", e => {
                    removeElement(brand);
                });
                newElement.innerHTML = eText;

                const img = document.createElement("img");
                img.setAttribute("src", CloseIMG);
                img.setAttribute("alt", "CloseButton");

                newElement.appendChild(img);

                parent.appendChild(newElement);                
            }
        } else return;
    }

    const mappedBrandsArray = selectedBrandsArray.map(e => {
        return (        
            <div key={e.ElementID} className={`filter-container-box-element ${e.ElementID}`} onClick={f => {
                removeElement(e.ElementID);
            }}>
                {e.ElementText}
                <img src={CloseIMG} alt="CloseButton"/>
            </div>
        )
    }); 

    const mappedArray = arrayElements.map(e => {
        return (
            <div key={e.ElementID} className={`filter-container-box-element ${e.ElementID}`} onClick={f => {
                pushElementToArray(e.ElementID, e.ElementText);
                PushFilterURL(selectedBrandsArray);
            }}>{e.ElementText}</div>
        )
    });

    useEffect(() => getBrandsArrayFromURL());

    return (
        <div className={`filter-container-box ${className}`} onClick={f => {
            const selector = document.querySelector(`.${className}`);
            if (f.target !== selector) {
                return;
            }
            else {
                selector.classList.toggle("active");
            }
        }}>
            <p>{filterText}</p>
            <div className="filter-container-box-dropdown">
                <div className="filter-container-box-dropdown-selected-brands">
                    {mappedBrandsArray}
                </div>
                <hr/>
                {mappedArray}
            </div>
        </div>
    )
}
