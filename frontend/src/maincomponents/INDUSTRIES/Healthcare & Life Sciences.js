import React from "react";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import industriesContent from "./industriesContent.json";
const HealthcareLifeSciences = ()=> {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 1000,
    once: true,
  });
  console.log(industriesContent);

  const {
    health,
    sciences,
    solution,
    offerings,
    industriesmainimage,
    industriesSubimage,
    solution_para,
    technology,
    servicesmainbulb,
  } = industriesContent[0];

  const { man_auto_detail, man_auto_contact, man_auto_today, health_para } =
    industriesContent[3];
  const { health_management } = industriesContent[4];
  const { man_auto_Data_Services, health_Cloud_Computing } =
    industriesContent[5];

  return (
    <div>
      <div className="" style={{ overflow: "hidden" }}>
        <div>
          <div>
          <img
        src={industriesmainimage}
        width="100%"
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={industriesSubimage}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />
          </div>
          <div
            style={{
              backgroundImage: `url("https://infomericainc.com/Content/images/industries-banner1.jpg")`,
            }}
          >
            <div data-aos="zoom-in">
              <div className="text-center p-4 fs-1">
                <span style={{ color: " #0f62fe " }}>{health} </span>
                <span style={{ color: "#FF0000" }}>{sciences}</span>
              </div>
              <div className="container font-weight-normal fs-md-5 pb-5">
                <p>{health_para}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 overflow-none" style={{ backgroundColor: "" }}>
          <div className="container fs-1 font-weight-normal">
            <span style={{ color: "#FF0000" }}> {solution} </span>
            <span style={{ color: " #0f62fe" }}>{offerings}</span>
            <div className="fs-5 font-weight-normal">
              <p>{solution_para}</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            {health_management.map((curr, index) => (
              <div
                data-aos="zoom-in-up"
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
                    <li className="list-group-item text-danger fs-md-5">
                      {curr.name}
                    </li>
                    <li className="list-group-item">{curr.m1}</li>

                    {curr.sub.map((cur, k) => (
                      <div className="p-md-2">
                        <ul className="font-weight-normal p-1" key={k}>
                          {Object.entries(cur).map(([key, value], index) => {
                            if (key === "name") {
                              return null;
                            } else if (key === "url") {
                              return null;
                            }

                            return (
                              <li
                                key={index}
                                className={`list-group-item p-1 ${
                                  index >= Object.keys(curr).length - 2
                                    ? "no-bullet"
                                    : ""
                                }`}
                              >
                                {key === "f" ? null : (
                                  <span className="p-1">
                                    <FaCheck
                                      // style={{ color: " #0f62fe" }}
                                      size={
                                        index === Object.keys(curr).length - 1
                                          ? "1.4em"
                                          : "1.2em"
                                      }
                                    />
                                  </span>
                                )}
                                {value}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
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
            cloudComputing={health_Cloud_Computing}
            industriesImage12={servicesmainbulb}
            dataServices={man_auto_Data_Services}
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

export default HealthcareLifeSciences;
