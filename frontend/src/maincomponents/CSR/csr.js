import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import CsrContent from "./csrContent.json"
import CSRkeypillars from '../../reusablecomponents/CSRkeypillars';
import CSRimplementationStrategy from '../../reusablecomponents/CSRimplementationStrategy';

const Csr = () => {
    const data= CsrContent[0]
    Aos.init();
    return (
        <>
        <img
        src={data.csrbanner}
        width="100%"
        alt="CSR"
        className="img-fluid d-none d-md-block"
      />
      <img
        src={data.csrMobilebanner}
        alt="CSRMobile"
        className="img-fluid d-md-none w-100"
      />
        <div className='container'>
            <div className='' data-aos="zoom-in" data-aos-once="true" data-aos-duration="1300">
                <h1 className='text-center mt-3 mb-5 pb-3'><span className='text-primary'>{data.PolicyOnCorporate}</span>&nbsp;<span className='text-danger'>{data.SocialResponsibility}</span></h1>

                <h5 className='text-primary'>{data.Vision}</h5>
                <p className='fs-5'>{data.VisionDescription}</p>
                <h5 className='text-primary'>{data.Objective}</h5>
                <p className='fs-5'>{data.ObjectiveDescription}</p>
                <h5 className='text-center text-danger mt-5'>{data.KeyPillarsofOurGlobalCSRInitiative}</h5>
                <div className='d-md-flex justify-content-between mb-4'>
                    <CSRkeypillars data={CsrContent}/>
                </div>
            </div>  
            <div className=''>
                <h5 className='text-center text-danger mb-5 mt-5'>{data.ImplementationStrategy}</h5>
              
                 <div  className=' ps-lg-5 pe-lg-5 ms-lg-5 me-lg-5 ps-md-3 pe-md-3 ms-md-3 me-md-3 ps-2 pe-2 mb-5'>
                 <CSRimplementationStrategy data={CsrContent}/>
                 </div>
                   
              
            </div> 
            <div className='pb-5'>
                <h5 className='text-center text-danger mb-4 mt-4'>{data.MeasurementImpacty}</h5>
                <p className='mb-5 mt-5'>{data.MeasurementImpactyPara1}</p>
                <p className='mt-4 mb-5'>{data.MeasurementImpactyPara2}</p>
            </div>
        </div> 
        </>
    );
};

export default Csr;