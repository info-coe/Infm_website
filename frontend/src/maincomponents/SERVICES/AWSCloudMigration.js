import React, { useState } from "react";
import AWSCompetency from "./Images/AWS-competency.png";
import Benefit1 from "./Images/Benefits1.png";
import Benefit2 from "./Images/Benefits2.png";
import Benefit3 from "./Images/Benefits3.png";
import Benefit4 from "./Images/Benefits4.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Contactus from "./ContactUs";


export default function AWSCloudMigration(props) {

  const data = JSON.parse(props.product.ServiceContent.Content);

  const AWSCloudMigrationData = data
      .map((item) => item.Cloud_Migration)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), [])[0];
  const serviceMainimage = data
      .map((item) => item.servicebannerimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);

  const serviceSubimage = data
      .map((item) => item.servicemobileimage)
      .filter(Boolean)
      .reduce((acc, curr) => acc.concat(curr), []);
          //eslint-disable-next-line no-unused-vars
  const [benifits, setBenefits] = useState([Benefit1, Benefit4, Benefit2, Benefit3])
  return (
    <div>
      <div className="awsmain">
      <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
      </div>
      <div className="mt-4">
        <h2 className="m-4 text-center">
         <span className="text-primary">{AWSCloudMigrationData.CM_Head}</span>  <span style={{color:"#ff0000"}}>{AWSCloudMigrationData.CM_Head2}</span>
        </h2>
        <div>
          <div className="d-md-flex justify-content-center align-items-center gap-5 m-2 mb-0">
            <img
              src={AWSCompetency}
              className="cloudmigrationImg"
              width="20%"
              alt="AWS Compentency"
            ></img>
            <p className="fs-6 p-2" style={{lineHeight:"28px"}}>
            {AWSCloudMigrationData.CM_Content}
              <br />
              <span className="d-flex justify-content-start me-4 fs-6 mt-3">
                <a className="btn btn-dark" href="#Scrolltocontact">
                  {AWSCloudMigrationData.CM_Contactus} <i className={AWSCloudMigrationData.CM_Icon}></i>
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-md-5 m-3">
        <h2 className="text-center mb-4"><span className="text-primary">{AWSCloudMigrationData.CM_OurService_Portfolio_Head}</span> <span style={{color:"#ff0000"}}>{AWSCloudMigrationData.CM_OurService_Portfolio_Head2}</span></h2>
        <p className="fs-6" style={{lineHeight:"28px"}}>
         {AWSCloudMigrationData.CM_OurService_Content}
        </p>
        <div className="ourserviceportfolio-grid mt-4">
          {AWSCloudMigrationData.CM_OurServices.map((item,index)=>(
             <div className="shadow ">
             <h5
               className="text-white p-3 portfoliohead"
               style={{ backgroundColor: "rgb(14, 46, 78)", height: "auto" }}
             >
               {item.name}
             </h5>
             <p className="p-3">
             {item.content}
             </p>
           </div>
          ))}
         
        </div>
      </div>
      <div className="m-5">
        <div className="">
          <h2 className="text-center"><span className="text-primary">{AWSCloudMigrationData.CM_Benefits_Head}</span> <span style={{color:"#ff0000"}}>{AWSCloudMigrationData.CM_Benefits_Head2}</span></h2>
        </div>

        <div className="mt-5 ourcapabilities-grid">
          {AWSCloudMigrationData.CM_Benefits.map((item,index)=>(
             <div className="flip-card" tabIndex="0">
             <div className="flip-card-inner">
               <div className="flip-card-front d-flex flex-column">
                 <img
                   src={benifits[index]}
                   alt="Migration Strategy Development"
                   width="70%"
                   height="70%"
                   style={{objectFit:"contain"}}
                 ></img>
                 <h6 className="ps-5 pe-5"><b>{item.heading}</b></h6>
               </div>
               <div className="flip-card-back">
                 <p className="p-4">
                   {" "}
                  {item.content}
                 </p>
               </div>
             </div>
           </div>
          ))}
         
        </div>
      </div>
      <div id="Scrolltocontact">
      <Contactus />
      </div>
     
    </div>
  );
}
