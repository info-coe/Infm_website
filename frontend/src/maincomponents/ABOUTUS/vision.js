import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Vision = (props) => {
    const data = props.product;
    const vision = [data.aboutUsVisionContent]
    return (
        <div>
            <div>
      <Zoomin heading={data.aboutUsVisionHeading} content={vision} />
    </div>
        </div>
    );
};

export default Vision;