import React from 'react';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import Zoomin2 from '../../reusablecomponents/Zoomin2';
import CrmServices from '../../reusablecomponents/CrmServices';
import ImageMoving from '../../reusablecomponents/ImageMoving';
import serviceContent from './ServicesComponent.json'

const CustomerRelationshipManagement = () => {
  const contentData = serviceContent[1].ServicesAllHeadingAndContent[0];
  const serviceData = serviceContent[2].ServiceCrmServicesData
  const data = serviceContent[3].ServiceCmsModelsData
  const crmServicesData = serviceData.map(item => ({
    mainHead: item.crmmainhead,
    subHead: item.crmminhead,
    objective: item.crmcontent1,
    outcome: item.crmcontent2,
  }));
  const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceMainimage
 const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceSubimage
 const serviceCrmImage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceCrmImage

  return (
    <>
    <div>
      <img src={serviceMainimage} width="100%" height="150%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <ImageMoving   image={serviceCrmImage}/>
          </div>
          <div className="col-md-8">
            <Zoomin2
              heading={contentData.cmshead1}
              heading2={contentData.cmshead2}
              content={[
                contentData.cmscontent1,
                contentData.cmscontent2,
              ]}
            />
          </div>
        </div>
      </div>
       <CrmServices serviceData={crmServicesData}/>
      <ModelsPoints contents={data} /> 
    </div>
    </>
  );
};

export default CustomerRelationshipManagement;
