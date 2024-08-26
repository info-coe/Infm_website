import React from "react";
import Zoomin from "../../reusablecomponents/zoomin";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";
import AdvantagesServices from "../../reusablecomponents/AdvantagesServices";

const DigitalTransformationServices = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);

  // const crmModelPointsData = data
  //   .map((item) => item.ServiceCmsModelsData)
  //   .filter(Boolean)
  //   .reduce((acc, curr) => acc.concat(curr), []);
  

  const DTSAllData = data
  .map((item) => item.Digital_Transformation_Services)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

  const DTS_ModelPointsData = DTSAllData.DTS_ModelsData;

  const serviceMainimage = data
    .map((item) => item.servicebannerimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
    
  const serviceSubimage = data
    .map((item) => item.servicemobileimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const dtsImage = DTSAllData.digitalImage;
  const dtsServicesData = DTSAllData.DigitalServicesData.map((item) => ({
    Mainhead: item.dtsmainhead,
    Subhead: item.dtssubhead,
    Content: [item.dtscontent],
  }));

  const advantagesData = DTSAllData.digitalAdavantages;

  return (
    <>
      <div>
        <img
          src={serviceMainimage}
          width="100%"
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
            heading={DTSAllData.digitalUnleashHeading}
            content={[DTSAllData.digitalUnleashContent]}
          />
        </div>
        <div>
          <img src={dtsImage} width="100%" alt="no-display" />
        </div>
        <AdvantagesServices
          heading={advantagesData.digitalServiceAdvanHeading}
          icon={advantagesData.digitalServiceAdvanIcon}
          advantagesData={[
            advantagesData.digitalServiceAdvanPoint1,
            advantagesData.digitalServiceAdvanPoint2,
            advantagesData.digitalServiceAdvanPoint3,
          ]}
        />

        <BoxServicesData
          allservices={dtsServicesData}
          textColor="#0f62fe"
          textcenter="center"
        />
        <ModelsPoints contents={DTS_ModelPointsData} />
      </div>
    </>
  );
};

export default DigitalTransformationServices;
