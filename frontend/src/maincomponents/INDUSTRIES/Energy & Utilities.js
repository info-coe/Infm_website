import React from "react";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const EnergyUtilities = ({ product }) => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true
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

  console.log(managementData);
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div >
          {/* <img
            src={soloutionImage.url}
            alt=""
            className="w-100 mainimg img-fluid d-md-block"
          /> */}
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
        <div className="row justify-content-md-center">
          {managementData.map((curr, index) => (
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
                        className={`list-group-item p-1 ${
                          index >= Object.keys(curr).length - 2
                            ? "no-bullet"
                            : ""
                        }`}
                      >
                        <span className="p-1">
                          <FaCheck
                            style={{ color: " #0f62fe" }}
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
        <div className="d-flex container text-center pt-5 flex-wrap">
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
        </div>
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
