import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import serviceContent from './ServicesComponent.json'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';

const ApplicationServices = () => {
    const data = serviceContent[3].ServiceCmsModelsData
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage  = serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const applicationData = serviceContent[1].ServicesAllHeadingAndContent[3]
    const applicationServiceData= serviceContent[7].ComprehensiveApplicationServicesData
    const appServicesData = applicationServiceData.map(item => ({
        Mainhead: item.appmainhead,
        Subhead: item.appsubhead,
        Content: [item.appcontent1,item.appcontent2,item.appcontent3]
    }));
    return (
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={applicationData.revolutionizingmainheading} heading2={applicationData.innovativeheading} content={[applicationData.innovativecontent1,applicationData.innovativecontent2,applicationData.innovativecontent3,applicationData.appcontent4]}/>
        </div>
        <BoxServicesData allservices={appServicesData} textColor="#FE0000"/ >
        <ModelsPoints contents={data} />
        </div>
    );
};

export default ApplicationServices;