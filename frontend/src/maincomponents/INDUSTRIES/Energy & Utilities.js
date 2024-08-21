import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import { Link } from "react-router-dom";

const EnergyUtilities = (props) => {
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Energy_and_Utilities)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <div className="" style={{ overflow: "hidden" }}>
      <div>
        <div>
        <img
        src={data.EU_MainBanner}
        width="100%"
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.EU_MobileBanner}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />
        </div>
        <div data-aos="fade-down">
          <div className="text-center p-4 fs-1">
            <span style={{ color: " #0f62fe " }}>{data.EU_Energy} </span>
            <span style={{ color: "#FF0000" }}>{data.EU_Utilities}</span>
          </div>
          <div className="container font-weight-normal fs-md-5 pb-5">
            <p>{data.EU_Para1}</p>
            <p>{data.EU_Para2}</p>
          </div>
        </div>
      </div>

      <div
        className="w-100 overflow-none"
        style={{ backgroundColor: "#F1F7FB" }}
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#FF0000" }}> {data.EU_Solution} </span>
          <span style={{ color: " #0f62fe" }}>{data.EU_Offerings}</span>
          <div className="fs-5 font-weight-normal">
            <p>{data.EU_SO_description}</p>
          </div>
        </div>
        <SolutionOfferings managementData={data.EU_SO_ProductManagementData} />
      </div>

      <div>
        <div className="text-center p-4 fs-1">
          <span style={{ color: "#FF0000" }}>{data.EU_Technology_Offerings.TO_Technology} </span>
          <span style={{ color: " #0f62fe" }}>{data.EU_Technology_Offerings.TO_Offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={data.EU_Technology_Offerings.TO_Cloud_Computing}
          industriesImage12={data.EU_Technology_Offerings.TO_MainBulbImg}
          dataServices={data.EU_Technology_Offerings.TO_Data_Services}
        />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="container pt-5">
          <p style={{ fontSize: '18px', color: '#030250' }}><span className='m-md-4'>{data.EU_Details},
            <Link to={data.EU_contactus_Link} className='text-decoration-none'>
              <span className='p-1' style={{ color: "#FE0000" }}>{data.EU_contactus}</span>
            </Link>{data.EU_today}</span>
          </p>
          <div style={{ borderBottom: "9px solid #FE0000 " }} className='mb-5'></div>
          
            {/* <p>
              {data.EU_Details},
              <span style={{ color: "#FF0000" }}>{data.EU_contactus} </span>
              {data.EU_today}
            </p> */}

          </div>
        </div>
    </div>
    </div>
  );
};

export default EnergyUtilities;
