import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'
const MicrosoftCloudServices = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);  
    const MCSAllData = data
    .map((item) => item.Microsoft_Cloud_Services)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];
  
    const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
      
    const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

    const sections = [
        {
            content: MCSAllData.microsoftCloudContent
        },
        {
            heading: MCSAllData.microsoftElevateHeading,
            content: MCSAllData.microsoftElevateContent
        }
    ];
    const microServiceData= MCSAllData.HolisticMicrosoftServicesData
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
        <Zoomin heading={MCSAllData.microsoftCloudHeading} sections={sections} textsize="25px"/>
        </div>

        <div className='mt-5'>
        <BoxServicesData allservices={microServicesData} textColor="#0f62fe" textsize='25px'  icon={microServiceData[0].microicon}/>
         <NoZoomin heading={MCSAllData.microsoftTrustedHeading} textsize='25px' texttop="20px" content={[MCSAllData.microsoftTrustedContent1,MCSAllData.microsoftTrustedContent2]} image={MCSAllData.microsoftTrustedImage} contact={MCSAllData.microsoftTrustedContact} today={MCSAllData.microsoftTrustedToday} link={MCSAllData.microsoftTrustedContactLink}/>
        </div>
        </div>

        </div>
    );
};

export default MicrosoftCloudServices;