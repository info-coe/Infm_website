import React from 'react';
import SolutionData from "./solutionscontent.json";
import ModelsPoints from '../../reusablecomponents/ModelsPoints';
import AboutZoomin from '../../reusablecomponents/AboutZoomin';
import CardBulb from '../../reusablecomponents/IndustriesCardBulb';


const BusinessProcessManagement = (props) => {
    const serviceContent = JSON.parse(props.product.ServicesComponent.Content);
    // console.log(serviceContent)
    const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
    const BPMData = SolutionData[7].Business_Process_Management;
    
    return (
        <div>
                  <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
           <div className='pt-5 pb-5'>
           <AboutZoomin heading1={BPMData.BPM_Heading1} heading2={BPMData.BPM_Heading2} content={BPMData.content} />
           </div>

        <div className="col-md-12">
          <div
            className="gradient-bg py-5"
            style={{
              background:
                "linear-gradient(to right, #F1A00B 15%, #0f62fe 50%, #0f62fe  100%)",
            }}
          >
            <div
              className="container text-white"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-once="true"
              style={{fontSize:"17px"}}
            >
              {BPMData.BPM_Suitedrives_Content}
            </div>
          </div>
        </div>

        <div style={{backgroundImage: `url(${BPMData.BPM_bgImg})`, backgroundSize: 'cover', padding:"10px 10px 80px 10px"}}>
            <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"100px", marginBottom:'100px' }}>

                <div className='col-lg-5 text-center'>
                   <h2 className='mb-3'><span className='text-primary'>{BPMData.BPM_Technology}</span>&nbsp;<span className='text-danger'>{BPMData.BPM_Enablers}</span></h2>
                </div>
                <div className='col-lg-6'>
               {BPMData.BPM_Suites.map((item,index)=>(
                <p key={index}><span className='fw-bold'>{item.name}</span>&nbsp;{item.desc}</p>
               ))}
                </div>
            </div>
        </div>

        <div className="col-md-12">
          <div
            className="gradient-bg py-5"
            style={{
              background:
                "linear-gradient(to right, #F1A00B 15%, #0f62fe 50%, #0f62fe  100%)",
            }}
          >
            <div
              className="container text-white"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-once="true"
              style={{fontSize:"17px"}}
            >
                <p className='mb-5' style={{fontSize:'18px'}}>{BPMData.BPM_Business_experts}</p>
             <div style={{lineHeight:"18px", fontSize:"16px"}}>
             {BPMData.BPM_BE_list.map((item,index)=>(
                <ul className='list-unstyled' >
                    <li key={index}><i className="bi bi-check-lg fs-6"></i> &nbsp;{item}</li>
                </ul>
              ))}
             </div>
            </div>
          </div>
        </div>

        <div className='container d-md-flex flex-wrap gap-5 align-items-center' style={{marginTop:"50px", marginBottom:'50px'}}>
                <div className='col-lg-5 col-md-6 d-md-flex gap-4'>
                <CardBulb solutionofferingData={BPMData.BPM_SolutionOfferings}/>
                </div> 
                <div className='col-lg-6 col-md-5'>
                   <h2><span className='text-primary'>{BPMData.Infomerica_BPM}</span>&nbsp;<span className='text-danger'>{BPMData.Offerings}</span></h2>
                   <p>{BPMData.content_BPM}</p>
                </div>
            </div>
            <ModelsPoints contents={crmModelPointsData} /> 
        </div>
    );
};

export default BusinessProcessManagement;