import React from "react";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import IndustriesContent from "../INDUSTRIES/industriesContent.json";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";

const ManufacturingAutomotive = () => {
  const {
    industriesmainimage,
    industriesSubimage,
    automotive,
    manufacturing,
    solution,
    offerings,
    technology,
    servicesmainbulb,
  } = IndustriesContent[0];
  const {
    man_auto_para,
    man_auto_para_sub,
    man_auto_detail,
    man_auto_contact,
    man_auto_today,
  } = IndustriesContent[3];
  const { man_auto_ManagementData } = IndustriesContent[4];
  const { man_auto_Cloud_Computing, man_auto_Data_Services } =
    IndustriesContent[5];

  React.useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 1,
      duration: 2000,
      once: true,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // const { url} = product;
  return (
    <div className="" style={{ overflow: "hidden" }}>
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

      {/* Heading and Text */}
      <div className="row" data-aos="zoom-in-up">
        <div className="col-md-12">
          <div data-aos="fade-down">
            <div className="text-center p-4 fs-1">
              {manufacturing}{" "}
              <span style={{ color: "#FF0000" }}>{automotive}</span>
            </div>
            <div className="container pb-5">{man_auto_para}</div>
          </div>
        </div>
      </div>

      {/* Dual Column Content */}
      <div className="row" id="industries">
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
          <div className="p-4">
            <h2 className="fs-1">
              {solution} <span style={{ color: "#FF0000" }}>{offerings}</span>
            </h2>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in-up">
          <div className="p-4">
            <p className="fs-md-5">{man_auto_para_sub}</p>
          </div>
        </div>
      </div>

      {/* Product Management */}
      <div className="row">
        <div className="col-md-12">
          <div
            className="gradient-bg py-5"
            style={{
              background:
                "linear-gradient(to right, #F1A00B 15%, #0f62fe 50%, #0f62fe  100%)",
            }}
          >
            <div
              className="d-md-flex flex-md-row flex-column"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              {man_auto_ManagementData.map((curr) => (
                <div className="text-white">
                  <ul className="font-weight-normal">
                    <li className="list-group-item fs-5">{curr.name}</li>
                    {Object.entries(curr).map(([key, value], index) => {
                      if (key === "name") return null; // Skip rendering name property
                      return (
                        <li
                          key={index}
                          className={`list-group-item p-1 ${
                            index >= Object.keys(curr).length - 2
                              ? "no-bullet"
                              : ""
                          }`}
                        >
                          <span className="p-1">
                            <FaCheck
                              size={
                                index === Object.keys(curr).length - 1
                                  ? "1.4em"
                                  : "1.2em"
                              }
                            />
                          </span>
                          {value}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Offering */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center p-4 fs-1" data-aos="zoom-in">
              <span style={{ color: "#FF0000" }}> {technology}</span>&nbsp;
              <span style={{ color: " #0f62fe" }}>{offerings}</span>
            </div>
          </div>
        </div>

        <TechnologyOfferings
          cloudComputing={man_auto_Cloud_Computing}
          industriesImage12={servicesmainbulb}
          dataServices={man_auto_Data_Services}
        />
      </div>

      {/* Industries Detail */}
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

export default ManufacturingAutomotive;
