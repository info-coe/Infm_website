import React from 'react';
import AboutZoomin from '../../reusablecomponents/AboutZoomin';

const Mission = (props) => {
  const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
  const data= AboutusContent
  .map((item) => item.Our_Mission)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

    return (
        <>
        <div>
            <img src={data.OM_MainBanner}  width="100%" alt='no-display' className="img-fluid d-none d-md-block"  />
            <img src={data.OM_MobileBanner} alt='no-display' className="img-fluid d-md-none w-100" />
        <div className='pt-5 pb-5 mt-md-5 mb-md-5'>
      <AboutZoomin heading1={data.OM_Heading1} heading2={data.OM_Heading2} content={data.OM_Content} />

        </div>
        </div>
        </>
    );
};

export default Mission;