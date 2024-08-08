import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";

const AirlineTravelLogistics = (props) => {
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Airline_Travel_Logistics)
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
        <div>
          <img
            src={data.ATL_MainBanner}
            width="100%"
            alt="Main Industries"
            className="img-fluid d-none d-md-block"
          />
          <img
            src={data.ATL_MobileBanner}
            alt="Sub Industries"
            className="img-fluid d-md-none w-100"
          />
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{data.ATL_Airline} </span>
            <span style={{ color: "#FF0000" }}>{data.ATL_Logistics}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{data.ATL_Para1}</p>
            <p>{data.ATL_Para2}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {data.ATL_Solution} </span>
          <span style={{ color: " #0f62fe" }}>{data.ATL_Offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{data.ATL_SO_description}</p>
          </div>
        </div>
        <div
          className="w-100 overflow-none"
          style={{ backgroundColor: "#F1F7FB" }}
        >
          <div className="row justify-content-md-center">
            {data.ATL_SO_MediaManagementData.map((curr, index) => (
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
                <span className="position-absolute bottom-0 start-0 bg-primary w-100 text-center border-bottom border-5 border-danger rounded"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-center p-4 fs-1">
          <span style={{ color: "#FF0000" }}>{data.ATL_Technology_Offerings.TO_Technology} </span>
          <span style={{ color: " #0f62fe" }}>{data.ATL_Technology_Offerings.TO_Offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={data.ATL_Technology_Offerings.TO_Cloud_Computing}
          industriesImage12={data.ATL_Technology_Offerings.TO_MainBulbImg}
          dataServices={data.ATL_Technology_Offerings.TO_Data_Services}
        />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">
            <p>
              {data.ATL_Details},
              <span style={{ color: "#FF0000" }}>{data.ATL_contactus} </span>
              {data.ATL_today}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineTravelLogistics;
