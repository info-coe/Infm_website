import React, { useState } from "react";
import AI1 from "./Images/AI1.jpg";
import AI2 from "./Images/AI2.jpg";
import AI3 from "./Images/AI3.jpg";
import AIBanner from "./Images/AIBanner.jpg";
import Contactus from "./ContactUs";

export default function InfoAIAccelerator(props) {
  const data = JSON.parse(props.product.ServiceContent.Content);

    const InfoAcceleratorData = data
        .map((item) => item.Info_AI_Accelerator)
        .filter(Boolean)
        .reduce((acc, curr) => acc.concat(curr), [])[0];
    const serviceMainimage = data
        .map((item) => item.servicebannerimage)
        .filter(Boolean)
        .reduce((acc, curr) => acc.concat(curr), []);

    const serviceSubimage = data
        .map((item) => item.servicemobileimage)
        .filter(Boolean)
        .reduce((acc, curr) => acc.concat(curr), []);
    //eslint-disable-next-line no-unused-vars
    const [AIImages, setAIImages] = useState([AI1,AI2,AI3]);

  return (
    <>
      <div className="awsmain">
      <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
      </div>
      <div className="">
        <div className="mt-5 mb-3 pe-5 ps-5">
          <h1 className="text-center"><span className="text-primary">{InfoAcceleratorData.IAA_Head}</span> <span style={{color:"#ff0000"}}>{InfoAcceleratorData.IAA_Head2}</span></h1>
          <div className="d-md-flex gap-4 align-items-center">
            <div className="text-center col-md-3" style={{}}>
              <img src={AIBanner} alt="Services" width="100%" />
            </div>
            <div className="col-md-9">
              <p>
               {InfoAcceleratorData.IAA_content1}
              </p>
              <p>
              {InfoAcceleratorData.IAA_content2}
              </p>
            </div>
          </div>
        </div>

        <div className="container pt-4">
          <h2 className="section-header" style={{color:"#ff0000"}}> {InfoAcceleratorData.IAA_FeaturesHead}</h2>
          <div className="grid-container">
            {InfoAcceleratorData.IAA_Features.map((item, index) => (
              <div className=" m-2 grid-item" key={index}>
                <div className="features-box">
                  <div>
                    <h4 className="features-title">{item.title}</h4>
                    <p className="features-description">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mb-4">
          <h2 className="section-header"><span className="text-primary">{InfoAcceleratorData.IAA_OurServicesHead}</span> <span style={{color:"#ff0000"}}>{InfoAcceleratorData.IAA_OurServicesHead2}</span></h2>
          <div className="grid-container">
            {InfoAcceleratorData.IAA_OurServices.map((item, index) => (
              <div
                key={index}
                className="serviceGridItem shadow m-2 p-3"
              >
                <div className="" style={{ height: "54%" }}>
                  <img src={AIImages[index]} alt="Services" width="70%" />
                </div>
                <h4 style={{ height: "17%" }}>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
     <Contactus/>
    </>
  );
}
