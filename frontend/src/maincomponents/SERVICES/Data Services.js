import React from "react";
import ServicesComponent from "./ServicesComponent.json";
import AOS from "aos";
import { FaCheck } from "react-icons/fa6";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
// import serviceContent from "./ServicesComponent.json";

const DataServices = () => {
//   console.log(ServicesComponent);
  const { servicebannerimage, servicemobileimage } =
    ServicesComponent[1].ServicesAllHeadingAndContent[0];
  const { dataSer_managementData, dataAnalist, BigData } =
    ServicesComponent[13];
  // console.log(dataAnalist);
  const {
    dataSer_image,
    dataSer_sub_image,
    dataServicesHeading,
    dataServicesContent,
    dataServices_sub_Content,
  } = ServicesComponent[1].ServicesAllHeadingAndContent[8];
  const { ServiceCmsModelsData } = ServicesComponent[3];
  //ServicesComponent[3]
  //   console.log(ServicesComponent[3].ServiceCmsModelsData);

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
        <div className="row row-col-md-1 justify-content-center">
          <div className="col-12 col-lg-6">
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
          {/*Manage ment Data */}
          <div className="col-12  col-lg-5">
            <div className="row">
              {dataSer_managementData.map((curr, index) => (
                <div
                  className="col-12 col-md-6 mb-3 d-flex text-center"
                  key={index}
                >
                  <div className="border rounded p-2 text-center bg-white position-relative">
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
          </div>
          {/*Another Data*/}

          <div className="container">
            <div className="row justify-content-center mb-4">
              {dataAnalist.map((curr, index) => (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex"
                >
                  <div className="border rounded position-relative p-2">
                    <div className="p-3">
                      <img
                        src={curr.url}
                        className="img-fluid"
                        style={{
                          width: "35px", // Adjusted width for better image scaling
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                        }}
                        alt="Customized_Image"
                      />
                    </div>
                    <div>
                      <p className="p-1">{curr.name}</p>
                      <p className="p-1">{curr.p1}</p>
                      {Object.entries(curr).map(([key, value], idx) => {
                        if (
                          key === "h1" ||
                          key === "h2" ||
                          key === "h3" ||
                          key === "h4" ||
                          key === "h5" ||
                          key === "h6"
                        ) {
                          return (
                            <p key={idx} className="mb-2">
                              <FaCheck
                                style={{ color: "#0f62fe", marginRight: "5px" }}
                              />
                              {value}
                            </p>
                          );
                        }
                        return null;
                      })}
                      <p className="p-1">{curr.sub_name}</p>
                      <p className="p-1">{curr.sub_p11}</p>{" "}
                      <p className="p-1">{curr.sub_name}</p>
                      <p className="p-1">{curr.sub_p1}</p>
                      <p className="p-1">{curr.sub_p11}</p>
                    </div>
                    <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              {BigData.map((curr, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div className=" border rounded position-relative">
                    <div className="p-2">
                      <img
                        src={curr.url}
                        className="img-fluid"
                        style={{
                          width: "35px", // Adjusted width for better image scaling
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                        }}
                        alt="Customized_Image"
                      />
                    </div>
                    <p className="p-2">{curr.name}</p>
                    <p className="p-2">{curr.p}</p>
                    <p className="p-1">{curr.sub_Name}</p>
                    <p className="p-1">{curr.sub_p}</p>

                    <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ModelsPoints contents={ServiceCmsModelsData} />
    </div>
  );
};

export default DataServices;

// <li key={idx} className="list-group-item p-2">
// <span className="p-1">
//   <FaCheck
//     style={{ color: "#0f62fe" }}
//     size="1.2em"
//   />
// </span>
// {value}
// </li>
