import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import serviceContent from './ServicesComponent.json'
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'
const MicrosoftCloudServices = () => {
    const microsoftData =serviceContent[1].ServicesAllHeadingAndContent[6]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const sections = [
        {
            content: microsoftData.microsoftCloudContent
        },
        {
            heading: microsoftData.microsoftElevateHeading,
            content: microsoftData.microsoftElevateContent
        }
    ];
    const microServiceData= serviceContent[10].HolisticMicrosoftServicesData
    const microServicesData = microServiceData.map(item => ({
        Mainhead: item.micromainhead,
        Subhead: item.microsubhead,
        Content: [item.microcontent1,item.microcontent2,item.microcontent3]
    }));

    return (
        <div>
       <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={microsoftData.microsoftCloudHeading} sections={sections} textsize="25px"/>
        </div>

        <div className='mt-5'>
        <BoxServicesData allservices={microServicesData} textColor="#0f62fe" textsize='25px'  icon={microServiceData[0].microicon}/>
         <NoZoomin heading={microsoftData.microsoftTrustedHeading} textsize='25px' texttop="20px" content={[microsoftData.microsoftTrustedContent1,microsoftData.microsoftTrustedContent2]} image={microsoftData.microsoftTrustedImage} contact={microsoftData.microsoftTrustedContact} today={microsoftData.microsoftTrustedToday} link={microsoftData.microsoftTrustedContactLink}/>
        </div>
        </div>

        </div>
    );
};

export default MicrosoftCloudServices;