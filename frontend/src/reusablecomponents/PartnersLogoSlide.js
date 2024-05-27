import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerLogos = ({businesspartners}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    

    return (
        <div className='bg-primary p-2 d-flex'>
        <div className='col-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center'>
        <h2 className='text-white'>{businesspartners[0].businessh2}</h2>
        </div>
        <div className="container bg-light p-3 col-8 col-md-8 col-lg-8">
         
            <section className="customer-logos slider">
                <Slider {...settings} pauseOnHover={false}>
                    {businesspartners[1].logos.map((logo, index) => (
                        <div className="slide" key={index}>
                            
                                <img src={logo} alt={`Logo ${index + 1}`} width="150" height="90" style={{objectFit:"contain"}}/>
                            
                        </div>
                    ))}
                </Slider>
            </section>
            
        </div>
        </div>
    );
};

export default PartnerLogos;
