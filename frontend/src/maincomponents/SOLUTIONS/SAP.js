import React from "react";
import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";

const SAP = (props) => {
  const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
  // console.log(serviceContent)
  const SAPData = SolutionData[3].SAP;
  const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
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
        <img src="https://www.infomericainc.com/Content/images/sap.png" alt="SAPMAP"/>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default SAP;
