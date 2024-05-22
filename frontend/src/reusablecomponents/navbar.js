
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import InfoLogo from './Infologo';
import SideNavbar from './SideNavbar';

const Navigation = (props) => {
    const data = props.product;
    const [isRotated, setIsRotated] = useState(false);
    const [dropdownState, setDropdownState] = useState({ aboutus: false, industries: false, services: false, cloud: false, solutions:false, careers:false });

    const handleHover = () => {
        setIsRotated(!isRotated);
    };

    const handleDropdownMouseEnter = (dropdown) => {
        setDropdownState((prevState) => ({ ...prevState, [dropdown]: true }));
    };

    const handleDropdownMouseLeave = (dropdown) => {
        setDropdownState((prevState) => ({ ...prevState, [dropdown]: false }));
    };

    const handleDropdownClick = (dropdown) => {
        setDropdownState((prevState) => ({ ...prevState, [dropdown]: !prevState[dropdown] }));
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light sticky-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-4 ps-lg-5 ms-lg-5 ps-2">
                        <span className='toggle' type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-text-left"></i></span>
                        <div className="d-none d-lg-block"> {/* Hide on smaller screens */}
                            <InfoLogo logosrc={data.logo.url} />
                        </div>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-center d-none d-lg-block" id="navbarNavDropdown">
                        <ul className="navbar-nav d-flex gap-2">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">{data.home}</Link>
                            </li>
                            <li className="nav-item dropdown" onClick={() => handleDropdownClick('aboutus')} onMouseEnter={() => handleDropdownMouseEnter('aboutus')} onMouseLeave={() => handleDropdownMouseLeave('aboutus')}>
                                <Link className="nav-link" to="/Aboutus" id="aboutusDropdown" role="button" aria-expanded="false">
                                    {data.aboutus}
                                </Link>
                                <ul className={`dropdown-menu ${dropdownState.aboutus ? 'show' : ''}`} aria-labelledby="aboutusDropdown">
                                    <li><Link className="dropdown-item lineAnimation" to="/Vision">{data.vision}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Mission">{data.mission}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onClick={() => handleDropdownClick('industries')} onMouseEnter={() => handleDropdownMouseEnter('industries')} onMouseLeave={() => handleDropdownMouseLeave('industries')}>
                                <Link className="nav-link" to="" id="industriesDropdown" role="button" aria-expanded="false">
                                    {data.industries}
                                </Link>
                                <ul className={`dropdown-menu ${dropdownState.industries ? 'show' : ''}`} aria-labelledby="industriesDropdown">
                                    <li><Link className="dropdown-item lineAnimation" to="/Manufacturing-Automotive">{data.manufacturingAutomotive}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Energy-Utilities">{data.energyUtilities}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Banking-Insurance-Services">{data.bankingInsuranceServices}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Healthcare-LifeSciences">{data.healthcareLifeSciences}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Media-Telecom">{data.mediaTelecom}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Airline-Travel-Logistics">{data.airlineTravelLogistics}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Consumer-Retail">{data.consumerRetail}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onClick={() => handleDropdownClick('services')} onMouseEnter={() => handleDropdownMouseEnter('services')} onMouseLeave={() => handleDropdownMouseLeave('services')}>
                                <Link className="nav-link" to="/Services" id="servicesDropdown" role="button" aria-expanded="false">
                                    {data.services}
                                </Link>
                                <ul className={`dropdown-menu ${dropdownState.services ? 'show' : ''}`} aria-labelledby="servicesDropdown">
                                    <li><Link to="/CRM" className="dropdown-item lineAnimation">{data.crm}</Link></li>
                                    <li><Link to="/Digital-Transformation-Services " className="dropdown-item lineAnimation">{data.digitalTransformationServices}</Link></li>
                                    <li><Link to="/Security-Architecture" className="dropdown-item lineAnimation">{data.securityArchitecture}</Link></li>
                                    <li><Link to="/Application-Services" className="dropdown-item lineAnimation">{data.applicationServices}</Link></li>
                                    <li className="nav-item dropdown" onClick={() => handleDropdownClick('cloud')} onMouseEnter={() => handleDropdownMouseEnter('cloud')} onMouseLeave={() => handleDropdownMouseLeave('cloud')}>
                                        <li className="dropdown-item lineAnimation" id="cloudDropdown" role="button" aria-expanded="false">
                                           <span className='d-flex justify-content-between'> <span>{data.cloud}</span><span><i className="bi bi-chevron-compact-right"></i></span></span>
                                        </li>
                                        <ul className={`dropdown-menu ${dropdownState.cloud ? 'show' : ''}`} aria-labelledby="cloudDropdown">
                                            <li><Link to="/Cloud-Services" className="dropdown-item lineAnimation">{data.cloudServices}</Link></li>
                                            <li><Link to="/AWS-Services" className="dropdown-item lineAnimation">{data.awsServices}</Link></li>
                                            <li><Link to="/Microsoft-Cloud-Services" className="dropdown-item lineAnimation">{data.microsoftCloudServices}</Link></li>
                                            <li><Link to="/Microsoft365" className="dropdown-item lineAnimation">{data.microsoft365}</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Data-Services" className="dropdown-item lineAnimation">{data.dataServices}</Link></li>
                                    <li><Link to="/Internet-Of-Things" className="dropdown-item lineAnimation">{data.internetOfThings}</Link></li>
                                    <li><Link to="/Testing-QA-Services" className="dropdown-item lineAnimation">{data.businessAssuranceTesting}</Link></li>
                                    <li><Link to="/Enterprise-Portal" className="dropdown-item lineAnimation">{data.enterprisePortal}</Link></li>
                                    <li><Link to="/Free-POC-POT" className="dropdown-item lineAnimation">{data.freePocPot}</Link></li>
                                    <li><Link to="/Software-Sales" className="dropdown-item lineAnimation">{data.softwareSales}</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown" onClick={() => handleDropdownClick('solutions')} onMouseEnter={() => handleDropdownMouseEnter('solutions')} onMouseLeave={() => handleDropdownMouseLeave('solutions')}>
                                <Link className="nav-link" to="" id="solutionsDropdown" role="button" aria-expanded="false">
                                    {data.solutions}
                                </Link>
                                <ul className={`dropdown-menu ${dropdownState.solutions ? 'show' : ''}`} aria-labelledby="solutionsDropdown">
                                    <li><Link className="dropdown-item lineAnimation" to="/Robotic-Automation-Process">{data.roboticAutomationProcess}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Oracle-Cloud">{data.oracleCloud}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/SAP">{data.sap}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/CRM">{data.solutionsCrm}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Mobility">{data.mobility}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Business-Process-Management">{data.businessProcessManagement}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/DevOps">{data.devops}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Service-Oriented-Architecture">{data.serviceOrientedArchitecture}</Link></li>
                                   
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">{data.contactus}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/CSR">{data.csr}</Link>
                            </li>
                            <li className="nav-item dropdown" onClick={() => handleDropdownClick('careers')} onMouseEnter={() => handleDropdownMouseEnter('careers')} onMouseLeave={() => handleDropdownMouseLeave('careers')}>
                                <Link className="nav-link" to="/Careers" id="careersDropdown" role="button" aria-expanded="false">
                                    {data.careers}
                                </Link>
                                <ul className={`dropdown-menu ${dropdownState.careers ? 'show' : ''}`} aria-labelledby="careersDropdown">
                                    <li><Link className="dropdown-item lineAnimation" to="/Careers-Hyd">{data.hyderabad}</Link></li>
                                    <li><Link className="dropdown-item lineAnimation" to="/Careers-Bangalore">{data.bangalore}</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Offcanvas start */}
            <div className="offcanvas slide offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header d-flex justify-content-between">
                    <InfoLogo logosrc={data.logo.url} />
                    <i
                        className={`bi bi-x-circle-fill fs-3 btnClose ${isRotated ? 'rotate' : ''}`}
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        style={{ cursor: "pointer" }}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHover}
                    ></i>
                </div>
                <div className="offcanvas-body">
                    <SideNavbar data={data} />
                </div>
            </div>
            {/* Offcanvas end */}
        </>
    );
};

export default Navigation;
