import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import serviceContent from './ServicesComponent.json'
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const AWSServices = () => {
    const awsData =serviceContent[1].ServicesAllHeadingAndContent[5]
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const sections = [
        {
            content: awsData.unveilfuturecontent
        },
        {
            heading: awsData.navigatingheading,
            content: awsData.navigatingcontent
        }
    ];
    const awsServiceData= serviceContent[9].ExtensiveAWSServicesData
    const awsServicesData = awsServiceData.map(item => ({
        Mainhead: item.awsmainhead,
        Subhead: item.awssubhead,
        Content: [item.awscontent1,item.awscontent2,item.awscontent3,item.awscontent4]
    }));
    
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData

    return (
    <>
      <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={awsData.unveilfuturemainheading} sections={sections} textsize="25px"/>
        </div>
        <BoxServicesData allservices={awsServicesData} textColor="#0f62fe" textsize='25px'  icon={awsServiceData[0].awsicon} />
         <NoZoomin heading={awsData.innovatemainheading} textsize='25px' texttop="20px" content={[awsData.innovatecontent]} image={awsData.innovateimage}/>
         <ModelsPoints contents={crmModelPointsData} /> 
         </div>

        </>
    );
};

export default AWSServices;