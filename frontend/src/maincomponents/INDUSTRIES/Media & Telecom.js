import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import IndustriesContent from "../INDUSTRIES/industriesContent.json";
console.log(IndustriesContent[0]);
const MediaTelecom = () => {
  const data = IndustriesContent[0];
  const slideData = IndustriesContent[1].mediatelsoloff1;
  const cloud = IndustriesContent[2].mediacloudcomp;
  const dataservices = IndustriesContent[2].mediadataservices;

  // console.log(cloud)

  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
      <img src={data.industriesmainimage}  alt='Main Industries' className="img-fluid d-none d-md-block"  />
            <img src={data.industriesSubimage} alt='Sub Industries' className="img-fluid d-md-none w-100" />
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{data.mediaHead} </span>
            <span style={{ color: "#FF0000" }}>{data.telecomHead}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{data.mediapara1}</p>
            <p>{data.mediapara2}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {data.solution}</span>&nbsp;
          <span style={{ color: " #0f62fe" }}>{data.offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{data.solutionpara}</p>
          </div>
        </div>
        <SolutionOfferings managementData={slideData} />
      </div>

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{data.technology}</span>&nbsp;
          <span style={{ color: " #0f62fe" }}>{data.offerings}</span>
        </div>

        <TechnologyOfferings
          cloudComputing={cloud}
          industriesImage12={data.servicesmainbulb}
          dataServices={dataservices}
        />
      </div>

      <div className="container pt-5">
        {/* <p>
          {industriesDetail},
          <span style={{ color: "#FF0000" }}>{industrieContactText}</span>
          {industriTodaytext}
        </p> */}
      </div>
    </div>
  );
};

export default MediaTelecom;
