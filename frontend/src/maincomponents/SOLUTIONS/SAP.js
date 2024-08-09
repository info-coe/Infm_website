import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import ToggleableCard from "../../reusablecomponents/ToggleableCard";

const SAP = (props) => {
  const serviceContent = JSON.parse(props.product.ServiceContent.Content);
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  const crmModelPointsData = serviceContent
    .map((item) => item.ServiceCmsModelsData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const SAPAllData = SolutionData
    .map((item) => item.SAP)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="mt-5">
        <AboutZoomin
          heading1={SAPAllData.SAP_heading1}
          heading2={SAPAllData.SAP_heading2}
          content={[SAPAllData.SAP_content1, SAPAllData.SAP_content2]}
        />
      </div>
      <div className="text-center m-5">
        <img src={SAPAllData.SAP_Portfolio_Image} alt="SAPMAP" />
      </div>
      <div className="container d-md-flex gap-4">
        <div className="col-md-6">
          <h4 className="mb-4" style={{color:"#FE0000"}}>{SAPAllData.SAP_Services_Portfolio_Heading}</h4>
          {SAPAllData.SAP_Services_Portfolio.map((item, index) => (
            <ToggleableCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="col-md-6">
          <h4 className="mb-4" style={{color:"#FE0000"}}>{SAPAllData.SAP_Focus_Offering_Heading}</h4>
          {SAPAllData.SAP_Focus_Offering.map((item, index) => (
            <ToggleableCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default SAP;
