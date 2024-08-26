import React from "react";
import ModelsPoints from "../../reusablecomponents/ModelsPoints";
import Zoomin2 from "../../reusablecomponents/Zoomin2";
import ImageMoving from "../../reusablecomponents/ImageMoving";
import TechnologyOfferings from "../../reusablecomponents/TechnologyOfferings";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPaperPlane } from "react-icons/fa"; // Correct import


const Microsoft365 = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  // const crmModelPointsData = data
  //   .map((item) => item.ServiceCmsModelsData)
  //   .filter(Boolean)
  //   .reduce((acc, curr) => acc.concat(curr), []);

  const M365AllData = data
  .map((item) => item.Microsoft365)
  .filter(Boolean)
  .reduce((acc, curr) => acc.concat(curr), [])[0];

  const M365_ModalData=  M365AllData.M365_ModelsData

  const serviceMainimage = data
    .map((item) => item.servicebannerimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);
    
  const serviceSubimage = data
    .map((item) => item.servicemobileimage)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), []);

  const serviceMicroPractImage = M365AllData.microsoftPractImage;

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
            <ImageMoving image={serviceMicroPractImage} />
            <div>
              <ul className=" list-unstyled">
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint1}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint2}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint3}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint4}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint5}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint6}
                </li>
                <li>
                  <i className={M365AllData.microsoftIcon} />
                  {M365AllData.microsoftPoint7}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 mb-5">
            <Zoomin2
              heading={M365AllData.microsoftTransformHeading}
              heading2={M365AllData.microsoftHeading}
              content={[
                M365AllData.microsoftTransformContent1,
                M365AllData.microsoftTransformContent2,
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
              {M365AllData.micro_auto_ManagementData.map((curr, idx) => (
                <div className="text-white" key={idx}>
                  <div className="m-3">
                    <div className="font-weight-normal">
                      <span className="p-1">
                        <FaPaperPlane size="1.2em" />
                      </span>
                      {curr.name && (
                        <>
                          <span
                            style={{
                              fontWeight: "bold",
                              textShadow:
                                "1px 1px 2px rgba(255, 255, 255, 0.8)",
                            }}
                          >
                            {curr.name}
                          </span>
                          <span className="m-1">-</span>
                        </>
                      )}
                      <span className="ms-1">
                        {Object.entries(curr).map(
                          ([key, value], index, arr) => {
                            if (key === "name") return null;
                            return (
                              <span key={index} className="d-inline p-1">
                                {value}
                                {index < arr.length - 1 && key !== "name"
                                  ? ", "
                                  : ""}
                              </span>
                            );
                          }
                        )}
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
        <div className="text-center p-4 fs-1">
          <span style={{ color: "#FF0000" }}>{M365AllData.microsoft365_Technology} </span>
          <span style={{ color: " #0f62fe" }}>{M365AllData.microsoft365_Offerings}</span>
        </div>
        <TechnologyOfferings
          cloudComputing={M365AllData.micro_Cloud_Computing}
          industriesImage12={M365AllData.microsoft365_MainBulbImg}
          dataServices={M365AllData.micro_Data_Services}
        />
      </div>

      <ModelsPoints contents={M365_ModalData} />
    </div>
  );
};

export default Microsoft365;
