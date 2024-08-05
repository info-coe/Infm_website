import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import CrmServices from "../../reusablecomponents/CrmServices";
import ImageMoving from "../../reusablecomponents/ImageMoving";

const CustomerRelationshipManagement = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  const contentData = data
    .map((item) => item.Customer_Relationship_Management)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  const serviceData = contentData.ServiceCrmServicesData
  const crmModelPointsData = data
    .map((item) => item.ServiceCmsModelsData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
  const crmServicesData = serviceData.map((item) => ({
    mainHead: item.crmmainhead,
    subHead: item.crmminhead,
    objective: item.crmcontent1,
    outcome: item.crmcontent2,
  }));

  const serviceMainimage = data
    .map((item) => item.servicebannerimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
  const serviceSubimage = data
    .map((item) => item.servicemobileimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  return (
    <>
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

        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <ImageMoving image={contentData.servicecrmImage} />
            </div>
            <div className="col-md-8">
              <Zoomin2
                heading={contentData.crmMainHeading}
                heading2={contentData.crmFosteringHeading}
                content={[
                  contentData.crmFosteringContent1,
                  contentData.crmFosteringContent2,
                ]}
              />
            </div>
          </div>
        </div>
        <CrmServices serviceData={crmServicesData} />
        <ModelsPoints contents={crmModelPointsData} />
      </div>
    </>
  );
};

export default CustomerRelationshipManagement;
