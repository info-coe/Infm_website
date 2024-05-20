import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Mission = (props) => {
    const data = props.product;
    const mission = [data.aboutUsMissionContent]
    return (
        <>
        <div>
            <img src={data.aboutUsVisionMainImage.url} width='100%' alt='no-display' className="mainimg img-fluid d-none d-md-block" />
            <img src={data.aboutUsVisionSubImage.url} alt='no-display' className="sunimg img-fluid d-md-none" />
        <div>
      <Zoomin heading={data.aboutUsMissionHeading} content={mission} />

        </div>
        </div>
        </>
    );
};

export default Mission;