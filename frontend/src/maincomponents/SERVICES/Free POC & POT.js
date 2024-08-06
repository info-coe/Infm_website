import React from "react";
import Zoomin from "../../reusablecomponents/zoomin";
import ImageMoving from "../../reusablecomponents/ImageMoving";
import NoZoomin from "../../reusablecomponents/NoZoomin";

const FreePOCPOT = (props) => {
  const data = JSON.parse(props.product.ServiceContent.Content);
  const POCPOTAllData = data
    .map((item) => item.Free_POC_POT)
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

  const freePOCPOTImage = POCPOTAllData.freePOCPOTImage;
  const sections = [
    {
      heading: POCPOTAllData.freePOCPOTTailoredHeading,
      content: POCPOTAllData.freePOCPOTTailoredContent,
    },
    {
      heading: POCPOTAllData.freePOCPOTStrategicHeading,
      content: POCPOTAllData.freePOCPOTStrategicContent,
    },
  ];

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
      <div className="mt-5">
        <Zoomin
          heading={POCPOTAllData.freePOCPOTUnveilHeading}
          heading2={POCPOTAllData.freePOCPOTHeading1}
          heading3={POCPOTAllData.freePOCPOTHeading2}
          content={[POCPOTAllData.freePOCPOTUnveilContnent]}
          textdisplay="d-md-flex"
        />
      </div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-4 mb-3 mb-md-0">
            <ImageMoving image={freePOCPOTImage} />
          </div>
          <div className="col-md-8 mb-5 d-md-flex gap-3">
            {sections.map((section, index) => (
              <div key={index}>
                <h4 className="fs-6 text-danger">{section.heading}</h4>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <NoZoomin
        heading2={POCPOTAllData.freePOCPOTEngageHeading}
        textsize="20px"
        texttop="20px"
        content={[
          POCPOTAllData.freePOCPOTEngageContent1,
          POCPOTAllData.freePOCPOTEngageContent2,
        ]}
        contact={POCPOTAllData.freePOCPOTEngageContact}
        today={POCPOTAllData.freePOCPOTEngagetoday}
        link={POCPOTAllData.freePOCPOTEngageContactLink}
      />
    </div>
  );
};

export default FreePOCPOT;
