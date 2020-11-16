import { NotificationManager } from 'react-notifications';

export const deleteElement = ElementObject => {
    const addedElements = localStorage.getItem("cartelements");
    var cartElements = [{}];
    if (addedElements != null) {
        cartElements = JSON.parse(addedElements);
    } else return;

    const index = cartElements.findIndex(e => e.hasOwnProperty("Object") ? e.ObjectID === ElementObject.ObjectID : 0);

    cartElements.splice(index, 1); 
    localStorage.setItem("cartelements", JSON.stringify(cartElements));

    window.location.reload();
}

export const AddToBasket = (element, orderType) => {
    let array = [{}];
    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    console.log(tomorrowDate);
    const todayDate = new Date();

    const arrayInStorage = localStorage.getItem("cartelements");
    if (arrayInStorage != null) {
        array = JSON.parse(arrayInStorage);
    }

    console.log(arrayInStorage);

    const newObject = {
        Object: element,
        ExpireDate: tomorrowDate,
        OrderType: orderType,
        ObjectID: element.props.carName + todayDate.getTime()
    }
    array.push(newObject);
    
    localStorage.setItem("cartelements", JSON.stringify(array));
    updateCartSize();
    NotificationManager.success(`${element} has been added to basket.`, "Success", 2500);
}

export const checkExpirationDate = () => {
    const todayDate = new Date();

    const addedElements = localStorage.getItem("cartelements");
    
    if (addedElements !== undefined && addedElements !== null) {
        const cartElements = JSON.parse(addedElements);

        cartElements.map(e => {
            if (e.hasOwnProperty("Object")) {
                const date = new Date(e.ExpireDate);
                if (date.getTime() < todayDate.getTime()) {
                    deleteElement(e);
                }
            }
            return 0;
        });
    }
}

export const updateCartSize = () => {
    const addedElements = localStorage.getItem("cartelements");
    
    if (addedElements !== undefined && addedElements !== null) {
        let cartSize = 0;
        const cartElements = JSON.parse(addedElements);
       
        cartElements.map(e => {
            if (e.hasOwnProperty("Object")) {
                ++cartSize;
            }
            return 0;
        })

        const spanSelector = document.querySelector(".navbar-header-cart-items");
        const selector = document.querySelector(".navbar-header-cart-items > p");
        if (cartSize > 0) {
            spanSelector.style.visibility = "visible";
            selector.innerHTML = cartSize;
        } else {
            spanSelector.style.visibility = "hidden";
            selector.innerHTML = 0;
        }
    }
}