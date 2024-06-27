import React from 'react';
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import serviceContent from "./ServicesComponent.json";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import ImageMoving from "../../reusablecomponents/ImageMoving";
import industriesContent from "../INDUSTRIES/industriesContent.json";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaperPlane } from 'react-icons/fa';  // Correct import

const EnterprisePortal = () => {
    const enterprisePortalData = serviceContent[1].ServicesAllHeadingAndContent[11];
  const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
  const serviceMainimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage;
  const serviceSubimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage;
  const enterprisePortalImage =
    serviceContent[1].ServicesAllHeadingAndContent[11].enterprisePortalImage;
  const { EnterprisePortal_Data_Services, EnterprisePortal_Cloud_Computing } = serviceContent[16];
  const { offerings, technology, servicesmainbulb } = industriesContent[0];
 const {EnterprisePortal_ManagementData}= serviceContent[15]
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

    return (
        <div>
      <img
        src={serviceMainimage}
        width="100%"
        height="150%"
        alt="Main Service"
        className="mainimg img-fluid d-none d-md-block"
      />
      <img
        src={serviceSubimage}
        alt="no-display"
        className="sunimg img-fluid d-md-none w-100"
      />

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <ImageMoving image={enterprisePortalImage} />
            <div>
              <ul className=" list-unstyled">
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint1}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint2}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint3}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint4}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint5}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint6}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint7}
                </li>
                <li>
                  <i className={enterprisePortalData.enterprisePortalIcon} />
                  {enterprisePortalData.enterprisePortalPoint8}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <Zoomin2
              heading={enterprisePortalData.enterprisePortalsHeading}
              heading2={enterprisePortalData.enterprisePortalCmHeading}
              content={[
                enterprisePortalData.enterprisePortalContent1,
                enterprisePortalData.enterprisePortalContent2,
              ]}
              textdisplay="d-md-flex"
            />
          </div>
        </div>
      </div>
       {/* Product Management */}
       <div className="row">
  <div className="">
    <div
      className="gradient-bg py-5"
      style={{
        background:
          "linear-gradient(to right, #F1A00B 15%, #0f62fe 50%, #0f62fe 100%)",
      }}
    >
      <div
        className="container"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        {EnterprisePortal_ManagementData.map((curr, idx) => (
          <div className="text-white" key={idx}>
            <div className="m-3">
              <div className="font-weight-normal">
                <span className="p-1">
                  <FaPaperPlane size="1.2em" />
                </span>
                {curr.name && (
                  <>
                    <span style={{ fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>
                      {curr.name}
                    </span>
                    <span className="m-1">-</span>
                  </>
                )}
                <span className="ms-1">
                  {Object.entries(curr).map(([key, value], index, arr) => {
                    if (key === "name") return null;
                    return (
                      <span key={index} className="d-inline p-1">
                        {value}{index < arr.length - 1 && key !== "name" ? ', ' : ''}
                      </span>
                    );
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={EnterprisePortal_Cloud_Computing}
          industriesImage12={servicesmainbulb}
          dataServices={EnterprisePortal_Data_Services}
        />
      </div>

      <ModelsPoints contents={crmModelPointsData} />
    </div>
    );
};

export default EnterprisePortal;