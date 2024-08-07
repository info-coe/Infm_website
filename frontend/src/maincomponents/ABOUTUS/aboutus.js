import React from "react";
// import AboutusContent from "../ABOUTUS/aboutusContent.json"
import AboutZoomin from "../../reusablecomponents/AboutZoomin";

const Aboutus = (props) => {
  const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
  const data= AboutusContent
  .map((item) => item.About_Us)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <>
    <div>
       <img src={data.AU_MainBanner}  width="100%" alt='no-display' className="img-fluid d-none d-md-block"  />
       <img src={data.AU_MobileBanner} alt='no-display' className="img-fluid d-md-none w-100" />
       
    <div className="mt-5 mb-5">
      <AboutZoomin heading1={data.AU_About} heading2={data.AU_Infomerica} content={data.AU_Content} />
    </div>
    </div>
    </>
  );
};

export default Aboutus;
