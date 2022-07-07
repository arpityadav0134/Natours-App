import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"
import React from 'react'

const ImageSlider = ({ images }) => {

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item, id) => (
                        <div key={id + 1}>
                            <img src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;
