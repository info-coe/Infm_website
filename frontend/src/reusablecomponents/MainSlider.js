


import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const MainSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animating, setAnimating] = useState(false);
    const sliderRef = useRef(null);

    const slides = [
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Innovative%20Solutions.png',
            title: 'Innovative,Solutions',
            description: 'Our teams of experts are <span style="background:#fe0000;padding:0px 10px;color:#fff"> dedicated to continuous learning and exploration, </span>enabling us to develop and implement groundbreaking solutions that drive transformation and create value.'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Cutting%20Edge%20Technology.png',
            title: 'Cutting-Edge,Technologies',
            description: 'We harness the <span style="background:#fe0000;padding:0px 10px;color:#fff"> power of the latest, most advanced technologies </span>to provide solutions that are scalable, adaptable, and future-ready, keeping you ahead in the ever-evolving digital landscape.'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Sustaibale%20&%20Ethical%20Practices.png',
            title: 'Sustainable and,Ethical Practices',
            description: 'We are devoted to maintaining the highest standards of ethics and sustainability, ensuring our operations are <span style="background:#fe0000;padding:0px 10px;color:#fff"> transparent, responsible, and environmentally friendly.</span>'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/MicrosoftTeams-image.png',
            title: 'Trusted,Partners',
            description: 'Our success is also determined by <span style="background:#fe0000;padding:0px 10px;color:#fff">trusted partners</span> we associate with which helps us to serve our clients faster and efficiently through engagement of our partners productively'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg2.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Group%20Coordination.png',
            title: 'Group,Co-ordination',
            description: 'Infomerica imbibes a practice of <span style="background:#fe0000;padding:0px 10px;color:#fff">collective work culture</span> in order to achieve success and also adopts diverse workforce setup helping to amalgamate various thoughts and ideas'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Industry%20Leading%20Expertise.png',
            title: 'Industry-Leading,Expertise',
            description: 'With 25 of experience, we have cultivated <span style="background:#fe0000;padding:0px 10px;color:#fff">unparalleled knowledge and skills</span> to deliver innovative and reliable solutions that align with industry standards and exceed expectations'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg2.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Discover%20A%20Career%203.png',
            title: "Discover a Career You'll,Cherish",
            description: 'At Infomerica, Inc., we lay a <span style="background:#fe0000;padding:0px 10px;color:#fff">robust foundation for aspiring individuals</span> to carve their careers and mold their future. As a technologically advanced company, we cultivate an uplifting and vibrant environment where emerging talent can bloom and evolve...'
        }
    ];

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
                        <div className="image-layer" style={{ backgroundImage: `url(${slide.image})`, opacity: "0.6" }}></div>
                        <img src={slide.imgSrc} className="slide-img" alt={slide.title} width="350" height="350" />
                        <p className="img-para">THE RIGHT MIND SET</p>
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
                                        <span className="txt">Contact Us &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
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
                                    <span className="txt">More Details &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
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


