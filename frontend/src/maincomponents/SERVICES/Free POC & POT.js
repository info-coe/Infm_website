import React from 'react';
import serviceContent from './ServicesComponent.json'
import Zoomin from '../../reusablecomponents/zoomin';
import ImageMoving from "../../reusablecomponents/ImageMoving";
import NoZoomin from '../../reusablecomponents/NoZoomin'

const FreePOCPOT = () => {
    const freePotData =serviceContent[1].ServicesAllHeadingAndContent[12]
    const freePOCPOTImage= serviceContent[1].ServicesAllHeadingAndContent[12].freePOCPOTImage
    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage
    const sections = [
      {
        heading: freePotData.freePOCPOTTailoredHeading,
        content: freePotData.freePOCPOTTailoredContent
      },
      {
        heading: freePotData.freePOCPOTStrategicHeading,
        content: freePotData.freePOCPOTStrategicContent
      }
    ];    return (
        <div>
      <img src={serviceMainimage} width="100%" height="150%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
      <div className='mt-5'>
        <Zoomin heading={freePotData.freePOCPOTUnveilHeading} heading2={freePotData.freePOCPOTHeading1} heading3={freePotData.freePOCPOTHeading2} content={[freePotData.freePOCPOTUnveilContnent]}   textdisplay="d-md-flex"/>
        </div>
        <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <ImageMoving image={freePOCPOTImage} />
          </div>
          <div className="col-md-8 mb-5 d-md-flex gap-3">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className='fs-6 text-danger'>{section.heading}</h4>
              <p>{section.content}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
      <NoZoomin heading2={freePotData.freePOCPOTEngageHeading} textsize='20px' texttop="20px" content={[freePotData.freePOCPOTEngageContent1,freePotData.freePOCPOTEngageContent2]} contact={freePotData.freePOCPOTEngageContact} today={freePotData.freePOCPOTEngagetoday} link={freePotData.freePOCPOTEngageContactLink}/>
        </div>
    );
};

export default FreePOCPOT;