import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import { Link } from "react-router-dom";

const MediaTelecom = (props) => {
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Media_and_Telecom)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <img
          src={data.MT_MainBanner}
          alt="Main Industries"
          className="img-fluid d-none d-md-block"
        />
        <img
          src={data.MT_MobileBanner}
          alt="Sub Industries"
          className="img-fluid d-md-none w-100"
        />
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{data.MT_Media} </span>
            <span style={{ color: "#FF0000" }}>{data.MT_Telecom}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{data.MT_Para1}</p>
            <p>{data.MT_Para2}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {data.MT_Solution}</span>&nbsp;
          <span style={{ color: " #0f62fe" }}>{data.MT_Offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{data.MT_SO_description}</p>
          </div>
        </div>
        {/* <SolutionOfferings managementData={data.MT_SO_MediaManagementData} /> */}
        <div className="row justify-content-md-center justify-content-center p-3">
        {data.MT_SO_MediaManagementData.map((curr, index) => (
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="col-md-5 m-md-3 col-11 m-2 border rounded position-relative"
            key={index}
          >
            <div className="">
              <div className="p-3">
                <img
                  src={curr.url}
                  className="img-fluid"
                  style={{
                    width: "10%",
                    // border: "2px solid #ccc",
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
                        index >= Object.keys(curr).length - 2 ? "no-bullet" : ""
                      }`}
                    >
                      {/* <span className="p-1">
                        <FaCheck
                          style={{ color: " #0f62fe" }}
                          size={
                            index === Object.keys(curr).length - 1
                              ? "1.4em"
                              : "1.2em"
                          }
                        />
                      </span> */}
                      {value}
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center rounded" style={{borderBottom:"6px solid #FE0000"}}></span>
          </div>
        ))}
      </div>
      </div>

      <div>
        <div className="text-center p-4 fs-1">
          <span style={{ color: "#FF0000" }}>{data.MT_Technology_Offerings.TO_Technology}</span>&nbsp;
          <span style={{ color: " #0f62fe" }}>{data.MT_Technology_Offerings.TO_Offerings}</span>
        </div>

        <TechnologyOfferings
          cloudComputing={data.MT_Technology_Offerings.TO_Cloud_Computing}
          industriesImage12={data.MT_Technology_Offerings.TO_MainBulbImg}
          dataServices={data.MT_Technology_Offerings.TO_Data_Services}
        />
      </div>

      <div className="container pt-5">
        <p style={{ fontSize: '15px', color: '#030250' }}><span className='m-md-4'>{data.MT_Details},
          <Link to={data.MT_contactus_Link} className='text-decoration-none'>
            <span className='p-1' style={{ color: "#FE0000" }}>{data.MT_contactus}</span>
          </Link>{data.MT_today}</span>
        </p>
        {/* <div style={{ borderBottom: "9px solid #FE0000 " }} className='mb-5'></div> */}

        {/* <p>
          {data.MT_Details},
          <span style={{ color: "#FF0000" }}>{data.MT_contactus} </span>
          {data.MT_today}
        </p> */}
      </div>
    </div>
  );
};

export default MediaTelecom;
