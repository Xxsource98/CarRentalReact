import React from 'react'

// Components
import { NotificationManager } from 'react-notifications';
import CartElement from './cartElement'


// Style
import "../../siteContent.scss"
import "./cart.scss"

const Cart = () => {
    const addedElements = localStorage.getItem("cartelements");
    var cartElements = [{}];

    if (addedElements !== null && addedElements !== [{}]) {
        cartElements = JSON.parse(addedElements);
    }
    
    const mappedElements = cartElements.map(e => {
        const curDate = new Date();
        if (e.hasOwnProperty("Object")) {
            return (
                <CartElement 
                    carObject={e}
                    carImage={e.Object.props.carImage}
                    carName={e.Object.props.carName}
                    carOrderType={e.OrderType}
                    carPrice={e.Object.props.carPrice}
                    expireDate={e.ExpireDate}
                />
            )
        } else {
            return <div key={curDate.getTime() + Math.random()}>Cart is Empty</div>
        }
    });

    const totalPrice = () => {
        const allPrices = [];
        let totalAmount = 0;

        cartElements.map(e => {
            if (e.hasOwnProperty("Object")) {
                allPrices.push(e.Object.props.carPrice.caution)
                allPrices.push(e.OrderType === "For Day" ? e.Object.props.carPrice.forDay : e.OrderType === "For Week" ? e.Object.props.carPrice.forWeek : e.Object.props.carPrice.forMonth);
            }
            return 0;
        });

        for (const price of allPrices) {
            totalAmount += price;
        }

        return totalAmount;
    }

    const clearCart = () => {
        if (window.confirm("Are You Sure?")) {
            if (localStorage.getItem("cartelements") != null) {
                localStorage.removeItem("cartelements");
                window.location.reload();
            }
            else {
                alert("Cart is Empty!");
            }
        }
    }

    return (
        <div>
            <div className="site-content-header">Your Cart</div>
            <div className="site-content-container">
                <div className="site-content-container-content">
                    <div className="cart-container">
                        {mappedElements}      
                        <hr/>
                        <div className="cart-checkout-container">
                            <button onClick={() => NotificationManager.success(`Thanks for using my Site!\nTotal Amount: ${totalPrice()}€`, "Success", 2500)}>Checkout</button>
                            <button onClick={() => clearCart()}>Clear Cart</button>
                            <p className="total-price">Total Price: {totalPrice()}€</p>    
                        </div>                
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;