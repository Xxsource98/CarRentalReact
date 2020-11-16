import React, { useEffect, useState } from 'react'

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
    const [ currentElement, setCurrentElement ] = useState("");

    const setPriceURL = (price_type) => {
        const url = new URL(window.location.href);
        if (url.searchParams.has("price")) {
            url.searchParams.delete("price");
            url.searchParams.append("price", price_type);
            window.location.href = url;
        } else {
            url.searchParams.append("price", price_type);
            window.location.href = url;
        }
    }

    const setCurrentElementFromURL = () => {
        const url = new URL(window.location.href);
        if (url.searchParams.has("price")) {
            const priceParam = url.searchParams.get("price");
            setCurrentElement(priceParam === "pricetohigh" ? "Price to High" : "Price to Small");
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

    const PushFilterURL = (array) => {
        const mappedArray = array.map(e => { return `${e.ElementID},`; });
        const selectedBrands = mappedArray.join(",");
        const url = new URL(window.location.href);
        if (url.searchParams.has("brands")) {
            const brandsInURL = url.searchParams.get("brands");
            const newString = brandsInURL.concat(selectedBrands);
            url.searchParams.set("brands", newString);
            window.location.href = url;
        } else {
            url.searchParams.set("brands", selectedBrands);
            window.location.href = url;
        }
    }

    const removeFromURL = (brand) => {
        const url = new URL(window.location.href);
        if (url.searchParams.has("brands")) {
            const brands = url.searchParams.get("brands").split(",");
            const result = brands.filter(e => e !== brand);
            url.searchParams.set("brands", result);
            window.location.href = url;
        } else return;
    }

    const pushElementToArray = (elementID, element) => {
        const index = window.location.href.search(elementID);
        console.log(index);
        if (index >= 0) {
            return;
        } else {
            selectedBrandsArray.push({ // I didn't use hook set function, because it wasn't work property
                ElementID: elementID,
                ElementText: element
            });
        }
    }
    
    const removeElementFromArray = element => {
        const index = selectedBrandsArray.findIndex(e => e.ElementID === element);
        if (index >= 0) {
           selectedBrandsArray.splice(index, 1); // I didn't use hook set function, because it wasn't work property
        } else {
            return;
        }
    }

    const getBrandsArrayFromURL = () => {
        const href = window.location.href;
        const url = new URL(href);

        if (url.searchParams.has("brands")) {
            const brands = url.searchParams.get("brands").split(",");
            for (const brand of brands) {
                if (brand === "")
                    continue;

                const eText = brand.charAt(0).toUpperCase() + brand.slice(1);
                 
                let parent = document.querySelector(".filter-container-box-dropdown-selected-brands");

                const newElement = document.createElement("div");
                newElement.setAttribute("class", `filter-container-box-element ${brand}`);
                newElement.addEventListener("click", e => {
                    removeElementFromArray(brand);
                    removeFromURL(brand);
                });
                newElement.innerHTML = eText;

                const img = document.createElement("img");
                img.setAttribute("src", CloseIMG);
                img.setAttribute("alt", "CloseButton");

                newElement.appendChild(img);

                parent.appendChild(newElement);                
            }
        }  
        else return;
    }

    const mappedBrandsArray = selectedBrandsArray.map(e => {
        console.log(selectedBrandsArray.length);
        return (        
            <div key={e.ElementID} className={`filter-container-box-element ${e.ElementID}`} onClick={f => {
                removeElementFromArray(e.ElementID);
                PushFilterURL(selectedBrandsArray);
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

    useEffect(() =>{
        getBrandsArrayFromURL();
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
