import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import CrmServices from "../../reusablecomponents/CrmServices";
import NoZoomin from "../../reusablecomponents/NoZoomin";

const SecurityArchitecture = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  // const crmModelPointsData = data
  //   .map((item) => item.ServiceCmsModelsData)
  //   .filter(Boolean)
  //   .reduce((acc, curr) => acc.concat(curr), []);

  const SAAllData = data
    .map((item) => item.Security_Architecture)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

    const SA_ModelPointsData = SAAllData.SA_ModelsData;

  const serviceMainimage = data
    .map((item) => item.servicebannerimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const serviceSubimage = data
    .map((item) => item.servicemobileimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const secImage = SAAllData.securityarchitectureImage;
  const securityServicesData = SAAllData.SecurityServicesData.map(
    (item) => ({
      mainHead: item.secmainhead,
      subHead: item.secminhead,
      objective: item.seccontent1,
      approach: item.seccontent2,
      outcome: item.seccontent3,
    })
  );

  return (
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
        <NoZoomin
          heading={SAAllData.securityAdvancedHeading}
          heading2={SAAllData.securityConstructingHeading}
          content={[
            SAAllData.securityConstructingContent1,
            SAAllData.securityConstructingContent2,
            SAAllData.securityConstructingContent3,
          ]}
        />
      </div>
      <div className="text-center">
        <img src={secImage} width="85%" alt="no-display" />
      </div>
      <CrmServices serviceData={securityServicesData} />
      <ModelsPoints contents={SA_ModelPointsData} />
    </div>
  );
};

export default SecurityArchitecture;
