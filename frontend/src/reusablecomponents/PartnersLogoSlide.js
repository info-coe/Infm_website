import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PartnerLogos = () => {
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

    const logos = [
        "https://infomericainc.com/Content/images/AWS%20Partner.png",
        "https://infomericainc.com/Content/images/IBM.jpg",
        "https://infomericainc.com/Content/images/microsoft.jpg",
        "https://infomericainc.com/Content/images/oracle.jpg",
        "https://infomericainc.com/Content/images/sap.jpg",
        "https://infomericainc.com/Content/images/sales.jpg",
        "https://infomericainc.com/Content/images/uipath.jpg",
        "https://infomericainc.com/Content/images/Mulesoft.jpg",
        "https://infomericainc.com/Content/images/appian.jpg",
        "https://infomericainc.com/Content/images/anywhere.jpg",
        "https://infomericainc.com/Content/images/cisco.jpg",
        "https://infomericainc.com/Content/images/techdata.jpg",
        "https://infomericainc.com/Content/images/pp.jpg",
        "https://infomericainc.com/Content/images/veeam.jpg",
        "https://infomericainc.com/Content/images/blueprism.jpg",
        "https://infomericainc.com/Content/images/talend.jpg",
        "https://infomericainc.com/Content/images/solarwinds.jpg",
        "https://infomericainc.com/Content/images/redhat.jpg"
    ];

    return (
        <div className='bg-primary p-2 d-flex'>
        <div className='col-4 col-md-4 col-lg-4 d-flex align-items-center justify-content-center'>
        <h2 className='text-white'>Business Partners</h2>
        </div>
        <div className="container bg-light p-3 col-8 col-md-8 col-lg-8">
         
            <section className="customer-logos slider">
                <Slider {...settings} pauseOnHover={false}>
                    {logos.map((logo, index) => (
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
