import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import AdvantagesServices from '../../reusablecomponents/AdvantagesServices';

const DigitalTransformationServices = (props) => {
    const data = props.product;
    const digitalData = data.servicesAllHeadingAndContent[1]
    const allservicedata= data.allServicesData
    const advantagesData = data.servicesAdvantages[0]
    return (
        <>
        <div>
        <img src={data.serviceMainimage.url} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={data.serviceSubimage.url} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={digitalData.dtshead} content={[digitalData.dtscontent]}/>
        </div>
        <div>
            <img src={data.dtsImage.url} width="100%" alt='no-display'/>
        </div>
         <AdvantagesServices heading={advantagesData.Advanheading} icon={advantagesData.advanicon} advantagesData={[
              advantagesData.point1,
              advantagesData.point2,
              advantagesData.point3,
              ]}
              image={advantagesData.img}
              />

            <BoxServicesData allservices={allservicedata}/>
            <ModelsPoints contents={data} />
        </div>
        </>
    );
};

export default DigitalTransformationServices;
