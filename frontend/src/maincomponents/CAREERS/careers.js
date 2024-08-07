import React from "react";
import CareersSlideContent from "../../reusablecomponents/CareersSlideContent";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CareersCurrentopeningsCard from "../../reusablecomponents/CareersCurrentopeningsCard";

const Careers = (props) => {
  const careersContent = JSON.parse(props.product.careersContent.Content);
  const data = careersContent
    .map((item) => item.Careers)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  Aos.init();
  return (
    <>
      <img
        src={data.CareersMainBanner}
        width="100%"
        alt="Careers"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.CareersMobileBanner}
        alt="CareersMobile"
        className="img-fluid d-md-none w-100"
      />
      <div className="p-lg-5 p-1 m-1">
        <h2 className="text-primary pt-5 pb-3">{data.CareersHeading}</h2>
        <p className="pb-4" style={{ fontSize: "18px" }}>
          {data.CareersDescription}
        </p>
        <div
          className="d-md-flex flex-wrap gap-4 justify-content-center mb-5"
          style={{ overflowX: "hidden" }}
        >
          <CareersSlideContent data={data.CareersDiscoverCards} />
        </div>
        <h2 className="mb-5">
          <span className="text-primary">{data.Current_Openings.CO_Head1}</span>&nbsp;
          <span className="text-danger">{data.Current_Openings.CO_Head1}</span>
        </h2>
        <div
          className="d-md-flex flex-wrap gap-lg-4 gap-md-2 justify-content-center mb-5"
          style={{ overflowX: "hidden" }}
        >
          <CareersCurrentopeningsCard
            data={data.Current_Openings.CO_CardsData}
          />
        </div>
        <div className="d-md-flex justify-content-evenly p-2">
          <div className="text-center">
            <Link to="/Careers-Hyd" className="btn btn-primary mt-2 mb-2">
              {data.Careers_HyderabadOpenings}
            </Link>
          </div>
          <div className="text-center">
            <Link to="/Careers-Bangalore" className="btn btn-primary mt-2 mb-2">
              {data.Careers_BangaloreOpenings}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
