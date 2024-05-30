import "./App.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Query } from 'react-apollo';
// import DATA_QUERY from './Data/index';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

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

import Solutions from "./maincomponents/SOLUTIONS/Solutions";
import BusinessProcessManagement from "./maincomponents/SOLUTIONS/Business Process Management";
import CRM from "./maincomponents/SOLUTIONS/CRM";
import DevOps from "./maincomponents/SOLUTIONS/DevOps";
import Mobility from "./maincomponents/SOLUTIONS/Mobility";
import OracleCloud from "./maincomponents/SOLUTIONS/Oracle Cloud";
import RoboticAutomationProcess from "./maincomponents/SOLUTIONS/Robotic Automation Process";
import SAP from "./maincomponents/SOLUTIONS/SAP";
import ServiceOrientedArchitecture from "./maincomponents/SOLUTIONS/Service Oriented Architecture";

import Contactus from "./maincomponents/CONTACTUS/contactus";

import Csr from "./maincomponents/CSR/csr";

import Careers from "./maincomponents/CAREERS/careers";
import Hyderabad from "./maincomponents/CAREERS/hyderabad";
import Bangalore from "./maincomponents/CAREERS/bangalore";
import Navigation from "./reusablecomponents/navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from "./reusablecomponents/Footer";
import Scrolltotop from "./reusablecomponents/Scrolltotop";
import axios from "axios"

function App() {
  // return (
  //   <Query query={DATA_QUERY}>
  //     {({ loading, error, data }) => {
  //       if (loading) return <div>Fetching Data.....</div>;
  //       if (error) return <div>Error Fetching Data</div>;

  //       const res = data.assets[0];
  //     //  const industries=data.assets[1]

  //       // console.log(res.aboutUs.id);
  //       // const nav = data.assets[3]
  //       // console.log(nav)
  //       // const res1 = data.assets[2]

  const [s3objects, setS3objects] = useState({});

  useEffect(() => {
    const API_ENDPOINT = process.env.REACT_APP_AWS_API_GATEWAY_ENDPOINT;
    const Token = process.env.REACT_APP_AWS_AUTHORIZATION_TOKEN;
      // * GET request: presigned URL
      axios.get(API_ENDPOINT, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            // "Access-Control-Request-Headers": "*",
            "Access-Control-Allow-Methods": "*",
            authorizationToken: Token,
        },
    })
        .then(response => {
            console.log("Response: ", response);
            // console.log(JSON.parse(response.data.body.toString()));
            const data = (JSON.parse(response.data.body.toString()));
            const newState = {};
            data.forEach((item,index) => {
              newState[item.Key.slice(0,-5)] = item;
            });
            setS3objects(newState);
        })
        .catch(error => {
            console.log(error);
            alert("Invalid secret token");
        });
  }, []);

  // console.log((s3objects.ServicesComponent));
        return (
          <>
          {Object.keys(s3objects).length > 0 ? (
            <BrowserRouter basename="Infm_website">
              <Scrolltotop/>
              <Navigation />
              <Routes>
              <Route path="/" exact element={<Home product={s3objects}/>}></Route>


                <Route path="Aboutus" element={<Aboutus product={s3objects}/>}></Route>
                <Route path="Vision" element={<Vision product={s3objects}/>}></Route>
                <Route path="Mission" element={<Mission product={s3objects} />}></Route>

                <Route path="Industries" element={<Industries/>}></Route>
                <Route
                  path="Airline-Travel-Logistics"
                  element={<AirlineTravelLogistics  />}
                ></Route>
                <Route
                  path="Banking-Insurance-Services"
                  element={<BankingInsuranceServices product={s3objects}/>}
                ></Route>
                <Route
                  path="Consumer-Retail"
                  element={<ConsumerRetail />}
                ></Route>
                <Route
                  path="Energy-Utilities"
                  element={<EnergyUtilities product={s3objects} />}
                ></Route>
                <Route
                  path="Healthcare-LifeSciences"
                  element={<HealthcareLifeSciences  product={s3objects}/>}
                ></Route>
                <Route
                  path="Manufacturing-Automotive"
                  element={<ManufacturingAutomotive product={s3objects}/>}
                ></Route>
                <Route path="Media-Telecom" element={<MediaTelecom />}></Route>

                <Route path="Services" element={<Services product={s3objects}/>}></Route>
                <Route
                  path="Application-Services"
                  element={<ApplicationServices />}
                ></Route>
                <Route path="AWS-Services" element={<AWSServices />}></Route>
                <Route
                  path="Testing-QA-Services"
                  element={<BusinessAssuranceTesting />}
                ></Route>
                <Route
                  path="Cloud-Services"
                  element={<CloudServices />}
                ></Route>
                <Route
                  path="CRM"
                  element={<CustomerRelationshipManagement product={s3objects}/>}
                ></Route>
                <Route path="Data-Services" element={<DataServices />}></Route>
                <Route
                  path="Digital-Transformation-Services"
                  element={<DigitalTransformationServices product={s3objects} />}
                ></Route>
                <Route
                  path="Enterprise-Portal"
                  element={<EnterprisePortal />}
                ></Route>
                <Route path="Free-POC-POT" element={<FreePOCPOT />}></Route>
                <Route
                  path="Internet-Of-Things"
                  element={<InternetOfThings />}
                ></Route>
                <Route path="Microsoft365" element={<Microsoft365 />}></Route>
                <Route
                  path="Microsoft-Cloud-Services"
                  element={<MicrosoftCloudServices />}
                ></Route>
                <Route
                  path="Security-Architecture"
                  element={<SecurityArchitecture product={s3objects} />}
                ></Route>
                <Route
                  path="Software-Sales"
                  element={<SoftwareSales />}
                ></Route>

                <Route path="Solutions" element={<Solutions/>}></Route>
                <Route
                  path="Business-Process-Management"
                  element={<BusinessProcessManagement />}
                ></Route>
                <Route path="CRM" element={<CRM />}></Route>
                <Route path="DevOps" element={<DevOps />}></Route>
                <Route path="Mobility" element={<Mobility />}></Route>
                <Route path="Oracle-Cloud" element={<OracleCloud />}></Route>
                <Route
                  path="Robotic-Automation-Process"
                  element={<RoboticAutomationProcess />}
                ></Route>
                <Route path="SAP" element={<SAP />}></Route>
                <Route
                  path="Service-Oriented-Architecture"
                  element={<ServiceOrientedArchitecture />}
                ></Route>

                <Route path="Contact" element={<Contactus />}></Route>

                <Route path="CSR" element={<Csr />}></Route>

                <Route path="Careers" element={<Careers />}></Route>
                <Route path="Careers-Hyd" element={<Hyderabad />}></Route>
                <Route path="Careers-Bangalore" element={<Bangalore />}></Route>

                <Route path="*" element={<Notfound />}></Route>
              </Routes>
              <Footer/>
            </BrowserRouter>) : (
              <div>Fetching data...</div>
            )
          }
          </>
        );
  //     }}
  //   </Query>
  // );
}

export default App;
