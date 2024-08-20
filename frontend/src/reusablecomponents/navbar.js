import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoLogo from "./Infologo";
import SideNavbar from "./SideNavbar";

const Navigation = (props) => {
  const HomeContent = JSON.parse(props.product.homeContent.Content);
  const data = HomeContent.map((item) => item.NavbarData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  const [isRotated, setIsRotated] = useState(false);
  const [dropdownState, setDropdownState] = useState({
    aboutus: false,
    industries: false,
    services: false,
    cloud: false,
    solutions: false,
    careers: false,
  });

  const handleHover = () => {
    setIsRotated(!isRotated);
  };

  const handleDropdownMouseEnter = (dropdown) => {
    setDropdownState((prevState) => ({ ...prevState, [dropdown]: true }));
  };

  const handleDropdownMouseLeave = (dropdown) => {
    setDropdownState((prevState) => ({ ...prevState, [dropdown]: false }));
  };

  const handleLinkClick = () => {
    setDropdownState({
      aboutus: false,
      industries: false,
      services: false,
      cloud: false,
      solutions: false,
      careers: false,
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top scrolled">
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-4 ps-lg-5 ms-lg-5 ps-2">
            {/* <span
              className="toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="bi bi-text-left"></i>
            </span> */}
            <span
              className="toggle"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
                <div
                  style={{ borderBottom: "2px solid #FE0000", width: "16px", margin:"8px" }}
                ></div>
                <div
                  style={{ borderBottom: "2px solid #FE0000", width: "27px", margin:"8px"  }}
                ></div>
                <div
                  style={{ borderBottom: "2px solid #FE0000", width: "16px", margin:"8px"  }}
                ></div>
            </span>
            <div className="d-none d-lg-block">
              <InfoLogo logosrc={data.logo} />
            </div>
          </div>
          <div
            className="collapse navbar-collapse d-flex justify-content-center d-none d-lg-block"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex gap-2">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  id="homelink"
                  onClick={handleLinkClick}
                >
                  {data.home}
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("aboutus")}
                onMouseLeave={() => handleDropdownMouseLeave("aboutus")}
              >
                <Link
                 className={`nav-link  ${dropdownState.aboutus ? "textRed" : ""}`}
                  to="/Aboutus"
                  id="aboutusDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  {data.aboutus}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.aboutus ? "show" : ""
                  }`}
                  aria-labelledby="aboutusDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Vision"
                      onClick={handleLinkClick}
                    >
                      {data.vision}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Mission"
                      onClick={handleLinkClick}
                    >
                      {data.mission}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("industries")}
                onMouseLeave={() => handleDropdownMouseLeave("industries")}
              >
                <span id="industriesDropdown" className={`nav-link  ${dropdownState.industries ? "textRed" : ""}`}>{data.industries}</span>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.industries ? "show" : ""
                  }`}
                  aria-labelledby="industriesDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Manufacturing-Automotive"
                      onClick={handleLinkClick}
                    >
                      {data.manufacturingAutomotive}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Energy-Utilities"
                      onClick={handleLinkClick}
                    >
                      {data.energyUtilities}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Banking-Insurance-Services"
                      onClick={handleLinkClick}
                    >
                      {data.bankingInsuranceServices}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Healthcare-LifeSciences"
                      onClick={handleLinkClick}
                    >
                      {data.healthcareLifeSciences}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Media-Telecom"
                      onClick={handleLinkClick}
                    >
                      {data.mediaTelecom}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Airline-Travel-Logistics"
                      onClick={handleLinkClick}
                    >
                      {data.airlineTravelLogistics}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Consumer-Retail"
                      onClick={handleLinkClick}
                    >
                      {data.consumerRetail}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("services")}
                onMouseLeave={() => handleDropdownMouseLeave("services")}
              >
                <Link
                  className={`nav-link  ${dropdownState.services ? "textRed" : ""}`}
                  to="/Services"
                  id="servicesDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  {data.services}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.services ? "show" : ""
                  }`}
                  aria-labelledby="servicesDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/CRM"
                      onClick={handleLinkClick}
                    >
                      {data.crm}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Digital-Transformation-Services"
                      onClick={handleLinkClick}
                    >
                      {data.digitalTransformationServices}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Security-Architecture"
                      onClick={handleLinkClick}
                    >
                      {data.securityArchitecture}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Application-Services"
                      onClick={handleLinkClick}
                    >
                      {data.applicationServices}
                    </Link>
                  </li>
                  <li
                    className="nav-item dropdown"
                    onMouseEnter={() => handleDropdownMouseEnter("cloud")}
                    onMouseLeave={() => handleDropdownMouseLeave("cloud")}
                  >
                    <div
                      className="dropdown-item lineAnimation"
                      id="cloudDropdown"
                    >
                      <span className="d-flex justify-content-between">
                        <span>{data.cloud}</span>
                        <span>
                          <i className="bi bi-chevron-compact-right"></i>
                        </span>
                      </span>
                    </div>
                    <ul
                      className={`dropdown-menu ${
                        dropdownState.cloud ? "show" : ""
                      }`}
                      aria-labelledby="cloudDropdown"
                    >
                      <li>
                        <Link
                          className="dropdown-item lineAnimation"
                          to="/Cloud-Services"
                          onClick={handleLinkClick}
                        >
                          {data.cloudServices}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item lineAnimation"
                          to="/AWS-Services"
                          onClick={handleLinkClick}
                        >
                          {data.awsServices}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item lineAnimation"
                          to="/Microsoft-Cloud-Services"
                          onClick={handleLinkClick}
                        >
                          {data.microsoftCloudServices}
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item lineAnimation"
                          to="/Microsoft365"
                          onClick={handleLinkClick}
                        >
                          {data.microsoft365}
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Data-Services"
                      onClick={handleLinkClick}
                    >
                      {data.dataServices}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Internet-Of-Things"
                      onClick={handleLinkClick}
                    >
                      {data.internetOfThings}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Testing-QA-Services"
                      onClick={handleLinkClick}
                    >
                      {data.businessAssuranceTesting}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Enterprise-Portal"
                      onClick={handleLinkClick}
                    >
                      {data.enterprisePortal}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Service-Oriented-Architecture"
                      onClick={handleLinkClick}
                    >
                      {data.serviceOrientedArchitecture}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Free-POC-POT"
                      onClick={handleLinkClick}
                    >
                      {data.freePocPot}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Software-Sales"
                      onClick={handleLinkClick}
                    >
                      {data.softwareSales}
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("solutions")}
                onMouseLeave={() => handleDropdownMouseLeave("solutions")}
              >
                <span id="solutionsDropdown"  className={`nav-link  ${dropdownState.solutions ? "textRed" : ""}`}>{data.solutions}</span>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.solutions ? "show" : ""
                  }`}
                  aria-labelledby="solutionsDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Robotic-Automation-Process"
                      onClick={handleLinkClick}
                    >
                      {data.roboticAutomationProcess}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Oracle-Cloud"
                      onClick={handleLinkClick}
                    >
                      {data.oracleCloud}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/SAP"
                      onClick={handleLinkClick}
                    >
                      {data.sap}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/CRM"
                      onClick={handleLinkClick}
                    >
                      {data.solutionsCrm}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Mobility"
                      onClick={handleLinkClick}
                    >
                      {data.mobility}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Business-Process-Management"
                      onClick={handleLinkClick}
                    >
                      {data.businessProcessManagement}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/DevOps"
                      onClick={handleLinkClick}
                    >
                      {data.devops}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Service-Oriented-Architecture"
                      onClick={handleLinkClick}
                    >
                      {data.serviceOrientedArchitecture}
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/Contact"
                  id="contactlink"
                  onClick={handleLinkClick}
                >
                  {data.contactus}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/CSR"
                  id="csrlink"
                  onClick={handleLinkClick}
                >
                  {data.csr}
                </Link>
              </li>
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleDropdownMouseEnter("careers")}
                onMouseLeave={() => handleDropdownMouseLeave("careers")}
              >
                <Link
                 className={`nav-link  ${dropdownState.careers ? "textRed" : ""}`}
                  to="/Careers"
                  id="careersDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={handleLinkClick}
                >
                  {data.careers}
                </Link>
                <ul
                  className={`dropdown-menu ${
                    dropdownState.careers ? "show" : ""
                  }`}
                  aria-labelledby="careersDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Careers-Hyd"
                      onClick={handleLinkClick}
                    >
                      {data.hyderabad}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item lineAnimation"
                      to="/Careers-Bangalore"
                      onClick={handleLinkClick}
                    >
                      {data.bangalore}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas start */}
      <div
        className="offcanvas slide offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between">
          <InfoLogo logosrc={data.logo} />
          <i
            className={`bi bi-x-circle-fill fs-3 btnClose ${
              isRotated ? "rotate" : ""
            }`}
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
