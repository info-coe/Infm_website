import React from 'react';
import Zoomin from '../../reusablecomponents/zoomin';
import BoxServicesData from '../../reusablecomponents/BoxServicesData';
import NoZoomin from '../../reusablecomponents/NoZoomin'
import ModelsPoints from '../../reusablecomponents/ModelsPoints';

const AWSServices = (props) => {
    const data = JSON.parse(props.product.ServiceContent.Content);
    const crmModelPointsData = data
      .map((item) => item.ServiceCmsModelsData)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
  
    const AWSSAllData = data
    .map((item) => item.Aws_Services)
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
            content: AWSSAllData.awsUnveilFutureContent
        },
        {
            heading: AWSSAllData.awsNavigatingHeading,
            content: AWSSAllData.awsNavigatingContent
        }
    ];
    const awsServiceData= AWSSAllData.ExtensiveAWSServicesData
    const awsServicesData = awsServiceData.map(item => ({
        Mainhead: item.awsmainhead,
        Subhead: item.awssubhead,
        Content: [item.awscontent1,item.awscontent2,item.awscontent3,item.awscontent4]
    }));

    return (
    <>
      <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={AWSSAllData.awsUnveilFutureHeading} sections={sections} textsize="25px"/>
        </div>
        <BoxServicesData allservices={awsServicesData} textColor="#0f62fe" textsize='25px'  icon={awsServiceData[0].awsicon} />
         <NoZoomin heading={AWSSAllData.awsInnovateHeading} textsize='25px' texttop="20px" content={[AWSSAllData.awsInnovateContent]} image={AWSSAllData.awsInnovateImage}/>
         <ModelsPoints contents={crmModelPointsData} /> 
         </div>

        </>
    );
};

export default AWSServices;