import React from "react";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS for animations
import Zoomin from "../../reusablecomponents/zoomin";

const ManufacturingAutomotive = ({ product }) => {
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
    industriesImage12,
    industriesDetail,
    industrieContactText,
    industriTodaytext,
    soloutionImage,
  } = product.industrie_page;
  console.log(industriesText);

  React.useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 1,
      duration: 2000,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // const { url} = product;
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div>
          <img src={soloutionImage.url} className="w-full" alt=""/>
        </div>
      </div>

      {/* Heading and Text */}
      <div className="row" data-aos="zoom-in-up">
        <div className="col-md-12">
          <div data-aos="fade-down">
            <div className="text-center p-4 fs-1">
              {industries1Heading}{" "}
              <span style={{ color: "#FF0000" }}>{industries11Heading}</span>
            </div>
            <div className="container pb-5">{industriesText}</div>
          </div>
        </div>
      </div>
      {/* <Zoomin heading={industries1Heading} content={[industriesText]} /> */}

      {/* Dual Column Content */}
      <div className="row" id="industries">
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
          <div className="p-4">
            <h2 className="fs-1">
              {industries1Heading2}
              <span style={{ color: "#FF0000" }}>{industries12Heading}</span>
            </h2>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in-up">
          <div className="p-4">
            <p className="fs-5">{industriesText2}</p>
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
      </div>

      {/* Technology Offering */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center p-4 fs-1" data-aos="zoom-in">
              <span style={{ color: "#FF0000" }}> {technology}</span>
              <span style={{ color: " #0f62fe" }}>{offerings}</span>
            </div>
          </div>
        </div>
        <div className="d-flex container text-center pt-5">
          <div className="" data-aos="fade-up">
            {cloudComputing.map((curr) => (
              <p className="border rounded p-2">{curr.m1}</p>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <img
              src={industriesImage12.url}
              className="img-fluid"
              alt=""
              style={{ maxWidth: "60%", height: "auto" }}
            />
          </div>
          <div className="col-md-4" data-aos="fade-up">
            {dataServices.map((curr, index) => (
              <p key={index} className="border rounded p-2 mb-2">
                {curr.m2}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Detail */}
      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">
            <p>
              {industriesDetail},
              <span style={{ color: "#FF0000" }}>{industrieContactText}</span>
              {industriTodaytext}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingAutomotive;
