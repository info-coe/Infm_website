import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import AdvantagesServices from '../../reusablecomponents/AdvantagesServices';
import serviceContent from './ServicesComponent.json'

const DigitalTransformationServices = () => {
    const data = serviceContent[3].ServiceCmsModelsData
    const digitalData =serviceContent[1].ServicesAllHeadingAndContent[1]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const dtsImage =serviceContent[1].ServicesAllHeadingAndContent[1].digitalImage
    const digitalServiceData= serviceContent[5].DigitalServicesData
    const dtsServicesData = digitalServiceData.map(item => ({
        Mainhead: item.dtsmainhead,
        Subhead: item.dtssubhead,
        Content: [item.dtscontent],
      }));
    const advantagesData = serviceContent[4].ServicesAdvantages[0]
    return (
        <>
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={digitalData.digitalunleashheading} content={[digitalData.digitalunleashpara]}/>
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

            <BoxServicesData allservices={dtsServicesData} textColor="#0f62fe"/>
            <ModelsPoints contents={data} />
        </div>
        </>
    );
};

export default DigitalTransformationServices;
