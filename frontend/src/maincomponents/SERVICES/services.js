import React from 'react';
// import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';
import serviceContent from './ServicesComponent.json'
import ServicesCardOpen from '../../reusablecomponents/servicescardopen';


const Services = () => {
  // const data = props.product;
  const cardData = serviceContent[0].ServicesData
 const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
 const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage

  return (
    <div>
      <img
        src={serviceMainimage}
        width="100%"
        alt="Main Service"
        className="mainimg img-fluid d-none d-md-block"
      />
      <img
        src={serviceSubimage}
        alt="Sub Service"
        className="sunimg img-fluid d-md-none w-100"
      />

      <h1 className="text-center">{serviceContent[1].ServicesAllHeadingAndContent[0].serviceHeading}</h1>
      {/* <h1 className="text-center text-danger mt-5">{serviceContent[0].serviceHeading}</h1> */}
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: '80px' }}>
          {cardData.map((data, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              style={{ marginBottom: '80px' }}
            >
              <ServicesCardOpen
                title={data[`t${index + 1}`]} // Use template literal to access dynamic property names
                description={data[`Des${index + 1}`]} // Similarly, for description
                icon={data[`icon${index + 1}`]} //
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
