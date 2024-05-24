import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Mission = (props) => {
    const data = props.product;
    const mission = [data.aboutUsMissionContent]
    return (
        <>
        <div>
            <img src={data.aboutUsVisionMainImage.url} height="250" width="100%" alt='no-display' className=" d-none d-md-block" style={{objectFit:"cover"}} />
            <img src={data.aboutUsVisionSubImage.url} alt='no-display' className=" d-md-none" />
        <div className='pt-5 pb-5 mt-md-5 mb-md-5'>
      <Zoomin heading={data.aboutUsMissionHeading} content={mission} />

        </div>
        </div>
        </>
    );
};

export default Mission;