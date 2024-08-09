import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import { SolutionOfferings } from "../../reusablecomponents/SolutionOfferings";
import CareersSlideContent from "../../reusablecomponents/CareersSlideContent";

const OracleCloud = (props) => {
  const serviceContent = JSON.parse(props.product.ServiceContent.Content);
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  const crmModelPointsData = serviceContent
  .map((item) => item.ServiceCmsModelsData)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), []);

const OCAllData = SolutionData
  .map((item) => item.oracle_cloud)
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
          heading1={OCAllData.OC_heading1}
          heading2={OCAllData.OC_heading2}
          content={[OCAllData.OC_content1, OCAllData.OC_content2]}
        />
      </div>
      <SolutionOfferings managementData={OCAllData.Oracle_Enterprise} />
      <h4 className="container p-5" style={{color:"#FE0000"}}>{OCAllData.ETE_Oracle_Cloud_Services}</h4>
      <div className='d-md-flex flex-wrap gap-4 justify-content-center m-5 mt-0'>
        <CareersSlideContent data={OCAllData.ETE_Oracle_Cloud_Slides}/>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default OracleCloud;
