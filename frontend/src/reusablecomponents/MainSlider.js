// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const MainSlider = () => {
//     const slides = [
//         {
//             image: 'https://infomericainc.com/Content/images/bg-1.jpg',
//             imgSrc: 'https://infomericainc.com/Content/images/Innovative%20Solutions.png',
//             title: 'Innovative Solutions',
//             description: 'Our teams of experts are <span style="background:#fe0000;padding:0px 10px;color:#fff"> dedicated to continuous learning and exploration, </span>enabling us to develop and implement groundbreaking solutions that drive transformation and create value.'
//         },
//         {
//             image: 'https://infomericainc.com/Content/images/bg2.jpg',
//             imgSrc: 'https://infomericainc.com/Content/images/Cutting%20Edge%20Technology.png',
//             title: 'Cutting-Edge Technologies',
//             description: 'We harness the <span style="background:#fe0000;padding:0px 10px;color:#fff"> power of the latest, most advanced technologies </span>to provide solutions that are scalable, adaptable, and future-ready, keeping you ahead in the ever-evolving digital landscape.'
//         },
//         {
//             image: 'https://infomericainc.com/Content/images/bg-1.jpg',
//             imgSrc: 'https://infomericainc.com/Content/images/Sustaibale%20&%20Ethical%20Practices.png',
//             title: 'Sustainable and Ethical Practices',
//             description: 'We are devoted to maintaining the highest standards of ethics and sustainability, ensuring our operations are <span style="background:#fe0000;padding:0px 10px;color:#fff"> transparent, responsible, and environmentally friendly.</span>'
//         }
//     ];

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 1000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000
//     };

//     return (
//         <section className="main-slider">
//             <Slider {...settings} className="slider-box">
//                 {slides.map((slide, index) => (
//                     <div className="slide" key={index}>
//                         <div className="image-layer" style={{ backgroundImage: `url(${slide.image})`, width: '100%' }}></div>
//                         <img src={slide.imgSrc} style={{ position: 'absolute', top: '5%', right: '10%', zIndex: '9999', width: '22%' }} alt={slide.title} />
//                         <p className="img-para">THE RIGHT MIND SET</p>
//                         <div className="auto-container">
//                             <div className="content">
//                                 <div className="big-title">
//                                     <h2>
//                                         <span className="ttl-font-family">
//                                             <span className="primary-clr">{slide.title.split(' ')[0]}</span>
//                                             <span className="secondry-clr"> {slide.title.split(' ')[1]}</span>
//                                         </span>
//                                     </h2>
//                                     <p className="banner-para" style={{ width: '50%', textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: slide.description }}></p>
//                                 </div>
//                                 <div className="btns-box">
//                                     <a className="btn-one style2" href="/contact">
//                                         <span className="border-box"></span>
//                                         <span className="bg bg--gradient"></span>
//                                         <span className="txt">Contact Us &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//         </section>
//     );
// };

// export default MainSlider;


import React,{useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MainSlider = () => {
    const sliderRef = useRef(null);
    const slides = [
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Innovative%20Solutions.png',
            title: 'Innovative,Solutions',
            description: 'Our teams of experts are <span style="background:#fe0000;padding:0px 10px;color:#fff"> dedicated to continuous learning and exploration, </span>enabling us to develop and implement groundbreaking solutions that drive transformation and create value.'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg2.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Cutting%20Edge%20Technology.png',
            title: 'Cutting-Edge,Technologies',
            description: 'We harness the <span style="background:#fe0000;padding:0px 10px;color:#fff"> power of the latest, most advanced technologies </span>to provide solutions that are scalable, adaptable, and future-ready, keeping you ahead in the ever-evolving digital landscape.'
        },
        {
            image: 'https://infomericainc.com/Content/images/bg-1.jpg',
            imgSrc: 'https://infomericainc.com/Content/images/Sustaibale%20&%20Ethical%20Practices.png',
            title: 'Sustainable and,Ethical Practices',
            description: 'We are devoted to maintaining the highest standards of ethics and sustainability, ensuring our operations are <span style="background:#fe0000;padding:0px 10px;color:#fff"> transparent, responsible, and environmentally friendly.</span>'
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear',
        beforeChange: (current, next) => {
            // Add closing class to the current slide
            document.querySelectorAll('.slick-slide')[current].classList.add('slick-closing');
        },
        afterChange: current => {
            // Remove closing class from all slides
            document.querySelectorAll('.slick-slide').forEach(slide => slide.classList.remove('slick-closing'));
            // Add current class to the new slide
            document.querySelectorAll('.slick-slide')[current].classList.add('slick-current');
        }
    };

    return (
        <section className="main-slider">
            <Slider {...settings} className="slider-box" pauseOnHover={false}>
                {slides.map((slide, index) => (
                    <div className="slide" key={index}>
                        <div className="image-layer" style={{ backgroundImage: `url(${slide.image})`,opacity:"0.6" }}></div>
                        <img src={slide.imgSrc} className="slide-img" alt={slide.title} width="350" height="350"/>
                        <p className="img-para">THE RIGHT MIND SET</p>
                        <div className="auto-container">
                            <div className="content">
                                <div className="big-title">
                                    <h2>
                                        <span className="ttl-font-family cap d-flex flex-wrap" style={{width:"50%"}}>
                                            <i>
                                            <span className="primary-clr text-primary">{slide.title.split(',')[0]}</span>
                                            <span className="secondry-clr text-danger"> {slide.title.split(',')[1]}</span>
                                            </i>
                                        </span>
                                    </h2>
                                    <p className="banner-para mt-md-4 mt-1" style={{ color:"#01003e" }} dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                                </div>
                                <div className="btns-box">
                                    <a className="btn-one style2" href="/contact">
                                        <span className="border-box"></span>
                                        <span className="bg bg--gradient"></span>
                                        <span className="txt">Contact Us &nbsp;&nbsp;&nbsp;<i className="fa fa-angle-right"></i></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default MainSlider;
