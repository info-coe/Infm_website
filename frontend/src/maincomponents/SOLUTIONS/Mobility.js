import React from "react";
// import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";

const Mobility = (props) => {
  const serviceContent = JSON.parse(props.product.ServiceContent.Content);
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  const crmModelPointsData = serviceContent
    .map((item) => item.ServiceCmsModelsData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const MobilityData = SolutionData.map((item) => item.MOBILITY)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="container">
        <h3 className="mt-5">
          <span className="text-primary">{MobilityData.MOBILITY_Heading1}</span>
          <span style={{ color: "#FE0000" }}>
            {MobilityData.MOBILITY_Heading2}
          </span>
        </h3>
        <p className="mt-4">{MobilityData.MOBILITY_Content}</p>
        <div>
          <img
            src={MobilityData.MOBILITY_Solutions_Image}
            alt="MOBILITY_Solutions_Image"
          ></img>
        </div>
        <h3 className="text-primary mt-4 mb-4">
          {MobilityData.MOBILITY_Comprehensive_Suite_Heading}
        </h3>
        {MobilityData.MOBILITY_Comprehensive_Suite_Content.map(
          (item, index) => (
            <div key={index} className="mt-4">
              <h6 style={{ color: "#FE0000" }}>
                <b>{item.Heading}</b>
              </h6>
              <p>{item.Content}</p>
            </div>
          )
        )}
        <div className="mt-5">
          <p>{MobilityData.MOBILITY_Comprehensive_Suite_Conclusion1}</p>
          <p>{MobilityData.MOBILITY_Comprehensive_Suite_Conclusion2}</p>
        </div>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default Mobility;
