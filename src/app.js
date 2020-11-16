import React, { useEffect} from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {NotificationContainer} from 'react-notifications'
// Components
import Navbar from "./Components/Navbar/navbar"
import News from "./Components/News/news"
import OurCars from "./Components/Cars/cars"
import SelectedCar from "./Components/Cars/selectedCar"
import Cart from "./Components/Cart/cart"
import AboutRenting from "./Components/AboutRenting/aboutRenting"
import TermsOfUse from "./Components/AboutRenting/termsOfUse"
import Bails from "./Components/AboutRenting/Bails"
import AboutUs from "./Components/AboutUs/aboutUs.js"
import Contact from "./Components/Contact/contact.js"
import * as CartFunctions from "./Components/Cart/cartFunctions"

// Style
import "./style.scss";
import 'react-notifications/lib/notifications.css';

document.addEventListener("scroll", event => {
    if (window.innerWidth > 1190) {
        const Ymax = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const Ycur = window.scrollY;
        const ScrollValue = document.querySelector(".site-scroll-value");
        ScrollValue.style.width = "3px";
        ScrollValue.style.height = `${ (Ycur / Ymax) * 100 }%`;    
    }
    else {
        const Ymax = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const Ycur = window.scrollY;
        const ScrollValue = document.querySelector(".site-scroll-value");
        ScrollValue.style.height = "3px";
        ScrollValue.style.width = `${ (Ycur / Ymax) * 100 }%`;    
    }
});

const App = () => {  
    useEffect(() => {
        CartFunctions.checkExpirationDate();
        CartFunctions.updateCartSize();
    });
    return (
        <Router>
            <div className="container">  
                <NotificationContainer/>
                <div className="site-scroll-value"></div>             
                <Navbar/>
                <div className="site-content">
                    
                        <Switch>

                            <Route exact path="/"> 
                                <News /> 
                            </Route>

                            <Route exact path="/cart">
                                <Cart />
                            </Route>

                            <Route exact path="/aboutr">
                                <AboutRenting />
                            </Route>

                            <Route path="/aboutr/tou">
                                <TermsOfUse />
                            </Route>

                            <Route path="/aboutr/bails">
                                <Bails />
                            </Route>

                            <Route path="/cars">
                                <OurCars />
                            </Route>       

                            <Route path="/car">
                                <SelectedCar />
                            </Route>

                            <Route eaxct path="/aboutus">
                                <AboutUs />
                            </Route>

                            <Route exact path="/contact">
                                <Contact />
                            </Route>

                        </Switch>
                </div>
            </div>
        </Router>
    )
}
export default App;