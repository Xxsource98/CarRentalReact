import React from 'react'

// Styles
import "./contactStyle.scss"

// Images
import Phone from "../../Images/Icons/phone.png"
import Address from "../../Images/Icons/address.png"
import Facebook from "../../Images/Icons/facebook.png"

const Contact = () => {

    return (
        <div>
            <div className="site-content-header">Contact</div>
            <div className="site-content-container">
                <div className="site-content-container-content">
                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Name" required={true}/>
                            <input type="email" placeholder="Email" required={true}/>
                            <textarea placeholder="Message..." required={true}/>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                    <div className="contact-forms">
                        <div className="contact-forms-element">
                            <img src={Phone} alt="Phone" />
                            <p>+1-541-754-3010</p>
                        </div>
                        <div className="contact-forms-element">
                            <img src={Address} alt="Address" />
                            <p>Menlo Park, CA 94025</p>
                        </div>
                        <div className="contact-forms-element">
                            <img src={Facebook} alt="Facebook" />
                            <a href="facebook.com">fb.com/expresscars</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;