import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessespartnersData = () => {
  const images = [
    { src: 'https://www.infomericainc.com/Content/images/AWS%20Partner.png' },
    { src: 'https://www.infomericainc.com/Content/images/IBM.jpg' },
    { src: 'https://www.infomericainc.com/Content/images/sales.jpg' },
    { src: 'https://www.infomericainc.com/Content/images/appian.jpg' },
    { src: 'https://www.infomericainc.com/Content/images/techdata.jpg' },
    { src: 'https://www.infomericainc.com/Content/images/veeam.jpg' }
  ];

  return (
    <section className="bg-primary mb-5" style={{height:'150px'}}>
      <div className="d-flex p-2 pe-0 h-100">
          <div className="col-lg-4">
            <h2 className="text-white text-center mt-5">Business Partners</h2>
          </div>
          <div className="col-lg-8 bg-white">
            <div
              className="carousel slide"
              style={{ overflow: 'hidden', cursor: 'grab' }}
            >
              <div className="carousel-inner d-flex">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    style={{ flex: '0 0 auto', transition: 'transform 0.5s ease' }}
                  >
                    {/* <img src={image.src} className="d-block mx-auto img-fluid" style={{ width: '100px' }} alt={`Image ${index + 1}`} /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default BusinessespartnersData;
