import React from 'react';
import {} from './ServicesContent'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import CrmServices from '../../reusablecomponents/CrmServices';
import NoZoomin from '../../reusablecomponents/NoZoomin';
import serviceContent from './ServicesComponent.json'


const SecurityArchitecture = () => {
    const secuirtyData = serviceContent[1].ServicesAllHeadingAndContent[2]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceMainimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceSubimage
    const secImage = serviceContent[1].ServicesAllHeadingAndContent[2].secImage
    const data = serviceContent[3].ServiceCmsModelsData
    const securityServicesData = serviceContent[6].SecurityServicesData.map(item => ({
        mainHead: item.secmainhead,
        subHead: item.secminhead,
        objective: item.seccontent1,
        outcome: item.seccontent2,
        approach:item.seccontent3
      }));
    return (
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <NoZoomin heading={secuirtyData.sechead1} heading2={secuirtyData.sechead2} content={[secuirtyData.seccontent1,secuirtyData.seccontent2,secuirtyData.seccontent3]}/>
       
        </div>
        <div className='text-center'>
            <img src={secImage} width="85%" alt='no-display'/>
        </div>
        <CrmServices serviceData={securityServicesData}/>
        <ModelsPoints contents={data} />

        </div>
    );
};

export default SecurityArchitecture;