import React from "react";
import Zoomin from "../../reusablecomponents/zoomin";
import AdvantagesServices from "../../reusablecomponents/AdvantagesServices";
import BoxServicesData from "../../reusablecomponents/BoxServicesData";
import NoZoomin from "../../reusablecomponents/NoZoomin";

const CloudServices = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);

  const CSAllData = data
    .map((item) => item.Cloud_Services)
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

  const cloudImage = CSAllData.cloudPlatformMigrationImage;
  const advantagesData = CSAllData.cloudAdavantages;
  const sections = [
    {
      content: CSAllData.cloudWelcomeContent,
    },
    {
      heading: CSAllData.cloudUnveilHeading,
      content: CSAllData.cloudUnveilContent,
    },
  ];
  const cloudServiceData = CSAllData.ComprehensiveCloudServicesData;
  const cloudServicesData = CSAllData.ComprehensiveCloudServicesData.map(
    (item) => ({
      Mainhead: item.cloudmainhead,
      Subhead: item.cloudsubhead,
      Content: [item.cloudcontent1, item.cloudcontent2, item.cloudcontent3],
    })
  );

  return (
    <>
      <div>
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
              heading={CSAllData.cloudWelcomeHeading}
              sections={sections}
              textsize="20px"
            />
          </div>
          <div className="text-center">
            <img src={cloudImage} width="75%" alt="no-display" />
          </div>
          <div className="mt-5">
            <AdvantagesServices
              heading={advantagesData.cloudServiceAdvanHeading}
              icon={advantagesData.cloudServiceAdvanIcon}
              advantagesData={[
                advantagesData.cloudServiceAdvanPoint1,
                advantagesData.cloudServiceAdvanPoint2,
                advantagesData.cloudServiceAdvanPoint3,
                advantagesData.cloudServiceAdvanPoint4,
              ]}
              image1={advantagesData.cloudServiceAdvantageimage1}
              image2={advantagesData.cloudServiceAdvantageimage2}
            />
          </div>
        </div>
        <BoxServicesData
          allservices={cloudServicesData}
          textColor="#0f62fe"
          textsize="25px"
          icon={cloudServiceData[0].cloudicon}
        />
        <NoZoomin
          textsize="25px"
          texttop="30px"
          heading={CSAllData.cloudTransformHeading}
          content={[
            CSAllData.cloudTransformContent1,
            CSAllData.cloudTransformContent2,
          ]}
          contact={CSAllData.cloudTransformContact}
          today={CSAllData.cloudTransformtoday}
          link={CSAllData.cloudTransContactLink}
        />
      </div>
    </>
  );
};

export default CloudServices;
