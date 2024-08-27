import React from "react";
import IndustriesSideContent from "../../reusablecomponents/IndustriesSideContent";
import CardBulb2 from "../../reusablecomponents/industriesCardBulb2";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import { Link } from "react-router-dom";

const SoftwareSales = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);
  
    const SSAllData = data
    .map((item) => item.SoftwareSales)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];
  
    const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
      
    const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

  const TechnologyUtilizationSlides = SSAllData.softwarSales;
  const softwarSalesSideContent = SSAllData.softwarSalesSideContent;

  const styles = `
   
    .paragraph-div {
        width: 100%;
    }
   
    @media (min-width: 992px) {
        .paragraph-div {
            width: 44%; 
        }
    }
    `;
  return (
    <>
      <div>
        <style>{styles}</style>
        <img
          src={serviceMainimage}
          width="100%"
          height="150%"
          alt="Main Service"
          className="mainimg img-fluid d-none d-md-block"
        />
        <img
          src={serviceSubimage}
          alt="no-display"
          className="sunimg img-fluid d-md-none w-100"
        />
        <div className="mt-5">
          <AboutZoomin
            heading1={SSAllData.softwareSalesHeading}
            heading2={SSAllData.softwareSalesHeading2}
            content={[
                SSAllData.softwareSalesContent1,
                SSAllData.softwareSalesContent2,
            ]}
            textdisplay="d-md-flex"
          />
        </div>

        <div
          className="container d-md-flex flex-wrap gap-5 "
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="col-lg-6 d-md-flex gap-4">
            <CardBulb2 solutionofferingData={TechnologyUtilizationSlides} />
          </div>
          <div className="col-lg-4 ps-3 paragraph-div">
            <IndustriesSideContent data={softwarSalesSideContent[0]} />
          </div>
        </div>
        <p className="text-center">
          {SSAllData.softwareSalesFooter1}
          <Link to={SSAllData.softwareSalesFooterLink} className="text-decoration-none">
            {" "}
            <span className="" style={{color:"#FE0000"}}> {SSAllData.softwareSalesFooter2} </span>
          </Link>{" "}
          {SSAllData.softwareSalesFooter3}
        </p>
      </div>
    </>
  );
};

export default SoftwareSales;
