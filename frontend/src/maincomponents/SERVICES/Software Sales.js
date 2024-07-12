import React from 'react';
import serviceContent from "./ServicesComponent.json";
import IndustriesSideContent from '../../reusablecomponents/IndustriesSideContent';
// import CardBulb from '../../reusablecomponents/IndustriesCardBulb';
import CardBulb2 from '../../reusablecomponents/industriesCardBulb2';
// import Zoomin from '../../reusablecomponents/zoomin';
import AboutZoomin from '../../reusablecomponents/AboutZoomin';
import { Link } from 'react-router-dom';

const SoftwareSales = () => {
    const SoftwareSalesData =serviceContent[1].ServicesAllHeadingAndContent[13]

    const TechnologyUtilizationSlides = serviceContent[19].softwarSales
    const  softwarSalesSideContent = serviceContent[20].softwarSalesSideContent

    const serviceMainimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage
    const serviceSubimage =serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage

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
        <div>
            <style>{styles}</style>
            <img src={serviceMainimage} width="100%" height="150%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
            <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
            <div className='mt-5'>
        <AboutZoomin heading1={SoftwareSalesData.softwareSalesHeading} heading2={SoftwareSalesData.softwareSalesHeading2} content={[SoftwareSalesData.softwareSalesContent1,SoftwareSalesData.softwareSalesContent2]}   textdisplay="d-md-flex"/>
        </div>
            
            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px'}}>
                <div className='col-lg-6 d-md-flex gap-4'>
                <CardBulb2 solutionofferingData={TechnologyUtilizationSlides}/>
                </div> 
                <div className='col-lg-4 ps-3 paragraph-div'>
                   <IndustriesSideContent data={softwarSalesSideContent[0]}/>
                </div>
            </div>
             <p className='text-center'>For more details or to discuss your specific needs,<Link to='/contact' className='text-decoration-none'> <span className='text-danger'>Contact Us</span></Link> today!</p>
        </div>
        </>
    );
};

export default SoftwareSales;