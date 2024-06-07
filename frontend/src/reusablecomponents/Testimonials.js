import React from 'react';
import  HomeContent  from '../maincomponents/HOME/homeContent.json';

const Testimonials = () => {
  const chunkedData = HomeContent[2].testimonialsData.reduce((result, value, index, array) => {
    if (index % 2 === 0) result.push(array.slice(index, index + 2));
    return result;
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: '#000' }}>
      <div className="container">
        <div className="sec-title-style5 text-center mb-4">
          <h2>
            <span className="text-primary">Our</span> <span className='text-danger'>Testimonials</span>
          </h2>
        </div>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {chunkedData.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {chunkedData.map((chunk, index) => (
            <div key={index} className={`carousel-item  ${index === 0 ? 'active' : ''}`}>
              <div className="container ps-5 pe-5">
                <div className="row">
                  {chunk.map((item, idx) => (
                    <div key={idx} className="col-lg-6 mb-4">
                      <div className="testimonial-card p-4">
                        <div className="row">
                          <div className="testimonial-text">
                            <h5 className="client-name m-2 text-danger">
                              <b>{item.clientName}</b>
                            </h5>
                            <p className='pt-lg-3 lh-2' style={{fontSize:'18px'}}>
                            <img
                              src={item.image}
                              alt={item.clientName}
                              className='rounded-circle float-end w-25'
                            /> {item.testimonial}
                            </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" style={{right:'0px'}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
