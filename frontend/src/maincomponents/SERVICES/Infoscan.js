import React, { useState } from "react";
import scan1 from "./Images/scan1.jpg";
import scan2 from "./Images/scan2.jpg";
import scan3 from "./Images/scan3.jpg";
import info from "./Images/info-scan.jpg";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import RegisterModal from "./RegisterModal";
import { Link } from "react-router-dom";
import Contactus from "./ContactUs";
import RegisterModal from "./RegisterModal";


export default function InfoScan(props) {
  const data = JSON.parse(props.product.ServiceContent.Content);

    const InfoScanData = data
        .map((item) => item.Info_Scan)
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
    const [scanImages, setScanImages] = useState([scan1,scan2,scan3]);

  const [showModal, setShowModal] = useState(false);

  // Function to handle the opening of the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  // Function to handle the closing of the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

 

  return (
    <>
      <div className="awsmain">
      <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
      <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
      </div>
      <div className="">
        <div className=" p-3 mt-3 mb-3">
          <h1 className="text-center"><span className="text-primary">{InfoScanData.IS_Head}</span> <span style={{color:"#ff0000"}}>{InfoScanData.IS_Head2}</span></h1>
          <div>
            <div className="row align-items-center">
              <div className="col-md-4 text-center">
                <img
                  src={info}
                  alt="Info Scan"
                  width="80%"
                  style={{ filter: "revert(100%)" }}
                />
              </div>
              <div className="col-md-8 ">
                <p>
                {InfoScanData.IS_content1}
                </p>
                <p>
                {InfoScanData.IS_content2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container  pt-4">
          <h2 className="section-header" style={{color:"#ff0000"}}>{InfoScanData.IS_FeaturesHead}</h2>

          <div className="grid-container">
            {InfoScanData.IS_Features.map((item, index) => (
              <div className=" m-2 grid-item" key={index}>
                <div className="features-box">
                  <div>
                    <h4 className="features-title">{item.title}</h4>
                    <p className="features-description">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-4 mb-4">
          <h2 className="section-header"><span className="text-primary">{InfoScanData.IS_ServicesHead}</span> <span style={{color:"#ff0000"}}>{InfoScanData.IS_ServicesHead2}</span></h2>
          <div className="grid-container">
            {InfoScanData.IS_OurServices.map((item, index) => (
              <div
                key={index}
                className="serviceGridItem shadow m-2 p-3 zoomAnimation"
                style={{ cursor: "pointer" }}
                onClick={handleOpenModal}
              >
                <Link to="#" className="text-decoration-none text-dark">
                <div className="" style={{ height: "45%" }}>
                  <img src={scanImages[index]} alt="Services" width="70%" />
                </div>
                <h4 style={{ height: "17%" }}>{item.title}</h4>
                <p>{item.content}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
<Contactus/>
      {showModal && (
        <RegisterModal showmodal={showModal} onClose={handleCloseModal} />
      )}
    </>
  );
}
