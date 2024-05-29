import React from 'react';
import IndustriesContent from "../INDUSTRIES/industriesContent.json";
import IndustriesOfferingCard from '../../reusablecomponents/IndustriesOfferingCard';
import IndustriesSideContent from '../../reusablecomponents/IndustriesSideContent';
import CardBulb from '../../reusablecomponents/CardBulb';

const Industries = () => {
    const data = IndustriesContent[0];
    const solutionofferingData = IndustriesContent[6].industriesSolutionOfferings;
    const manufacturindSideContent = IndustriesContent[7].IndustriesSideContent[0];
    // console.log(solutionofferingData)
    const styles = `
   
    .paragraph-div {
        width: 100%;
    }
   
    @media (min-width: 992px) {
        .paragraph-div {
            width: 40%; 
        }
    }
    `;

    return (
        <>
            <style>{styles}</style>
            <img src={data.industriesmainimage} height="250" alt='no-display' className="responsive-image d-none d-md-block" style={{ objectFit: "cover" }} />
            <img src={data.industriesSubimage} alt='no-display' className="responsive-image d-md-none" />
            <div className='container d-md-flex flex-wrap gap-5 align-items-center'>
              
                <div className='col-lg-6 d-md-flex gap-4'>
                <IndustriesOfferingCard solutionofferingData={solutionofferingData}/>
                </div>
               
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent}/>
                </div>
            </div>
            <CardBulb/>
        </>
    );
};

export default Industries;
