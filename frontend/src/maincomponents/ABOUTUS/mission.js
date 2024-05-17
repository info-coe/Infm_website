import React from 'react';
import Zoomin from "../../reusablecomponents/zoomin";

const Mission = (props) => {
    const data = props.product;
    const mission = [data.aboutUsMissionContent]
    return (
        <div>
      <Zoomin heading={data.aboutUsMissionHeading} content={mission} />

        </div>
    );
};

export default Mission;