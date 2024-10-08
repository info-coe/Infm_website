import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import AboutZoomin from "../../reusablecomponents/AboutZoomin";
import ToggleableCard from "../../reusablecomponents/ToggleableCard";
import BoxServicesDataSAP from "../../reusablecomponents/BoxServicesDataSAP";
import { SolutionOfferingsSAP } from "../../reusablecomponents/SolutionOfferingsSAP";
import SlideRight from "../../reusablecomponents/SlideRight";

const SAP = (props) => {
  const SolutionData = JSON.parse(props.product.solutionscontent.Content);
  // const crmModelPointsData = serviceContent
  //   .map((item) => item.ServiceCmsModelsData)
  //   .filter(Boolean)
  //   .reduce((acc, curr) => acc.concat(curr), []);

  const SAPAllData = SolutionData
    .map((item) => item.SAP)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

    const SAP_ModalData= SAPAllData.SAP_ModelsData

    const sapServiceData= SAPAllData.SAP_HANA_Data
    const sapServicesData = sapServiceData.map(item => ({
        Mainhead: item.sapmainhead,
        SubHeading:item.sapsubheading,
        Subhead: item.sapsubhead,
        Subhead2:item.sapsubhead2,
        Content: [item.sapcontent1,item.sapcontent2,item.sapcontent3]
    }));



  return (
    <div>
      <img
        src={SolutionData[0].solutionsMainBanner}
        width="100%"
        alt="Main Solution"
      ></img>
      <div className="mt-5">
        <AboutZoomin
          heading1={SAPAllData.SAP_heading1}
          heading2={SAPAllData.SAP_heading2}
          content={[SAPAllData.SAP_content1, SAPAllData.SAP_content2]}
        />
      </div>
      <div className="d-flex justify-content-center m-3">
        <img src={SAPAllData.SAP_Portfolio_Image} alt="SAPMAP" className="img-fluid"/>
      </div>
      <div
        className="w-100 overflow-none"
      >
        <div className="container fs-1 font-weight-normal">
          <span style={{ color: "#0f62fe" }}> {SAPAllData.SAP_Solution} </span>
          <div className="fs-5 font-weight-normal">
            <p>{SAPAllData.SAP_description}</p>
          </div>
        </div>
        <SolutionOfferingsSAP managementData={SAPAllData.SAP_ProductManagementData} />
      </div>
              <SlideRight
                data={
                  <div className="mt-2 mb-2 ">
                    <BoxServicesDataSAP allservices={sapServicesData} textColor="#0f62fe" textsize='25px'  icon={sapServiceData[0].sapicon} />

                  </div>
                }
              />
      <div className="container d-md-flex gap-4 mt-5">
        <div className="col-md-6">
          <h4 className="mb-4" style={{color:"#FE0000"}}>{SAPAllData.SAP_Services_Portfolio_Heading}</h4>
          {SAPAllData.SAP_Services_Portfolio.map((item, index) => (
            <ToggleableCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>

        <div className="col-md-6">
          <h4 className="mb-4" style={{color:"#FE0000"}}>{SAPAllData.SAP_Focus_Offering_Heading}</h4>
          {SAPAllData.SAP_Focus_Offering.map((item, index) => (
            <ToggleableCard
              key={index}
              icon={item.icon}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
      <ModelsPoints contents={SAP_ModalData} />
    </div>
  );
};

export default SAP;
