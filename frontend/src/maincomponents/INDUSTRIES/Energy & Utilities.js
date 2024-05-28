import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";

const EnergyUtilities = ({ product }) => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  const {
    industries1Heading,
    industries11Heading,
    industriesText,
    industriesText11,
    industries1Heading2,
    industries12Heading,
    industriesText2,
    managementData,
    industriesImage12,
    technology,
    // soloutionImage,
    offerings,
    cloudComputing,
    dataServices,
    industriesDetail,
    industrieContactText,
    industriTodaytext,
  } = product.industriesEnergyUtilities;

  // const {image}= industriesImage12.url
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div id="enery">
         
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{industries1Heading} </span>
            <span style={{ color: "#FF0000" }}>{industries11Heading}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{industriesText}</p>
            <p>{industriesText11}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {industries1Heading2}</span>
          <span style={{ color: " #0f62fe" }}>{industries12Heading}</span>
          <div className="fs-5 font-weight-normal">
            <p>{industriesText2}</p>
          </div>
        </div>
        <SolutionOfferings
          managementData={managementData}
         
        />
      </div>

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        {/* <div className="d-flex container text-center pt-5 flex-wrap">
          <div className="col-12 col-md-4" data-aos="fade-up">
            {cloudComputing.map((curr, index) => (
              <p key={index} className="border rounded p-2">
                {curr.m1}
              </p>
            ))}
          </div>
          <div className="col-12 col-md-4">
            <img
              src={industriesImage12.url}
              className="img-fluid w-50"
              alt=""
            />
          </div>
          <div className="col-12 col-md-4" data-aos="fade-up">
            {dataServices.map((curr, index) => (
              <p key={index} className="border rounded p-2">
                {curr.m2}
              </p>
            ))}
          </div>
        </div> */}
        <TechnologyOfferings cloudComputing={cloudComputing} industriesImage12={industriesImage12}
          dataServices={dataServices}/>
      </div>

      <div className="container pt-5">
        <p>
          {industriesDetail},
          <span style={{ color: "#FF0000" }}>{industrieContactText}</span>
          {industriTodaytext}
        </p>
      </div>
    </div>
  );
};

export default EnergyUtilities;
