import React from 'react';
import AboutZoomin from '../../reusablecomponents/AboutZoomin';

const Vision = (props) => {
    const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
    const data= AboutusContent
    .map((item) => item.Our_Vision)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];
    
    return (
        <>        
        <div>
            <img src={data.OV_MainBanner}  width="100%" alt='no-display' className="img-fluid d-none d-md-block" />
            <img src={data.OV_MobileBanner} alt='no-display' className="img-fluid d-md-none w-100" />
            <div className='pt-5 pb-5 mt-5 mb-5'>
      <AboutZoomin heading1={data.OV_Heading1} heading2={data.OV_Heading2} content={data.OV_Content} />
            </div>
        </div>
        </>

    );
};

export default Vision;