import React from 'react';
import {} from './ServicesContent'
import Zoomin from '../../reusablecomponents/zoomin';
import serviceContent from './ServicesComponent.json'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';

const ApplicationServices = () => {
    const data = serviceContent[3].ServiceCmsModelsData
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceMainimage
    const serviceSubimage  = serviceContent[1].ServicesAllHeadingAndContent[0].serviceSubimage
    const applicationData = serviceContent[1].ServicesAllHeadingAndContent[3]
    const applicationservicedata= serviceContent[7].ApplicatonServicesData
    const appServicesData = applicationservicedata.map(item => ({
        Mainhead: item.appmainhead,
        Subhead: item.appsubhead,
        Content: [item.appcontent1,item.appcontent2,item.appcontent3]
    }));
    return (
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={applicationData.apphead1} heading2={applicationData.apphead2} content={[applicationData.appcontent1,applicationData.appcontent2,applicationData.appcontent3,applicationData.appcontent4]}/>
        </div>
        <BoxServicesData allservices={appServicesData} textColor="#FE0000"/ >
        <ModelsPoints contents={data} />
        </div>
    );
};

export default ApplicationServices;