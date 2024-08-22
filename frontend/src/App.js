import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./maincomponents/HOME/home";
import Notfound from "./Notfound";

import Aboutus from "./maincomponents/ABOUTUS/aboutus";
import Vision from "./maincomponents/ABOUTUS/vision";
import Mission from "./maincomponents/ABOUTUS/mission";

import Industries from "./maincomponents/INDUSTRIES/Industries";
import AirlineTravelLogistics from "./maincomponents/INDUSTRIES/Airline & Travel & Logistics";
import BankingInsuranceServices from "./maincomponents/INDUSTRIES/Banking & Insurance Services";
import ConsumerRetail from "./maincomponents/INDUSTRIES/Consumer & Retail";
import EnergyUtilities from "./maincomponents/INDUSTRIES/Energy & Utilities";
import HealthcareLifeSciences from "./maincomponents/INDUSTRIES/Healthcare & Life Sciences";
import ManufacturingAutomotive from "./maincomponents/INDUSTRIES/Manufacturing & Automotive";
import MediaTelecom from "./maincomponents/INDUSTRIES/Media & Telecom";

import Services from "./maincomponents/SERVICES/services";
import ApplicationServices from "./maincomponents/SERVICES/Application Services";
import AWSServices from "./maincomponents/SERVICES/AWS Services";
import BusinessAssuranceTesting from "./maincomponents/SERVICES/Business Assurance & Testing";
import CloudServices from "./maincomponents/SERVICES/Cloud Services";
import CustomerRelationshipManagement from "./maincomponents/SERVICES/Customer Relationship Management (CRM)";
import DataServices from "./maincomponents/SERVICES/Data Services";
import DigitalTransformationServices from "./maincomponents/SERVICES/Digital Transformation Services";
import EnterprisePortal from "./maincomponents/SERVICES/Enterprise Portal";
import FreePOCPOT from "./maincomponents/SERVICES/Free POC & POT";
import InternetOfThings from "./maincomponents/SERVICES/Internet Of Things";
import Microsoft365 from "./maincomponents/SERVICES/Microsoft 365";
import MicrosoftCloudServices from "./maincomponents/SERVICES/Microsoft Cloud Services";
import SecurityArchitecture from "./maincomponents/SERVICES/Security Architecture";
import SoftwareSales from "./maincomponents/SERVICES/Software Sales";
import ServiceOrientedArchitecture from "./maincomponents/SOLUTIONS/Service Oriented Architecture";

import Solutions from "./maincomponents/SOLUTIONS/Solutions";
import BusinessProcessManagement from "./maincomponents/SOLUTIONS/Business Process Management";
import CRM from "./maincomponents/SOLUTIONS/CRM";
import DevOps from "./maincomponents/SOLUTIONS/DevOps";
import Mobility from "./maincomponents/SOLUTIONS/Mobility";
import OracleCloud from "./maincomponents/SOLUTIONS/Oracle Cloud";
import RoboticAutomationProcess from "./maincomponents/SOLUTIONS/Robotic Automation Process";
import SAP from "./maincomponents/SOLUTIONS/SAP";
import Contactus from "./maincomponents/CONTACTUS/contactus";
import Csr from "./maincomponents/CSR/csr";
import Careers from "./maincomponents/CAREERS/careers";
import Hyderabad from "./maincomponents/CAREERS/hyderabad";
import Bangalore from "./maincomponents/CAREERS/bangalore";
import Navigation from "./reusablecomponents/navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./reusablecomponents/Footer";
import Scrolltotop from "./reusablecomponents/Scrolltotop";
import axios from "axios";
import Scrolltotopbtn from "./reusablecomponents/Scrolltotopbutton";
import Loader from "./Loader";
import GenerativeAI from "./maincomponents/SERVICES/GenerativeAI";
import InfoScan from "./maincomponents/SERVICES/Infoscan";
import InfoAIAccelerator from "./maincomponents/SERVICES/InfoAIAccelerator";
import AWSCloudMigration from "./maincomponents/SERVICES/AWSCloudMigration";
import TermsConditions from "./maincomponents/ABOUTUS/Terms&Conditions";
import PrivacyPolicies from "./maincomponents/ABOUTUS/Privacy&Policies";

function App() {
  const [s3objects, setS3objects] = useState({});

  useEffect(() => {
    const API_ENDPOINT = process.env.REACT_APP_AWS_API_GATEWAY_ENDPOINT;
    const Token = process.env.REACT_APP_AWS_AUTHORIZATION_TOKEN;
    axios
      .get(API_ENDPOINT, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          // "Access-Control-Request-Headers": "*",
          "Access-Control-Allow-Methods": "GET",
          authorizationToken: Token,
        },
      })
      .then((response) => {
        const data = JSON.parse(response.data.body.toString());
        const newState = {};
        data.forEach((item, index) => {
          newState[item.Key.slice(0, -5)] = item;
        });
        setS3objects(newState);
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid secret token");
      });
  }, []);

  return (
    <>
      {Object.keys(s3objects).length > 0 ? (
        <BrowserRouter basename="Infm_website">
          <Scrolltotop />
          <Navigation product={s3objects}/>
          <Routes>
            <Route
              path="/"
              exact
              element={<Home product={s3objects} />}
            ></Route>

            <Route
              path="Aboutus"
              element={<Aboutus product={s3objects} />}
            ></Route>
            <Route
              path="Vision"
              element={<Vision product={s3objects} />}
            ></Route>
            <Route
              path="Mission"
              element={<Mission product={s3objects} />}
            ></Route>

            <Route
              path="Industries"
              element={<Industries product={s3objects} />}
            ></Route>
            <Route
              path="Airline-Travel-Logistics"
              element={<AirlineTravelLogistics product={s3objects} />}
            ></Route>
            <Route
              path="Banking-Insurance-Services"
              element={<BankingInsuranceServices product={s3objects} />}
            ></Route>
            <Route
              path="Consumer-Retail"
              element={<ConsumerRetail product={s3objects} />}
            ></Route>
            <Route
              path="Energy-Utilities"
              element={<EnergyUtilities product={s3objects} />}
            ></Route>
            <Route
              path="Healthcare-LifeSciences"
              element={<HealthcareLifeSciences product={s3objects} />}
            ></Route>
            <Route
              path="Manufacturing-Automotive"
              element={<ManufacturingAutomotive product={s3objects} />}
            ></Route>
            <Route
              path="Media-Telecom"
              element={<MediaTelecom product={s3objects} />}
            ></Route>

            <Route
              path="Services"
              element={<Services product={s3objects} />}
            ></Route>
            <Route
              path="Application-Services"
              element={<ApplicationServices product={s3objects} />}
            ></Route>
            <Route
              path="AWS-Services"
              element={<AWSServices product={s3objects} />}
            ></Route>
            <Route
              path="AWS-Cloud-Migration"
              element={<AWSCloudMigration product={s3objects} />}
            ></Route>
            <Route
              path="Testing-QA-Services"
              element={<BusinessAssuranceTesting product={s3objects} />}
            ></Route>
            <Route
              path="Cloud-Services"
              element={<CloudServices product={s3objects} />}
            ></Route>
             <Route
              path="Generative-AI"
              element={<GenerativeAI product={s3objects} />}
            ></Route>
            <Route
              path="Info-Scan"
              element={<InfoScan product={s3objects} />}
            ></Route>
            <Route
              path="Info-AI-Accelerator"
              element={<InfoAIAccelerator product={s3objects} />}
            ></Route>
            <Route
              path="CRM"
              element={<CustomerRelationshipManagement product={s3objects} />}
            ></Route>
            <Route
              path="Data-Services"
              element={<DataServices product={s3objects} />}
            ></Route>
            <Route
              path="Digital-Transformation-Services"
              element={<DigitalTransformationServices product={s3objects} />}
            ></Route>
            <Route
              path="Enterprise-Portal"
              element={<EnterprisePortal product={s3objects} />}
            ></Route>
            <Route
              path="Free-POC-POT"
              element={<FreePOCPOT product={s3objects} />}
            ></Route>
            <Route
              path="Internet-Of-Things"
              element={<InternetOfThings product={s3objects} />}
            ></Route>
            <Route
              path="Microsoft365"
              element={<Microsoft365 product={s3objects} />}
            ></Route>
            <Route
              path="Microsoft-Cloud-Services"
              element={<MicrosoftCloudServices product={s3objects} />}
            ></Route>
            <Route
              path="Security-Architecture"
              element={<SecurityArchitecture product={s3objects} />}
            ></Route>
            <Route
              path="Software-Sales"
              element={<SoftwareSales product={s3objects} />}
            ></Route>

            <Route
              path="Solutions"
              element={<Solutions product={s3objects} />}
            ></Route>
            <Route
              path="Business-Process-Management"
              element={<BusinessProcessManagement product={s3objects} />}
            ></Route>
            <Route path="CRM" element={<CRM product={s3objects} />}></Route>
            <Route
              path="DevOps"
              element={<DevOps product={s3objects} />}
            ></Route>
            <Route
              path="Mobility"
              element={<Mobility product={s3objects} />}
            ></Route>
            <Route
              path="Oracle-Cloud"
              element={<OracleCloud product={s3objects} />}
            ></Route>
            <Route
              path="Robotic-Automation-Process"
              element={<RoboticAutomationProcess product={s3objects} />}
            ></Route>
            <Route path="SAP" element={<SAP product={s3objects} />}></Route>
            <Route
              path="Service-Oriented-Architecture"
              element={<ServiceOrientedArchitecture product={s3objects} />}
            ></Route>

            <Route
              path="Contact"
              element={<Contactus product={s3objects} />}
            ></Route>

            <Route path="CSR" element={<Csr product={s3objects} />}></Route>

            <Route
              path="Careers"
              element={<Careers product={s3objects} />}
            ></Route>
            <Route
              path="Careers-Hyd"
              element={<Hyderabad product={s3objects} />}
            ></Route>
            <Route
              path="Careers-Bangalore"
              element={<Bangalore product={s3objects} />}
            ></Route>
             <Route
              path="Terms"
              element={<TermsConditions product={s3objects} />}
            ></Route>
             <Route
              path="Privacy-policy"
              element={<PrivacyPolicies product={s3objects} />}
            ></Route>

            <Route path="*" element={<Notfound />}></Route>
          </Routes>
          <Footer product={s3objects}/>
          <Scrolltotopbtn />
        </BrowserRouter>
      ) : (
        <Loader/>
      )}
    </>
  );
}

export default App;
