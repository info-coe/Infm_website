import React from "react";
// import { TiTick } from "react-icons/ti"
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
const AirlineTravelLogistics = ({ product }) => {
  const {
    industries1Heading,
    industries11Heading,
    industriesText,
    industries1Heading2,
    industries12Heading,
    industriesText2,
    cloudComputing,
    dataServices,
    managementData,
    technology,
    offerings,
    industriesImage,
    industriesImage12,
    industriesDetail,
    industrieContactText,
    industriTodaytext,
  } = product.industrie_page;

  AOS.init({
    offset: 120,
    delay: 1,
    duration:2000,
    once: false,
    mirror: true,
    
  });
  AOS.refresh();

  const { url } = product;
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div>
          <img src={url} className="w-full" />
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            {industries1Heading}{" "}
            <span style={{ color: "#FF0000" }}>{industries11Heading}</span>
          </div>
          <div className="container pb-5">{industriesText}</div>
        </div>
      </div>

      <div data-aos="fade-left">
        <div className="row">
          <div className="col-md-12 position-relative">
            {/* Single div with image and text */}
            <div className="w-100 position-relative">
              <img
                src={industriesImage.url}
                className="w-100"
                alt="Image"
                style={{ height: "500px" }}
              />
              <p
                className="position-absolute z-index-1 fs-1"
                style={{
                  top: "50%",
                  left: "15%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {industries1Heading2}
                <span style={{ color: "#FF0000" }}>{industries12Heading}</span>
              </p>
              <div >
                <p
                  className="position-absolute z-index-1 fs-5"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-20%, -50%)",
                  }}
                >
                  {industriesText2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Product Management */}
      <div>
        <div
          className="gradient-bg py-5"
          style={{
            background:
              "linear-gradient(to right, #F1A00B 15%, #0f62fe 50%, #0f62fe  100%)",
          }}
        >
          <div className="d-flex" data-aos="fade-down-right">
            {managementData.map((curr) => (
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

      {/*Technology Offering  #0f62fe */}
      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}> {technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        <div className="d-flex container text-center pt-5">
          <div className="" data-aos="fade-up">
            {cloudComputing.map((curr) => (
              <p className="border rounded p-2">{curr.m1}</p>
            ))}
          </div>
          <div className="" data-aos="zoom-in">
            <img src={industriesImage12.url} className="img-fluid w-50" />
          </div>
          <div data-aos="fade-up">
            {dataServices.map((curr) => (
              <p className="border rounded p-2">{curr.m2}</p>
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

export default AirlineTravelLogistics;
