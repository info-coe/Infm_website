import React from 'react';
import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';

const Services = (props) => {
  const data = props.product;
  
  const cardData = data.servicesData;

  return (
    <div>
      <img
        src={data.serviceMainimage.url}
        width="100%"
        alt="Main Service"
        className="mainimg img-fluid d-none d-md-block"
      />
      <img
        src={data.serviceSubimage.url}
        alt="Sub Service"
        className="sunimg img-fluid d-md-none w-100"
      />

      <h1 className="text-center">{data.serviceHeading}</h1>
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: '90px' }}>
          {cardData.map((data, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              style={{ marginBottom: '80px' }}
            >
              <RoundedImageCard
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
