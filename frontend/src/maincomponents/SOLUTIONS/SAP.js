import React from "react";
// import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import ToggleableCard from "../../reusablecomponents/ToggleableCard";

const SAP = (props) => {
  const serviceContent = JSON.parse(props.product.ServiceContent.Content);
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  // console.log(serviceContent)
  const SAPData = SolutionData[3].SAP;
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
          heading1={SAPData.SAP_heading1}
          heading2={SAPData.SAP_heading2}
          content={[SAPData.SAP_content1, SAPData.SAP_content2]}
        />
      </div>
      <div className="text-center m-5">
        <img src={SAPData.SAP_Portfolio_Image} alt="SAPMAP" />
      </div>
      <div className="container d-md-flex gap-4">
        <div className="col-md-6">
          <h4 className="text-danger mb-4">{SAPData.SAP_Services_Portfolio_Heading}</h4>
          {SAPData.SAP_Services_Portfolio.map((item, index) => (
            <ToggleableCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
        <div className="col-md-6">
          <h4 className="text-danger mb-4">{SAPData.SAP_Focus_Offering_Heading}</h4>
          {SAPData.SAP_Focus_Offering.map((item, index) => (
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
