import React from 'react';
import {ServicesAllHeadingAndContent} from './ServicesContent'
import Zoomin from '../../reusablecomponents/zoomin';

const ApplicationServices = () => {
    const serviceMainimage = ServicesAllHeadingAndContent[0].serviceMainimage
    const serviceSubimage  = ServicesAllHeadingAndContent[0].serviceSubimage
    const applicationData = ServicesAllHeadingAndContent[3]

    return (
        <div>
        <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
        <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100"  />
        <div className='mt-5'>
        <Zoomin heading={applicationData.apphead1} heading2={applicationData.apphead2} content={[applicationData.appcontent1,applicationData.appcontent2,applicationData.appcontent3,applicationData.appcontent4]}/>
        </div>
        
        </div>
    );
};

export default ApplicationServices;