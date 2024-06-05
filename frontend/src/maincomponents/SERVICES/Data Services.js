import React from "react";
import ServicesComponent from "./ServicesComponent.json";
import AOS from "aos";
const DataServices = () => {
  //   console.log(ServicesComponent[13]);
  const { servicebannerimage, servicemobileimage } =
    ServicesComponent[1].ServicesAllHeadingAndContent[0];
  const { dataSer_managementData } = ServicesComponent[13];
  const {
    dataSer_image,
    dataSer_sub_image,
    dataServicesHeading,
    dataServicesContent,
    dataServices_sub_Content,
  } = ServicesComponent[1].ServicesAllHeadingAndContent[8];
  //    console.log(dataSer_managementData)
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  return (
    <div style={{ backgroundColor: "#F1F7FB" }}>
      <div>
        <img
          src={servicebannerimage}
          width="100%"
          alt="Main Service"
          className="mainimg img-fluid d-none d-md-block"
        />
        <img
          src={servicemobileimage}
          alt="no-display"
          className="sunimg img-fluid d-md-none w-100"
        />
      </div>
      <div data-aos="fade-down">
        <div className="text-center p-4 fs-1">
          <span style={{ color: " #0f62fe " }}>{dataServicesHeading} </span>
        </div>
        <div className="container font-weight-normal fs-5 pb-5 ">
          <p>{dataServicesContent}</p>
          <p style={{ color: "gray" }}>{dataServices_sub_Content}</p>
        </div>
      </div>
      <div className="container">
        <div className="row row-col-md-1">
          <div className="col-12 col-md-6">
            <div className="mb-md-5 mb-2">
              <div className="bg-white p-1 p-md-2 pt-md-5 pb-md-5 border rounded">
                <img src={dataSer_image} alt="" className="img-fluid  w-100" />
              </div>
            </div>
            <div className="mb-md-5 mb-2">
              <div className="bg-white p-1 p-md-2 pt-md-5 pb-md-5 border rounded">
                <img
                  src={dataSer_sub_image}
                  alt=""
                  className="img-fluid  w-100"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <div className="row">
              {dataSer_managementData.map((curr, index) => (
                <div className="col-12 col-md-6 mb-3 d-flex" key={index}>
                  <div className="border rounded p-3 bg-white position-relative">
                    <ul className="list-unstyled flex-grow-1">
                      <li
                        className="list-group-item fs-5"
                        style={{ color: "#FE0000" }}
                      >
                        {curr.name}
                      </li>
                      {Object.entries(curr).map(([key, value], subIndex) => {
                        if (key === "name" || key === "url") {
                          return null;
                        }
                        return (
                          <li key={subIndex} className="list-group-item p-2">
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                    <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="row">
              {dataSer_managementData.map((curr, index) => (
                <div className="col-12 col-md-6 mb-3 d-flex" key={index}>
                  <div className="border rounded p-3 position-relative w-100">
                    <ul className="list-unstyled">
                      <li className="list-group-item fs-5">{curr.name}</li>
                      {Object.entries(curr).map(([key, value], subIndex) => {
                        if (key === "name" || key === "url") {
                          return null;
                        }
                        return (
                          <li key={subIndex} className="list-group-item p-2">
                            {value}
                          </li>
                        );
                      })}
                    </ul>
                    <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataServices;
