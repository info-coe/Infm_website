
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const MainSlider = ({MainSlideData}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
    const sliderRef = useRef(null);
    const slides= MainSlideData.HB_slides;
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        beforeChange: (current, next) => {
            setAnimating(true);
            setTimeout(() => {
                setCurrentSlide(next);
                setAnimating(false);
            }, 600); // Match the animation duration
        },
    };

    const handleDotClick = (index) => {
        sliderRef.current.slickGoTo(index); // Go to the corresponding slide
    };

    return (
        <section className="main-slider">
            <Slider {...settings} className="slider-box" pauseOnHover={false} ref={sliderRef}>
                {slides.slice(0, 6).map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="image-layer" style={{ backgroundImage: `url(${slide.Bg_image})`, opacity: "0.6" }}></div>
                        <img src={slide.imgSrc} className="slide-img" alt={slide.title} width="350" height="350" />
                        <p className="img-para">{MainSlideData.HB_rightmindset}</p>
                        <div className="auto-container">
                            <div className={`content ${animating && currentSlide === index ? 'cont-zoom-out' : ''} ${!animating && currentSlide === index ? 'cont-zoom-in' : 'hidden'}`}>
                                <div className={`big-title ${animating && currentSlide === index ? 'cont-zoom-out' : ''} ${!animating && currentSlide === index ? 'cont-zoom-in' : 'hidden'}`}>
                                    <h2>
                                        <span className="ttl-font-family cap d-flex flex-wrap" style={{ width: "60%" }}>
                                            <i>
                                                <span className="primary-clr text-primary">{slide.title.split(',')[0]}</span>
                                                <span className="secondry-clr text-danger"> {slide.title.split(',')[1]}</span>
                                            </i>
                                        </span>
                                    </h2>
                                    <p className={`banner-para mt-md-4 mt-1`} style={{ color: "#01003e" }} dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                                </div>
                                <div className="btns-box">
                                    <Link className="btn-one style2" to="/Contact">
                                        <span className="txt">{MainSlideData.HB_contactusBtn} &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slide">
                    <div className="image-layer" style={{ backgroundImage: `url(${slides[6].image})`, opacity: "0.6" }}></div>
                    <img src={slides[6].imgSrc} className="slide-img" alt={slides[6].title} width="350" height="350" />
                    <p className="img-para">THE RIGHT MIND SET</p>
                    <div className="auto-container">
                        <div className={`content ${animating && currentSlide === 6 ? 'cont-zoom-out' : ''} ${!animating && currentSlide === 6 ? 'cont-zoom-in' : 'hidden'}`}>
                            <div className={`big-title ${animating && currentSlide === 6 ? 'cont-zoom-out' : ''} ${!animating && currentSlide === 6 ? 'cont-zoom-in' : 'hidden'}`}>
                                <h2>
                                    <span className="ttl-font-family cap d-flex flex-wrap" style={{ width: "60%" }}>
                                        <i>
                                            <span className="primary-clr text-primary">{slides[6].title.split(',')[0]}</span>
                                            <span className="secondry-clr text-danger"> {slides[6].title.split(',')[1]}</span>
                                        </i>
                                    </span>
                                </h2>
                                <p className={`banner-para mt-md-4 mt-1`} style={{ color: "#01003e" }} dangerouslySetInnerHTML={{ __html: slides[6].description }}></p>
                            </div>
                            <div className="btns-box">
                                <Link className="btn-one style2" to="/Careers">
                                    <span className="txt">{MainSlideData.HB_moredetailsBtn} &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div className="custom-dots">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default MainSlider;


