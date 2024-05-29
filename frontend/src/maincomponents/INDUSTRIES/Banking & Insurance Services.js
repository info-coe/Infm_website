import React from "react";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
// import { SolutionOfferings } from '../../reusablecomponents/SolutionOfferings';
import AOS from "aos";
import industriesContent from "./industriesContent.json";
const BankingInsuranceServices = () => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  const {
    banking,
    insurance,
    solution,
    offerings,
    industriesmainimage,
    industriesSubimage,
    solution_para,
    technology,
    servicesmainbulb,
  } = industriesContent[0];
  const { mediacloudcomp, mediadataservices } = industriesContent[2];
  const {
    // energy_utility,
    // energy_utility_sub,
    man_auto_detail,
    man_auto_contact,
    man_auto_today,
    banking_para,
  } = industriesContent[3];
  const { banking_manage } = industriesContent[1];
  
  return (
    <div>
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
              <span style={{ color: " #0f62fe " }}>{banking} </span>
              <span style={{ color: "#FF0000" }}>{insurance}</span>
            </div>
            <div className="container font-weight-normal fs-md-5 pb-5">
              <p>{banking_para}</p>
            </div>
          </div>
        </div>

        <div
          className="w-100 overflow-none"
          style={{ backgroundColor: "#F1F7FB" }}
        >
          <div className="container fs-1 font-weight-normal">
            <span style={{ color: "#FF0000" }}> {solution}{" "}</span>
            <span style={{ color: " #0f62fe" }}>{offerings}</span>
            <div className="fs-5 font-weight-normal">
              <p>{solution_para}</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            {banking_manage.map((curr, index) => (
              <div
                data-aos="zoom-in"
                className="col-md-5 m-3 border rounded position-relative"
                key={index}
              >
                <div className="">
                  <div className="p-3">
                    <img
                      src={curr.url}
                      className="img-fluid"
                      style={{
                        width: "10%",
                        border: "2px solid #ccc",
                        borderRadius: "5px",
                      }}
                      alt="Customized_Image"
                    />
                  </div>
                  <ul className="font-weight-normal">
                    <li className="list-group-item fs-5">{curr.name}</li>
                    {Object.entries(curr).map(([key, value], index) => {
                      if (key === "name") {
                        return null;
                      } else if (key === "url") {
                        return null;
                      }
                      return (
                        <li
                          key={index}
                          className={`list-group-item p-2 ${
                            index >= Object.keys(curr).length - 2
                              ? "no-bullet"
                              : ""
                          }`}
                        >
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default BankingInsuranceServices;
