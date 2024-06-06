import React from 'react';
import IndustriesContent from "../INDUSTRIES/industriesContent.json";
import IndustriesOfferingCard from '../../reusablecomponents/IndustriesOfferingCard';
import IndustriesSideContent from '../../reusablecomponents/IndustriesSideContent';
import CardBulb from '../../reusablecomponents/IndustriesCardBulb';
import IndustriesBorderMovingCard from '../../reusablecomponents/IndustriesBorderMovingCard';

const Industries = () => {
    const data = IndustriesContent[0];
    const solutionofferingData = IndustriesContent[6].industriesSolutionOfferings;
    // const solutionofferingBulbData = IndustriesContent[6].industriesSolutionOfferings[1];
    const manufacturindSideContent = IndustriesContent[7].IndustriesSideContent;
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
            <img src={data.industriesmainimage}  alt='Main Industries' className="img-fluid d-none d-md-block"  />
            <img src={data.industriesSubimage} alt='Sub Industries' className="img-fluid d-md-none w-100" />
            
            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px'}}>
                <div className='col-lg-6 d-md-flex gap-4'>
                <IndustriesOfferingCard solutionofferingData={solutionofferingData[0]}/>
                </div>
               
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent[0]}/>
                </div>
            </div>
           <div className='container'>
           <hr style={{height:"2px", background: 'linear-gradient(90deg, rgba(0,125,255,1) 10%, rgba(230,22,22,1) 100%)'}}/>
           </div>
            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px'}}>
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent[1]}/>
                </div>
                <div className='col-lg-6 d-md-flex gap-4'>
                <CardBulb solutionofferingData={solutionofferingData[1]}/>
                </div> 
            </div>
            <div className='container'>
           <hr style={{height:"2px", background: 'linear-gradient(90deg, rgba(0,125,255,1) 10%, rgba(230,22,22,1) 100%)'}}/>
           </div>

            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px'}}>
                <div className='col-lg-6 d-md-flex gap-4'>
                <IndustriesOfferingCard solutionofferingData={solutionofferingData[2]}/>
                </div>
               
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent[2]}/>
                </div>
            </div>
           

            <div style={{backgroundImage: `url(${data.industriesMediatelecomBg})`, backgroundSize: 'cover', padding:"10px" ,marginTop:"100px", marginBottom:'100px'}}>
            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px' }}>

                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent[3]}/>
                </div>
                <div className='col-lg-6 d-md-flex gap-4'>
                <IndustriesBorderMovingCard solutionofferingData={solutionofferingData[3]}/>
                </div>
            </div>
            </div>
           

            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px'}}>
                <div className='col-lg-6 d-md-flex gap-4'>
                <CardBulb solutionofferingData={solutionofferingData[4]}/>
                </div> 
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={manufacturindSideContent[4]}/>
                </div>
            </div>
            
        </>
    );
};

export default Industries;
