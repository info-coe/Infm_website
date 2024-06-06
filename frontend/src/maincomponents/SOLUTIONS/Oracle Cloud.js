import React from "react";
import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import CareersSlideContent from "../../reusablecomponents/CareersSlideContent";

const OracleCloud = (props) => {
  const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
  // console.log(serviceContent)
  const oracleCloudData = SolutionData[2].oracle_cloud;
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
          heading1={oracleCloudData.OC_heading1}
          heading2={oracleCloudData.OC_heading2}
          content={[oracleCloudData.OC_content1, oracleCloudData.OC_content2]}
        />
      </div>
      <SolutionOfferings managementData={oracleCloudData.Oracle_Enterprise} />
      <h4 className="text-danger container p-5">{oracleCloudData.ETE_Oracle_Cloud_Services}</h4>
      <div className='d-md-flex flex-wrap gap-4 justify-content-center m-5 mt-0'>
        <CareersSlideContent data={oracleCloudData.ETE_Oracle_Cloud_Slides}/>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default OracleCloud;
