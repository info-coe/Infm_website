import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import AdvantagesServices from '../../reusablecomponents/AdvantagesServices';
import serviceContent from './ServicesComponent.json'

const DigitalTransformationServices = () => {
    const data = serviceContent[3].ServiceCmsModelsData
    const digitalData =serviceContent[1].ServicesAllHeadingAndContent[1]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceMainimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].serviceSubimage
    const dtsImage =serviceContent[1].ServicesAllHeadingAndContent[1].dtsImage
    const digitalservicedata= serviceContent[5].DigitalServicesData
    const dgtServicesData = digitalservicedata.map(item => ({
        Mainhead: item.dtsmainhead,
        Subhead: item.dtssubhead,
        Content: [item.dtscontent],
      }));
      console.log(dgtServicesData)
    const advantagesData = serviceContent[4].ServicesAdvantages[0]
    return (
        <>
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={digitalData.dtshead} content={[digitalData.dtscontent]}/>
        </div>
        <div>
            <img src={dtsImage} width="100%" alt='no-display'/>
        </div>
         <AdvantagesServices heading={advantagesData.Advanheading} icon={advantagesData.advanicon} advantagesData={[
              advantagesData.point1,
              advantagesData.point2,
              advantagesData.point3,
              ]}
              image={advantagesData.img}
              />

            <BoxServicesData allservices={dgtServicesData} textColor="#0f62fe"/>
            <ModelsPoints contents={data} />
        </div>
        </>
    );
};

export default DigitalTransformationServices;
