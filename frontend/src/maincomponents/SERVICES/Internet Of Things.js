import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin from "../../reusablecomponents/zoomin";
import AdvantagesServices from "../../reusablecomponents/AdvantagesServices";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";
import NoZoomin from "../../reusablecomponents/NoZoomin";

const InternetOfThings = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);
    const crmModelPointsData = data
      .map((item) => item.ServiceCmsModelsData)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
  
    const IOTAllData = data
    .map((item) => item.Internet_Of_Things)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];
  
    const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
      
    const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

  const sections = [
    {
      content: IOTAllData.iotServiceContent,
    },
    {
      heading: IOTAllData.iotRevolutionizeHeading,
      content: IOTAllData.iotRevolutionizeContent,
    },
  ];
  const advantagesData = IOTAllData.iotAdavantages;
  const iotServiceData = IOTAllData.ComprehensiveIoTServicesData;
  const iotServicesData = iotServiceData.map((item) => ({
    Mainhead: item.iotmainhead,
    Subhead: item.iotsubhead,
    Content: [item.iotcontent1, item.iotcontent1, item.iotcontent1],
  }));

  return (
    <div>
      <img
        src={serviceMainimage}
        width="100%"
        height="150%"
        alt="Main Service"
        className="mainimg img-fluid d-none d-md-block"
      />
      <img
        src={serviceSubimage}
        alt="no-display"
        className="sunimg img-fluid d-md-none w-100"
      />

      <div className="mt-5">
        <Zoomin
          heading={IOTAllData.iotServiceHeading}
          sections={sections}
          textsize="25px"
        />
      </div>
      <AdvantagesServices
        heading={advantagesData.iotServiceAdvanHeading}
        icon={advantagesData.iotServiceAdvanIcon}
        advantagesData={[
          advantagesData.iotServiceAdvanPoint1,
          advantagesData.iotServiceAdvanPoint2,
          advantagesData.iotServiceAdvanPoint3,
          advantagesData.iotServiceAdvanPoint4,
        ]}
      />
      <BoxServicesData
        allservices={iotServicesData}
        textColor="#0f62fe"
        textsize="20px"
        icon={iotServiceData[0].ioticon}
      />
      <NoZoomin
        heading={IOTAllData.iotEmbarkHeading}
        textsize="25px"
        texttop="20px"
        content={[IOTAllData.iotEmbarkContent]}
      />
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default InternetOfThings;
