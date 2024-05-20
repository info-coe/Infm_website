import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Vision = (props) => {
    const data = props.product;
    const vision = [data.aboutUsVisionContent]
    return (
        <>        
        <div>
            <img src={data.aboutUsVisionMainImage.url} width='100%' alt='no-display' className="mainimg img-fluid d-none d-md-block" />
            <img src={data.aboutUsVisionSubImage.url} alt='no-display' className="sunimg img-fluid d-md-none" />
            <div>
      <Zoomin heading={data.aboutUsVisionHeading} content={vision} />
    </div>
        </div>
        </>

    );
};

export default Vision;