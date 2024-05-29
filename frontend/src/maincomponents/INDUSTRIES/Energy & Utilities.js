import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import industriesContent from "./industriesContent.json";
const EnergyUtilities = () => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  console.log(industriesContent);

  const {
    energy,
    utility,
    solution,
    offerings,
    industriesmainimage,
    industriesSubimage,
    solution_para,
    technology,
    servicesmainbulb,
  } = industriesContent[0];
  const { energy_utility, energy_utility_sub,man_auto_detail,
    man_auto_contact,
    man_auto_today, } = industriesContent[3];
  const { energy_utility_manage } = industriesContent[1];
  const { mediacloudcomp, mediadataservices } = industriesContent[2];
  console.log(industriesContent[2]);
  // const {
  //   // industriesImage12,
  //   // technology,
  //   // soloutionImage,
  //   // offerings,
  //   // cloudComputing,
  //   // dataServices,
  //   // industriesDetail,
  //   // industrieContactText,
  //   // industriTodaytext,
  // } = product.industriesEnergyUtilities;

  // const {image}= industriesImage12.url
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div>
          <img
            src={industriesmainimage}
            height="250"
            alt="no-display"
            className="responsive-image d-none d-md-block"
            style={{ objectFit: "cover" }}
          />
          <img
            src={industriesSubimage}
            alt="no-display"
            className="responsive-image d-md-none"
          />
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{energy} </span>
            <span style={{ color: "#FF0000" }}>{utility}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{energy_utility}</p>
            <p>{energy_utility_sub}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {solution} </span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{solution_para}</p>
          </div>
        </div>
        <SolutionOfferings managementData={energy_utility_manage} />
      </div>

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={mediacloudcomp}
          industriesImage12={servicesmainbulb}
          dataServices={mediadataservices}
        />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">
            <p>
              {man_auto_detail},
              <span style={{ color: "#FF0000" }}>{man_auto_contact} </span>
              {man_auto_today}
            </p>
          </div>
        </div>
    </div>
    </div>
  );
};

export default EnergyUtilities;
