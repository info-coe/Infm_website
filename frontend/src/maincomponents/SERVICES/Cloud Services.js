import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import AdvantagesServices from '../../reusablecomponents/AdvantagesServices';
import serviceContent from './ServicesComponent.json'
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'

const CloudServices = () => {
    const cloudData =serviceContent[1].ServicesAllHeadingAndContent[4]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const cloudImage =serviceContent[1].ServicesAllHeadingAndContent[4].cloudPlatformMigrationImage
    const advantagesData = serviceContent[4].ServicesAdvantages[1]
    const sections = [
        {
            content: cloudData.cloudWelcomeContent
        },
        {
            heading: cloudData.cloudUnveilHeading,
            content: cloudData.cloudUnveilContent
        }
    ];
    const cloudServiceData= serviceContent[8].ComprehensiveCloudServicesData
    const cloudServicesData = cloudServiceData.map(item => ({
        Mainhead: item.cloudmainhead,
        Subhead: item.cloudsubhead,
        Content: [item.cloudcontent1,item.cloudcontent2,item.cloudcontent3]
    }));
    return (
        <>
        <div>
      <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={cloudData.cloudWelcomeHeading} sections={sections} />
        </div>
        <div className='text-center'>
            <img src={cloudImage} width="75%" alt='no-display'/>
        </div>
    <div className='mt-5'>
         <AdvantagesServices heading={advantagesData.cloudServiceAdvanHeading} icon={advantagesData.cloudServiceAdvanIcon} advantagesData={[
              advantagesData.cloudServiceAdvanPoint1,
              advantagesData.cloudServiceAdvanPoint2,
              advantagesData.cloudServiceAdvanPoint3,
              advantagesData.cloudServiceAdvanPoint4,
              ]}
              image1={advantagesData.cloudServiceAdvantageimage1}
              image2={advantagesData.cloudServiceAdvantageimage2}
              />
      </div>
        </div>
        <BoxServicesData allservices={cloudServicesData} textColor="#0f62fe" textsize='25px'  icon={cloudServiceData[0].cloudicon}/>
         <NoZoomin textsize='25px' texttop="30px" heading={cloudData.cloudTransformHeading} content={[cloudData.cloudTransformContent1,cloudData.cloudTransformContent2]} contact={cloudData.cloudTransformContact} today={cloudData.cloudTransformtoday} link={cloudData.cloudTransContactLink}/>
        </div>
        </>
    );
};

export default CloudServices;