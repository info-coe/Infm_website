import React, { useState, useRef } from "react";
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
  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
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
  const [benifits, setBenefits] = useState([Benefit1, Benefit2, Benefit3, Benefit4])
  return (
    <div>
      <div className="awsmain">
      <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
      </div>
      <div className="mt-4">
        <h1 className="m-4 text-center">
         {AWSCloudMigrationData.CM_Head}
        </h1>
        <div>
          <div className="d-md-flex justify-content-center align-items-center gap-5 m-2 mb-0">
            <img
              src={AWSCompetency}
              className=""
              width="20%"
              alt="AWS Compentency"
            ></img>
            <p className="fs-5">
            {AWSCloudMigrationData.CM_Content}
              <br />
              <span className="d-flex justify-content-start me-4 fs-6 mt-3">
                <button className="btn btn-dark" onClick={scrollToContact}>
                  {AWSCloudMigrationData.CM_Contactus} <i className={AWSCloudMigrationData.CM_Icon}></i>
                </button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="m-5">
        <h1 className="text-center">{AWSCloudMigrationData.CM_OurService_Portfolio_Head}</h1>
        <p className="fs-5">
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
          <h1 className="text-center">{AWSCloudMigrationData.CM_Benefits_Head}</h1>
        </div>

        <div className="mt-5 ourcapabilities-grid">
          {AWSCloudMigrationData.CM_Benefits.map((item,index)=>(
             <div className="flip-card" tabIndex="0">
             <div className="flip-card-inner">
               <div className="flip-card-front d-flex flex-column">
                 <img
                   src={benifits[index]}
                   alt="Migration Strategy Development"
                   width="80%"
                 ></img>
                 <h3>{item.heading}</h3>
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
     <Contactus/>
    </div>
  );
}