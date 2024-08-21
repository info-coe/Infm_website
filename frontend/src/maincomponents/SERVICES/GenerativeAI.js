import React from "react";
import featureImage5 from "./Images/featuresImage5.png";
import { Link } from "react-router-dom";
// import Product2 from "./Images/AI1.jpg";
// import Product1 from "./Images/scan3.jpg";
import Contactus from "./ContactUs";

export default function GenerativeAI(props) {
    const data = JSON.parse(props.product.ServiceContent.Content);

    const GenerativeAIData = data
        .map((item) => item.GenerativeAI)
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


    return (
        <div>
            <div className="awsmain">
                <img src={serviceMainimage} width="100%" alt="Main Service" className="mainimg img-fluid d-none d-md-block" />
                <img src={serviceSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
            </div>
            <div className="container">
                <h2 className="text-center mt-4 mb-4">
                    {GenerativeAIData.GAIHead}
                </h2>
                <p>
                    {GenerativeAIData.GAIDesc}
                </p>
                <div className="mt-4">
                    <h3> {GenerativeAIData.GAIServicesHeading}</h3>
                    <section className="ServicesContainer mt-4">
                        {GenerativeAIData.GAIServices.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="content">
                                    <h3>{item.heading}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
                <div className="AIsolutionImg shadow p-4 rounded d-md-flex">
                    <div className="col-md-5 text-center">
                        <img src={featureImage5} alt="whychooseus" width="80%"></img>
                    </div>
                    <div className="col-md-7 d-md-flex justify-content-center align-items-center">
                        <div>
                            <h2>{GenerativeAIData.GAI_AI_Solution_PartnerHead}</h2>
                            <p>
                                {GenerativeAIData.GAI_AI_Solution_PartnerDesc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3>{GenerativeAIData.GAI_ProductsHead}</h3>
                    <div className="d-md-flex justify-content-evenly gap-5 mt-4">
                        {GenerativeAIData.GAI_Products.map((item, index) => (
                            <div className="shadow" key={index}>
                                <h4 className="text-center pt-4">{item.title}</h4>
                                {/* <div className="text-center">
                                    <img src={`Product${index + 1}`} alt="infoscan" width="75%" />
                                </div> */}
                                <p className="pe-3 ps-3">
                                    {item.content}
                                </p>
                                <div className="text-end pb-3 pe-3">
                                    <Link
                                        to={item.linkto}
                                        className="text-decoration-none text-dark btn btn-dark text-white m-2"
                                        target="blank"
                                    >
                                        <b>
                                            {item.learnmore} <i className={item.icon}></i>
                                        </b>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-4">
                    <h3>{GenerativeAIData.GAI_Our_ExpertiseHead}</h3>

                    <div className="features-container">
                        {GenerativeAIData.GAI_OurExpertise.map((item, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-content">
                                    <h5>{item.heading}</h5>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Contactus />
        </div>
    );
}
