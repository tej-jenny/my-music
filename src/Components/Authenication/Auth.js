import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./../../Assets/image1.jpg";
import image2 from "./../../Assets/image2.jpg";
import image3 from "./../../Assets/image3.jpg";
import image4 from "./../../Assets/image4.jpg";
import image5 from "./../../Assets/image5.jpg";
import image6 from "./../../Assets/image6.jpg";

const Auth = ({ loggedIn }) => {
  return (
    <div>
      <div className="heroContent">
        <h1>Welcome to My-Music</h1>
        <p>Organize, view and create Spotify playlists easily!</p>
        <p>Login to Spotify to try it out!</p>
        <button className="btn login" onClick={() => loggedIn()}>
          <i className="fa fa-spotify" aria-hidden="true"></i>Log in with
          Spotify
        </button>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg"/>
          <img src={image2} className="sliderimg"/>
          <img src={image3} className="sliderimg"/>
          <img src={image4} className="sliderimg"/>
          <img src={image5} className="sliderimg"/>
          <img src={image6} className="sliderimg"/>
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Auth;