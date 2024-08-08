import React from "react";
import IndustriesOfferingCard from "../../reusablecomponents/IndustriesOfferingCard";
import IndustriesSideContent from "../../reusablecomponents/IndustriesSideContent";
import CardBulb from "../../reusablecomponents/IndustriesCardBulb";
import IndustriesBorderMovingCard from "../../reusablecomponents/IndustriesBorderMovingCard";

const Industries = (props) => {
  const IndustriesContent = JSON.parse(props.product.industriesContent.Content);
  const data = IndustriesContent.map((item) => item.Industries)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  const styles = ` 
    .paragraph-div {
        width: 100%;
    }
   
    @media (min-width: 992px) {
        .paragraph-div {
            width: 40%; 
        }
    }
    `;

  return (
    <>
      <style>{styles}</style>
      <img
        src={data.Industries_MainBanner}
        alt="Main Industries"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.Industries_MobileBanner}
        alt="Sub Industries"
        className="img-fluid d-md-none w-100"
      />

      <div
        className="container d-md-flex flex-wrap gap-5 align-items-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-6 d-md-flex gap-4">
          <IndustriesOfferingCard
            solutionofferingData={
              data.Industries_Manufacturing_Automotive
                .industriesSolutionOfferings
            }
          />
        </div>

        <div className="col-lg-4 ps-3 paragraph-div">
          <IndustriesSideContent
            data={
              data.Industries_Manufacturing_Automotive.IndustriesSideContent
            }
          />
        </div>
      </div>
      <div className="container">
        <hr
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(0,125,255,1) 10%, rgba(230,22,22,1) 100%)",
          }}
        />
      </div>
      <div
        className="container d-md-flex flex-wrap gap-5 align-items-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-4 ps-3 paragraph-div">
          <IndustriesSideContent
            data={data.Banking_Financial_Services.IndustriesSideContent}
          />
        </div>
        <div className="col-lg-6 d-md-flex gap-4">
          <CardBulb
            solutionofferingData={
              data.Banking_Financial_Services.industriesSolutionOfferings
            }
          />
        </div>
      </div>
      <div className="container">
        <hr
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(0,125,255,1) 10%, rgba(230,22,22,1) 100%)",
          }}
        />
      </div>

      <div
        className="container d-md-flex flex-wrap gap-5 align-items-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-6 d-md-flex gap-4">
          <IndustriesOfferingCard
            solutionofferingData={
              data.Healthcare_Life_Sciences.industriesSolutionOfferings
            }
          />
        </div>

        <div className="col-lg-4 ps-3 paragraph-div">
          <IndustriesSideContent
            data={data.Healthcare_Life_Sciences.IndustriesSideContent}
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${data.industriesMediatelecomBg})`,
          backgroundSize: "cover",
          padding: "10px",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <div
          className="container d-md-flex flex-wrap gap-5 align-items-center"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="col-lg-4 ps-3 paragraph-div">
            <IndustriesSideContent
              data={data.Media_Telecom.IndustriesSideContent}
            />
          </div>
          <div className="col-lg-6 d-md-flex gap-4">
            <IndustriesBorderMovingCard
              solutionofferingData={
                data.Media_Telecom.industriesSolutionOfferings
              }
            />
          </div>
        </div>
      </div>

      <div
        className="container d-md-flex flex-wrap gap-5 align-items-center"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-6 d-md-flex gap-4">
          <CardBulb
            solutionofferingData={
              data.Airline_Travel_Logistics.industriesSolutionOfferings
            }
          />
        </div>
        <div className="col-lg-4 ps-3 paragraph-div">
          <IndustriesSideContent
            data={data.Airline_Travel_Logistics.IndustriesSideContent}
          />
        </div>
      </div>
    </>
  );
};

export default Industries;
