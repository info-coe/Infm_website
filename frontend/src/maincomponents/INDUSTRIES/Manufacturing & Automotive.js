import React from "react";
import { FaCheck } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import { Link } from "react-router-dom";

const ManufacturingAutomotive = (props) => {
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Manufacturing_And_Automotive)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

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

  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <img
        src={data.MAA_MainBanner}
        width="100%"
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.MAA_MobileBanner}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />
      </div>

      {/* Heading and Text */}
      <div className="row" data-aos="zoom-in-up">
        <div className="col-md-12">
          <div data-aos="fade-down">
            <div className="text-center p-4 fs-1">
              <span className="text-primary">{data.MAA_Manufacturing}{" "}</span>
              <span style={{ color: "#FF0000" }}>{data.MAA_Automotive}</span>
            </div>
            <div className="container pb-5">{data.MAA_ManufacturingPara}</div>
          </div>
        </div>
      </div>

      {/* Dual Column Content */}
      <div className="row" id="industries">
        <div className="col-md-6 d-flex align-items-center justify-content-center text-center">
          <div className="p-4">
            <h2 className="fs-1">
              <span className="text-primary">{data.MAA_Solution}{" "}</span>
              <span style={{ color: "#FF0000" }}>{data.MAA_Offerings}</span>
            </h2>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-in-up">
          <div className="p-4">
            <p className="fs-md-5">{data.MAA_SO_Para1}</p>
            <p className="fs-md-5">{data.MAA_SO_Para2}</p>
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
              {data.MAA_Product_ManagementData.map((curr,index) => (
                <div className="text-white" key={index}>
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
              <span style={{ color: "#FF0000" }}> {data.MAA_Technology_Offerings.TO_Technology}</span>&nbsp;
              <span style={{ color: " #0f62fe" }}>{data.MAA_Technology_Offerings.TO_Offerings}</span>
            </div>
          </div>
        </div>

        <TechnologyOfferings
          cloudComputing={data.MAA_Technology_Offerings.TO_Cloud_Computing}
          industriesImage12={data.MAA_Technology_Offerings.TO_MainBulbImg}
          dataServices={data.MAA_Technology_Offerings.TO_Data_Services}
        />
      </div>

      {/* Industries Detail */}
      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">

          <p style={{ fontSize: '15px', color: '#030250' }}><span className='m-md-4'>{data.MAA_Details},
            <Link to={data.MAA_contactus_Link} className='text-decoration-none'>
              <span className='p-1' style={{ color: "#FE0000" }}>{data.MAA_contactus}</span>
            </Link>{data.MAA_today}</span>
          </p>
          {/* <div style={{ borderBottom: "9px solid #FE0000 " }} className='mb-5'></div>
           */}
            {/* <p>
              {data.MAA_Details},
              {/* <span style={{ color: "#FF0000" }}>{data.MAA_contactus} </span> */}
              {/* <Link to={data.MAA_contactus_Link}><span style={{ color: "#FF0000" }}>{data.MAA_contactus} </span></Link>
              {data.MAA_today}
            </p> */} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingAutomotive;
