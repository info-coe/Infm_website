import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import SolutionData from "./solutionscontent.json";
import Zoomin from "../../reusablecomponents/zoomin";
import AdvantagesServices from "../../reusablecomponents/AdvantagesServices";
import NoZoomin from "../../reusablecomponents/NoZoomin";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";

const RoboticAutomationProcess = (props) => {
  const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
  // console.log(serviceContent)
  const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
  const heading = SolutionData[1].Robotic_Automation_Process.RAP_heading;
  const advantagesData = SolutionData[1].Robotic_Automation_Process;
  const digitalServiceData= SolutionData[1].Robotic_Automation_Process.DigitalServicesData
  const dtsServicesData = digitalServiceData.map(item => ({
      Subhead: item.dtssubhead,
      Content: [item.dtscontent],
    }));

  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="mt-5">
        <Zoomin heading={heading} content={[SolutionData[1].Robotic_Automation_Process.RAP_content1,SolutionData[1].Robotic_Automation_Process.RAP_content2]}/>
      </div>
      <AdvantagesServices heading={advantagesData.RAP_RPA.heading} icon={advantagesData.RAP_RPA.icon} advantagesData={[
              advantagesData.RAP_RPA.point1,
              advantagesData.RAP_RPA.point2,
              advantagesData.RAP_RPA.point3,
              ]}
       />
       <NoZoomin heading = {advantagesData.RAP_APPROACH.heading} content={[
            advantagesData.RAP_APPROACH.content
       ]} textPosition="center"/>    
        <BoxServicesData allservices={dtsServicesData} textColor="#0f62fe" textcenter="center"/>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default RoboticAutomationProcess;
