import React from "react";
// import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";

const ServiceOrientedArchitecture = (props) => {
  const serviceContent = JSON.parse(props.product.ServiceContent.Content);
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  // console.log(serviceContent)
  const SOAData = SolutionData[6].SERVICE_ORIENTED_ARCHITECTURE;
  // console.log(SOAData);
  const crmModelPointsData = serviceContent[1].ServiceCmsModelsData;
  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="mt-5">
        <AboutZoomin
          heading1={SOAData.SOA_Heading1}
          heading2={SOAData.SOA_Heading2}
          content={[
            SOAData.SOA_Content1,
            SOAData.SOA_Content2,
            SOAData.SOA_Content3,
          ]}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${SOAData.SOA_BGImage})` }}
        className="d-md-flex p-5 mt-5 mb-5"
      >
        <div className="col-md-4 d-md-flex justify-content-center align-items-center flex-column">
          <h2 className="text-primary">{SOAData.SOA_Heading1}</h2>
          <h2 style={{ color: "#ef0000" }}>{SOAData.SOA_Heading2}</h2>
        </div>
        <div className="col-md-8">
          {SOAData.SOA_SubPoints.map((item, index) => (
            <p key={index}>
              <i className={SOAData.SOA_SubPoints_Icon}></i>
              {item.Point}
            </p>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: "rgb(240, 242, 243)" }} className="pt-5 pb-5">
        <h2 className="ps-5">
          <span className="text-primary">{SOAData.SOA_Offering_Heading1}</span>
          <span style={{color:"#ef0000"}}>{SOAData.SOA_Offering_Heading2}</span>
        </h2>
        <SolutionOfferings managementData={SOAData.SOA_Offering_Content} />
        <ModelsPoints contents={crmModelPointsData} />
      </div>
      
    </div>
  );
};

export default ServiceOrientedArchitecture;
