import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';


const ApplicationServices = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);
    // const crmModelPointsData = data
    //   .map((item) => item.ServiceCmsModelsData)
    //   .filter(Boolean)
    //   .reduce((acc, curr) => acc.concat(curr), []);
  
    const ASAllData = data
    .map((item) => item.Application_Services)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

    const AS_ModelPointsData = ASAllData.AS_ModelsData;
  
    const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
      
    const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

    const appServicesData = ASAllData.ComprehensiveApplicationServicesData.map(item => ({
        Mainhead: item.appmainhead,
        Subhead: item.appsubhead,
        Content: [item.appcontent1,item.appcontent2,item.appcontent3]
    }));

    return (
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"/>
        <div className='mt-5'>
        <Zoomin heading={ASAllData.applicationRevolutionizingHeading} heading2={ASAllData.applicationInnovativeHeading} content={[ASAllData.applicationInnovativeContent1,ASAllData.applicationInnovativeContent2,ASAllData.applicationInnovativeContent3,ASAllData.applicationInnovativeContent4]}/>
        </div>
        <BoxServicesData allservices={appServicesData} textColor="#FE0000"/>
        <ModelsPoints contents={AS_ModelPointsData} />
        </div>
    );
};

export default ApplicationServices;