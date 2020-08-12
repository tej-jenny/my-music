import React from 'react'
import Auth from '../Authenication/Auth'
import Carousel from '../Authenication/Carousel'

const LandingPage = ({ loggedIn }) => {
    return (
        <div>
            <div className="heroContent">
                <Auth loggedIn={loggedIn} />
                <Carousel />
            </div>
        </div>
    )
}

export default LandingPage
