import React from 'react';
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import serviceContent from "./ServicesComponent.json";
import NoZoomin from '../../reusablecomponents/NoZoomin';
import CareersSlideContent from '../../reusablecomponents/CareersSlideContent';
import Aos from 'aos';
import "aos/dist/aos.css"

const BusinessAssuranceTesting = () => {
    const testingServiceData = serviceContent[1].ServicesAllHeadingAndContent[10];
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    const serviceMainimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage;
  const serviceSubimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage;

    const testingServiceImage =  serviceContent[1].ServicesAllHeadingAndContent[10].testingServiceImage
    const ComprehensiveAssuranceTestingData = serviceContent[17].ComprehensiveAssuranceTestingData
    Aos.init();
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
        <NoZoomin heading={testingServiceData.testingServiceHeading} heading2={testingServiceData.testingServiceAssuranceHeading} content={[testingServiceData.testingServiceContent]} textsize="30px" textdisplay="d-md-flex"/>
        </div>
        <div className='text-center'>
            <img src={testingServiceImage} width="85%" alt='no-display'/>
        </div>
        <div>
        <div className="container mt-5">
       <div className="row">
        <h3 style={{color:'#FE0000'}}>{ComprehensiveAssuranceTestingData[0].heading}</h3>
        {ComprehensiveAssuranceTestingData.map((item, index) => (
            <div className="p-3">
              <h5 style={{color:'#FE0000'}}>{item.name}</h5>
              <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
        </div>
        <div className='d-md-flex flex-wrap gap-4 justify-content-center m-5 mt-0'>
        <CareersSlideContent data={serviceContent[18].TechnologyUtilizationSlides}/>
        </div>
       <ModelsPoints contents={crmModelPointsData} />

        </div>
    );
};

export default BusinessAssuranceTesting;