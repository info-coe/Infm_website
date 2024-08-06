import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import NoZoomin from "../../reusablecomponents/NoZoomin";
import CareersSlideContent from "../../reusablecomponents/CareersSlideContent";
import Aos from "aos";
import "aos/dist/aos.css";

const BusinessAssuranceTesting = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  const crmModelPointsData = data
    .map((item) => item.ServiceCmsModelsData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const BATAllData = data
    .map((item) => item.Testing_QA_Services)
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

  const testingServiceImage = BATAllData.testingServiceImage;
  const ComprehensiveAssuranceTestingData = BATAllData.ComprehensiveAssuranceTestingData;
  
  Aos.init();

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
        <NoZoomin
          heading={BATAllData.testingServiceHeading}
          heading2={BATAllData.testingServiceAssuranceHeading}
          content={[BATAllData.testingServiceContent]}
          textsize="30px"
          textdisplay="d-md-flex"
        />
      </div>
      <div className="text-center">
        <img src={testingServiceImage} width="85%" alt="no-display" />
      </div>
      <div>
        <div className="container mt-5">
          <div className="row">
            <h3 style={{ color: "#FE0000" }}>
              {ComprehensiveAssuranceTestingData[0].heading}
            </h3>
            {ComprehensiveAssuranceTestingData.map((item, index) => (
              <div className="p-3" key={index}>
                <h5 style={{ color: "#FE0000" }}>{item.name}</h5>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="d-md-flex flex-wrap gap-4 justify-content-center m-5 mt-0">
        <CareersSlideContent
          data={BATAllData.TechnologyUtilizationSlides}
        />
      </div>
      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default BusinessAssuranceTesting;
