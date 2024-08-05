import React from "react";
import ServicesCardOpen from "../../reusablecomponents/servicescardopen";

const Services = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  const cardData = data
    .map((item) => item.Services)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
  const serviceMainimage = data
    .map((item) => item.servicebannerimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
  const serviceSubimage = data
    .map((item) => item.servicemobileimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

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

      {cardData.map((item, index) => (
        <div key={index}>
          <h1 className="text-center text-danger mt-5">
            {item.serviceHeading}
          </h1>
          <div className="container">
            <div
              className="row justify-content-center"
              style={{ marginTop: "80px" }}
            >
              {item.ServicesData.map((data, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                  style={{ marginBottom: "80px" }}
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
      ))}
    </div>
  );
};

export default Services;
