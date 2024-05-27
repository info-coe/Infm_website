import React from 'react';
import AboutZoomin from '../../reusablecomponents/AboutZoomin';
import AboutusContent from "../ABOUTUS/aboutusContent.json"

const Mission = () => {
    const data= AboutusContent
    const content = [
        data[1].content[0].missionContent,
       
      ];
    return (
        <>
        <div>
            <img src={data[0].missionmainimage} height="250" width="100%" alt='no-display' className=" d-none d-md-block" style={{objectFit:"cover"}} />
            <img src={data[0].missionSubimage} alt='no-display' className=" d-md-none" />
        <div className='pt-5 pb-5 mt-md-5 mb-md-5'>
      <AboutZoomin heading1={data[0].missionHeading1} heading2={data[0].missionHeading2} content={content} />

        </div>
        </div>
        </>
    );
};

export default Mission;