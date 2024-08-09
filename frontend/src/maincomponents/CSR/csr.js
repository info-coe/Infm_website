import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CSRkeypillars from "../../reusablecomponents/CSRkeypillars";
import CSRimplementationStrategy from "../../reusablecomponents/CSRimplementationStrategy";

const Csr = (props) => {
  const csrContent = JSON.parse(props.product.csrContent.Content)[0];

  Aos.init();
  return (
    <>
      <img
        src={csrContent.CSR_MainBanner}
        width="100%"
        alt="CSR"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={csrContent.CSR_MobileBanner}
        alt="CSRMobile"
        className="img-fluid d-md-none w-100"
      />
      <div className="container">
        <div
          className=""
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="1300"
        >
          <h1 className="text-center mt-3 mb-5 pb-3">
            <span className="text-primary">
              {csrContent.CSR_PolicyOnCorporate}
            </span>
            &nbsp;
            <span className="" style={{color:"#FE0000"}}>
              {csrContent.CSR_SocialResponsibility}
            </span>
          </h1>

          <h5 className="text-primary">{csrContent.CSR_Vision}</h5>
          <p className="fs-5">{csrContent.CSR_VisionDescription}</p>
          <h5 className="text-primary">{csrContent.CSR_Objective}</h5>
          <p className="fs-5">{csrContent.CSR_ObjectiveDescription}</p>
          <h5 className="text-center mt-5" style={{color:"#FE0000"}}>
            {csrContent.KeyPillarsHeading}
          </h5>
          <div className="d-md-flex justify-content-between mb-4">
            <CSRkeypillars data={csrContent.KeyPillarsData} />
          </div>
        </div>
        <div className="">
          <h5 className="text-center mb-5 mt-5" style={{color:"#FE0000"}}>
            {csrContent.Implementation_Strategy.IS_Heading}
          </h5>

          <div className=" ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 ps-md-3 pe-md-3 ms-md-3 me-md-3 ps-2 pe-2 mb-5">
            <CSRimplementationStrategy
              data={csrContent.Implementation_Strategy.ImplementationStrategy}
            />
          </div>
        </div>
        <div className="pb-5">
          <h5 className="text-center mb-4 mt-4" style={{color:"#FE0000"}}>
            {csrContent.Measurement_Impacty.MI_Heading}
          </h5>
          <p className="mb-5 mt-5">{csrContent.Measurement_Impacty.MI_Para1}</p>
          <p className="mt-4 mb-5">{csrContent.Measurement_Impacty.MI_Para2}</p>
        </div>
      </div>
    </>
  );
};

export default Csr;
