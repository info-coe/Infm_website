import React from "react";
import SolutionData from "./solutionscontent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";

const DevOps = (props) => {
  const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
  // console.log(serviceContent)
  const DevOpsData = SolutionData[4].DEVOPS;
const appServicesData = DevOpsData.DEVOPS_Services_Data.map(item => ({
    Mainhead: item.appmainhead,
    Subhead: item.appsubhead,
    Content: [item.appcontent]
}));
  const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="container pt-5">
        <Zoomin2
          heading={DevOpsData.DEVOPS_Heading1}
          heading2={DevOpsData.DEVOPS_Heading2}
          content={[DevOpsData.DEVOPS_Content1, DevOpsData.DEVOPS_Content2]}
          aligntext="center"
        />
      </div>
      <div className="d-md-flex justify-content-evenly p-4">
        <img
          src={DevOpsData.DEVOPS_agile_devops_process_Image}
          className="col-md-5 border rounded p-3"
          alt="agile_devops_process"
        ></img>
        <img
          src={DevOpsData.DEVOPS_stages_of_devops_flow_Image}
          className="col-md-5 border rounded p-3"
          alt="stages_of_devops_flow"
        ></img>
      </div>
      <div>
        <h5 className="text-primary text-center">{DevOpsData.DEVOPS_Services_Heading}</h5>
        <BoxServicesData allservices={appServicesData} textColor="#FE0000"/>
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default DevOps;
