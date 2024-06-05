import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import serviceContent from "./ServicesComponent.json";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import ImageMoving from "../../reusablecomponents/ImageMoving";
import industriesContent from "../INDUSTRIES/industriesContent.json";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import AOS from "aos";
import "aos/dist/aos.css";

const Microsoft365 = () => {
  const contentData = serviceContent[1].ServicesAllHeadingAndContent[7];
  const crmModelPointsData = serviceContent[3].ServiceCmsModelsData;
  const serviceMainimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicebannerimage;
  const serviceSubimage =
    serviceContent[1].ServicesAllHeadingAndContent[0].servicemobileimage;
  const serviceMicroPractImage =
    serviceContent[1].ServicesAllHeadingAndContent[7].microsoftpractimage;
  const { micro_Data_Services, micro_Cloud_Computing } = serviceContent[11];
  const { offerings, technology, servicesmainbulb } = industriesContent[0];
  AOS.init({
    offset: 120,
    delay: 1,
    duration: 3000,
    once: true,
  });

  console.log(serviceContent);
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
            <ImageMoving image={serviceMicroPractImage} />
            <div>
              <ul className=" list-unstyled">
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint1}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint2}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint3}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint4}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint5}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint6}
                </li>
                <li>
                  <i className={contentData.microsofticon} />
                  {contentData.microsoftpoint7}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <Zoomin2
              heading={contentData.microsofttransformmainheading}
              heading2={contentData.microsofttransformsubheading}
              content={[
                contentData.microsofttransformcontent1,
                contentData.microsofttransformcontent2,
              ]}
              textdisplay="d-md-flex"
            />
          </div>
        </div>
      </div>
      

      <div>
        <div className="text-center p-4 fs-1" fade-down-right>
          <span style={{ color: "#FF0000" }}>{technology}</span>
          <span style={{ color: " #0f62fe" }}>{offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={micro_Cloud_Computing}
          industriesImage12={servicesmainbulb}
          dataServices={micro_Data_Services}
        />
      </div>

      <ModelsPoints contents={crmModelPointsData} />
    </div>
  );
};

export default Microsoft365;
