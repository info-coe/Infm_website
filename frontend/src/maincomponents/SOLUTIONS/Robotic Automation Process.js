import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin from "../../reusablecomponents/zoomin";
import AdvantagesServices from "../../reusablecomponents/AdvantagesServices";
import NoZoomin from "../../reusablecomponents/NoZoomin";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";


const RoboticAutomationProcess = (props) => {
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  // const crmModelPointsData = serviceContent
  //   .map((item) => item.ServiceCmsModelsData)
  //   .filter(Boolean)
  //   .reduce((acc, curr) => acc.concat(curr), []);

  const RPAAllData = SolutionData
    .map((item) => item.Robotic_Automation_Process)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

    const RAP_ModalData= RPAAllData.RAP_ModelsData

  const heading = RPAAllData.RAP_heading;
  const digitalServiceData = RPAAllData.DigitalServicesData;
  const dtsServicesData = digitalServiceData.map((item) => ({
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
        <Zoomin
          heading={heading}
          content={[
            RPAAllData.RAP_content1,
            RPAAllData.RAP_content2,
          ]}
        />
      </div>
      <AdvantagesServices
        heading={RPAAllData.RAP_RPA.heading}
        icon={RPAAllData.RAP_RPA.icon}
        advantagesData={[
          RPAAllData.RAP_RPA.point1,
          RPAAllData.RAP_RPA.point2,
          RPAAllData.RAP_RPA.point3,
        ]}
      />
      <NoZoomin
        heading={RPAAllData.RAP_APPROACH.heading}
        content={[RPAAllData.RAP_APPROACH.content]}
        textPosition="center"
      />
      <BoxServicesData
        allservices={dtsServicesData}
        textColor="#0f62fe"
        textcenter="center"
      />
      <ModelsPoints contents={RAP_ModalData} />
    </div>
  );
};

export default RoboticAutomationProcess;
