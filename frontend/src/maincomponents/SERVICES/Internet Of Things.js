import React from 'react';
import serviceContent from "./ServicesComponent.json";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin from '../../reusablecomponents/zoomin';
import AdvantagesServices from '../../reusablecomponents/AdvantagesServices';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'

const InternetOfThings = () => {
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    const serviceMainimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage;
  const serviceSubimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage;
    const iotData =serviceContent[1].ServicesAllHeadingAndContent[9]

    const sections = [
        {
            content: iotData.iotServiceContent
        },
        {
            heading: iotData.iotRevolutionizeHeading,
            content: iotData.iotRevolutionizeContent
        }
    ];
    const advantagesData = serviceContent[4].ServicesAdvantages[2]
    const iotServiceData= serviceContent[14].ComprehensiveIoTServicesData
    const iotServicesData = iotServiceData.map(item => ({
        Mainhead: item.iotmainhead,
        Subhead: item.iotsubhead,
        Content: [item.iotcontent1,item.iotcontent1,item.iotcontent1]
    }));
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

     <div className='mt-5'>
        <Zoomin heading={iotData.iotServiceHeading} sections={sections} textsize="25px"/>
        </div>
        <AdvantagesServices heading={advantagesData.iotServiceAdvanHeading} icon={advantagesData.iotServiceAdvanIcon} advantagesData={[
              advantagesData.iotServiceAdvanPoint1,
              advantagesData.iotServiceAdvanPoint2,
              advantagesData.iotServiceAdvanPoint3,
              advantagesData.iotServiceAdvanPoint4,
              ]}
              />
        <BoxServicesData allservices={iotServicesData} textColor="#0f62fe" textsize='20px'  icon={iotServiceData[0].ioticon}/>
        <NoZoomin heading={iotData.iotEmbarkHeading} textsize='25px' texttop="20px" content={[iotData.iotEmbarkContent]}/>
       <ModelsPoints contents={crmModelPointsData} />

        </div>
    );
};

export default InternetOfThings;