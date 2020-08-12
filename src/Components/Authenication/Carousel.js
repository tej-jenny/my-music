import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "./../../Assets/image1.jpg";
import image2 from "./../../Assets/image2.jpg";
import image3 from "./../../Assets/image3.jpg";
import image4 from "./../../Assets/image4.jpg";
import image5 from "./../../Assets/image5.jpg";
import image6 from "./../../Assets/image6.jpg";

const Carousel = () => {
    return (
        <>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} alt="albums" className="sliderimg" />
                <img src={image2} alt="albums" className="sliderimg" />
                <img src={image3} alt="albums" className="sliderimg" />
                <img src={image4} alt="albums" className="sliderimg" />
                <img src={image5} alt="albums" className="sliderimg" />
                <img src={image6} alt="albums" className="sliderimg" />
            </AliceCarousel>
        </>
    )
}

export default Carousel
