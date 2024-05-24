import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Vision = (props) => {
    const data = props.product;
    const vision = [data.aboutUsVisionContent]
    return (
        <>        
        <div>
            <img src={data.aboutUsVisionMainImage.url} height="250" width="100%" alt='no-display' className=" d-none d-md-block" style={{objectFit:"cover"}}/>
            <img src={data.aboutUsVisionSubImage.url} alt='no-display' className=" d-md-none" />
            <div className='pt-5 pb-5 mt-5 mb-5'>
      <Zoomin heading={data.aboutUsVisionHeading} content={vision} />
            </div>
        </div>
        </>

    );
};

export default Vision;