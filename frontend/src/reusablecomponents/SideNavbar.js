import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNavbar = (props) => {
    const data = props.data;
    const [showChilds, setShowChilds] = useState({ about: false, industries: false, services: false, solutions: false, careers: false });

    const toggleChilds = (section, event) => {
        event.stopPropagation();  // Prevent triggering on link click
        setShowChilds(prevState => ({ ...prevState, [section]: !prevState[section] }));
    };

    return (
        <>
            <div>
                <ul className="list-unstyled sidenavbardiv ps-4 mt-4">
                    {/* Home section */}
                    <li data-bs-dismiss="offcanvas">
                        <Link to="/" className="text-decoration-none fw-bold">{data.home}</Link>
                    </li>
                    <hr />

                    {/* About us section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                <Link to="/Aboutus" className='text-decoration-none'>{data.aboutus}</Link>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.about ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('about', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.about ? 'show' : ''}`}>
                            <Link to="/Vision" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.vision}</li>
                            </Link>
                            <hr />
                            <Link to="/Mission" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.mission}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>

                    {/* Industries section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                {/* <Link to="/Industries" className='text-decoration-none'>{data.industries}</Link> */}
                                <span className='industriesLink'>{data.industries}</span>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.industries ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('industries', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.industries ? 'show' : ''}`}>
                            <Link to="/Manufacturing-Automotive" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.manufacturingAutomotive}</li>
                            </Link>
                            <hr />
                            <Link to="/Energy-Utilities" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.energyUtilities}</li>
                            </Link>
                            <hr />
                            <Link to="/Banking-Insurance-Services" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.bankingInsuranceServices}</li>
                            </Link>
                            <hr />
                            <Link to="/Healthcare-LifeSciences" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.healthcareLifeSciences}</li>
                            </Link>
                            <hr />
                            <Link to="/Media-Telecom" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.mediaTelecom}</li>
                            </Link>
                            <hr />
                            <Link to="/Airline-Travel-Logistics" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.airlineTravelLogistics}</li>
                            </Link>
                            <hr />
                            <Link to="/Consumer-Retail" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.consumerRetail}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>

                    {/* Services section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                <Link to="/Services" className='text-decoration-none'>{data.services}</Link>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.services ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('services', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.services ? 'show' : ''}`}>
                            <Link to="/Generative-AI" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.generativeai}</li>
                            </Link>
                            <hr />
                            <Link to="/CRM" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.crm}</li>
                            </Link>
                            <hr />
                            <Link to="/Digital-Transformation-Services" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.digitalTransformationServices}</li>
                            </Link>
                            <hr />
                            <Link to="/Security-Architecture" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.securityArchitecture}</li>
                            </Link>
                            <hr />
                            <Link to="/Application-Services" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.applicationServices}</li>
                            </Link>
                            <hr />
                            <div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <li className="text-decoration-none ps-4">{data.cloud}</li>
                                    <i className={`bi bi-caret-right-square fs-5 ${showChilds.cloud ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('cloud', event)}></i>
                                </div>
                                <hr />
                                <div className={`aboutchilds ${showChilds.cloud ? 'show' : ''}`}>
                                    <Link to="/Cloud-Services" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">{data.cloudServices}</li>
                                    </Link>
                                    <hr />
                                    <Link to="/AWS-Services" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">{data.awsServices}</li>
                                    </Link>
                                    <hr />
                                    <Link to="/Microsoft-Cloud-Services" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">{data.microsoftCloudServices}</li>
                                    </Link>
                                    <hr />
                                    <Link to="/Microsoft365" className="text-decoration-none">
                                        <li className="ps-4" data-bs-dismiss="offcanvas">{data.microsoft365}</li>
                                    </Link>
                                    <hr />
                                </div>
                            </div>
                            <Link to="/Data-Services" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.dataServices}</li>
                            </Link>
                            <hr />
                            <Link to="/Internet-Of-Things" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.internetOfThings}</li>
                            </Link>
                            <hr />
                            <Link to="/Testing-QA-Services" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.businessAssuranceTesting}</li>
                            </Link>
                            <hr />
                            <Link to="/Enterprise-Portal" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.enterprisePortal}</li>
                            </Link>
                            <hr />
                            <Link to="/Free-POC-POT" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.freePocPot}</li>
                            </Link>
                            <hr />
                            <Link to="/Software-Sales" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.softwareSales}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>

                    {/* Solutions section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="text-decoration-none fw-bold">
                                {/* <Link to="/Solutions" className='text-decoration-none'>{data.solutions}</Link> */}
                                <span className='solutionLink'>{data.solutions}</span>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.solutions ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('solutions', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.solutions ? 'show' : ''}`}>
                            <Link to="/Robotic-Automation-Process" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.roboticAutomationProcess}</li>
                            </Link>
                            <hr />
                            <Link to="/Oracle-Cloud" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.oracleCloud}</li>
                            </Link>
                            <hr />
                            <Link to="/SAP" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.sap}</li>
                            </Link>
                            <hr />
                            <Link to="/CRM" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.solutionsCrm}</li>
                            </Link>
                            <hr />
                            <Link to="/Mobility" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.mobility}</li>
                            </Link>
                            <hr />
                            <Link to="/Business-Process-Management" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.businessProcessManagement}</li>
                            </Link>
                            <hr />
                            <Link to="/DevOps" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.devops}</li>
                            </Link>
                            <hr />
                            <Link to="/Service-Oriented-Architecture" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.serviceOrientedArchitecture}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>

                    {/* Contact Us section */}
                    <li data-bs-dismiss="offcanvas">
                        <Link to="/Contact" className="text-decoration-none fw-bold">{data.contactus}</Link>
                    </li>
                    <hr />

                    {/* CSR section */}
                    <li data-bs-dismiss="offcanvas">
                        <Link to="/CSR" className="text-decoration-none fw-bold">{data.csr}</Link>
                    </li>
                    <hr />

                    {/* Careers section */}
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <li className="fw-bold" data-bs-dismiss="offcanvas">
                                <Link to="/Careers" className='text-decoration-none'>{data.careers}</Link>
                            </li>
                            <i className={`bi bi-caret-right-square fs-5 ${showChilds.careers ? 'rotate-down rotate' : 'rotate-down'}`} style={{ cursor: "pointer" }} onClick={(event) => toggleChilds('careers', event)}></i>
                        </div>
                        <hr />
                        <div className={`aboutchilds ${showChilds.careers ? 'show' : ''}`}>
                            <Link to="/Careers-Hyd" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.hyderabad}</li>
                            </Link>
                            <hr />
                            <Link to="/Careers-Bangalore" className="text-decoration-none">
                                <li className="ps-4" data-bs-dismiss="offcanvas">{data.bangalore}</li>
                            </Link>
                            <hr />
                        </div>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default SideNavbar;
