import React from "react";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import AOS from "aos";
import { Link } from "react-router-dom";

const BankingInsuranceServices = (props) => {
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Banking_and_Insurance)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });
  
  return (
    <div>
      <div className="" style={{ overflow: "hidden" }}>
        <div>
          <div>
          <img
        src={data.BI_MainBanner}
        width="100%"
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.BI_MobileBanner}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />
          </div>
          <div data-aos="fade-down">
            <div className="text-center p-4 fs-1">
              <span style={{ color: " #0f62fe " }}>{data.BI_Banking} </span>
              <span style={{ color: "#FF0000" }}>{data.BI_Insurance}</span>
            </div>
            <div className="container font-weight-normal fs-md-5 pb-5">
              <p>{data.BI_BankingInsurancePara}</p>
            </div>
          </div>
        </div>

        <div
          className="w-100 overflow-none"
          style={{ backgroundColor: "#F1F7FB" }}
        >
          <div className="container fs-1 font-weight-normal">
            <span style={{ color: "#FF0000" }}> {data.BI_Solution}{" "}</span>
            <span style={{ color: " #0f62fe" }}>{data.BI_Offerings}</span>
            <div className="fs-5 font-weight-normal">
              <p style={{ color: " gray" }}>{data.BI_SO_description}</p>
            </div>
          </div>
          <div className="row justify-content-md-center justify-content-center p-1">
            {data.BI_SO_Product_ManagementData.map((curr, index) => (
              <div
                data-aos="zoom-in"
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
                <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center  rounded"  style={{ borderBottom: "6px solid #FE0000" }}></span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-center p-4 fs-1">
            <span style={{ color: "#FF0000" }}>{data.BI_Technology_Offerings.TO_Technology} </span>
            <span style={{ color: " #0f62fe" }}>{data.BI_Technology_Offerings.TO_Offerings}</span>
          </div>
          <TechnologyOfferings
            cloudComputing={data.BI_Technology_Offerings.TO_Cloud_Computing}
            industriesImage12={data.BI_Technology_Offerings.TO_MainBulbImg}
            dataServices={data.BI_Technology_Offerings.TO_Data_Services}
          />
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="container pt-5">
            <p style={{ fontSize: '15px', color: '#030250' }}><span className='m-md-4'>{data.BI_Details},
            <Link to={data.BI_contactus_Link} className='text-decoration-none'>
              <span className='p-1' style={{ color: "#FE0000" }}>{data.BI_contactus}</span>
            </Link>{data.BI_today}</span>
          </p>
          {/* <div style={{ borderBottom: "9px solid #FE0000 " }} className='mb-5'></div> */}
          
              {/* <p>
                {data.BI_Details},
                <span style={{ color: "#FF0000" }}>{data.BI_contactus} </span>
                {data.BI_today}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingInsuranceServices;
