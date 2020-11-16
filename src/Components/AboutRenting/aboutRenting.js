import React from 'react'
import { Link } from 'react-router-dom'

import "./aboutRenting.scss"

const AboutRenting = () => {
    return (
        <div>
            <div className="site-content-header">About Renting</div>
            <div className="site-content-container">
                <div className="site-content-container-content">
                    <div className="aboutr-content-description">
                        Fugiat ipsum laborum ipsum do deserunt nisi. Tempor anim incididunt mollit incididunt eiusmod est laboris aute deserunt in. Adipisicing magna ad ad eu aute. Cupidatat incididunt sunt pariatur nostrud non occaecat dolor nostrud veniam incididunt. In sit commodo sint sit reprehenderit incididunt consectetur occaecat.
                        Aliquip aute id nisi do adipisicing sint voluptate sit ullamco quis. Commodo dolore et do exercitation id proident mollit dolore consectetur ut ut occaecat. Est enim consectetur voluptate nulla aute laborum adipisicing duis velit ex reprehenderit. Elit proident irure proident veniam Lorem aliquip duis. Proident et tempor ullamco enim esse aliqua nulla deserunt fugiat nisi qui.
                        Officia commodo Lorem ad do voluptate reprehenderit. Dolor sunt pariatur pariatur sunt quis ad tempor esse. Ut consequat non sunt quis proident mollit cupidatat nostrud est pariatur est irure ipsum dolor. Voluptate eiusmod non duis officia laboris adipisicing nisi magna ipsum in voluptate dolor voluptate. In ea sint velit elit reprehenderit sit exercitation excepteur non non commodo commodo enim. Quis nulla labore laborum eiusmod pariatur.
                    </div>
                    <div className="aboutr-content-routes">
                        <Link to="/aboutr/tou">
                            <button className="aboutr-button">Terms of Use</button>
                        </Link>
                        <Link to="/aboutr/bails">
                            <button className="aboutr-button">Bails</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutRenting;