import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useDynamicTitle() {
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = 'InfomericaInc - Consulting | IT Consulting | Digital Transformation';
                break;

            case '/Aboutus':
                document.title = 'InfomericaInc - Global Leader in Technology & Innovation';
                break;
            case '/Vision':
                document.title = 'InfomericaInc - Vision';
                break;
            case '/Mission':
                document.title = 'InfomericaInc - Mission';
                break;
            case '/Industries':
                document.title = 'InfomericaInc - Industries';
                break;
            case '/Manufacturing-Automotive':
                document.title = 'InfomericaInc - Manufacturing-Automotive';
                break;
            case '/Energy-Utilities':
                document.title = 'InfomericaInc - Energy-Utilities';
                break;
            case '/Banking-Insurance-Services':
                document.title = 'InfomericaInc - Banking-Insurance-Services';
                break;
            case '/Healthcare-LifeSciences':
                document.title = 'InfomericaInc - Healthcare-Life-Sciences';
                break;
            case '/Media-Telecom':
                document.title = 'InfomericaInc - Media-Telecom';
                break;
            case '/Airline-Travel-Logistics':
                document.title = 'InfomericaInc - Airline-Travel-Logistics';
                break;
            case '/Consumer-Retail':
                document.title = 'InfomericaInc - Consumer-Retail';
                break;
            case '/Services':
                document.title = 'InfomericaInc - Services';
                break;
            case '/Generative-AI':
                document.title = 'InfomericaInc - AI/ML & Generative AI';
                break;
            case '/CRM':
                document.title = 'InfomericaInc - CRM';
                break;
            case '/Digital-Transformation-Services':
                document.title = 'InfomericaInc - Digital-Transformation-Services';
                break;
            case '/Security-Architecture':
                document.title = 'InfomericaInc - Security-Architecture';
                break;
            case '/Application-Services':
                document.title = 'InfomericaInc - Application-Services';
                break;
            case '/Cloud-Services':
                document.title = 'InfomericaInc - Cloud-Services';
                break;
            case '/AWS-Services':
                document.title = 'InfomericaInc - AWS-Services';
                break;
            case '/AWS-Cloud-Migration':
                document.title = 'InfomericaInc - AWS-Cloud-Migration';
                break;
            case '/Microsoft-Cloud-Services':
                document.title = 'InfomericaInc - Microsoft-Cloud-Services';
                break;
            case '/Microsoft365':
                document.title = 'InfomericaInc - Microsoft-365-Solutions-and-Services';
                break;
            case '/Data-Services':
                document.title = 'InfomericaInc - Data-Services';
                break;
            case '/Internet-Of-Things':
                document.title = 'InfomericaInc - Internet-Of-Things';
                break;
            case '/Testing-QA-Services':
                document.title = 'InfomericaInc - Testing-QA-Services';
                break;
            case '/Enterprise-Portal':
                document.title = 'InfomericaInc - Enterprise-Portals-and-Content-Management';
                break;
            case '/Service-Oriented-Architecture':
                document.title = 'InfomericaInc - Service-Oriented-Architecture';
                break;
            case '/Free-POC-POT':
                document.title = 'InfomericaInc - Free-POC-POT';
                break;
            case '/Software-Sales':
                document.title = 'InfomericaInc - Software-Sales';
                break;
            case '/Info-Scan':
                document.title = 'InfomericaInc - Info-Scan';
                break;
            case '/Info-AI-Accelerator':
                document.title = 'InfomericaInc - Info-AI-Accelerator';
                break;
            case '/Solutions':
                document.title = 'InfomericaInc - Solutions';
                break;
            case '/Robotic-Automation-Process':
                document.title = 'InfomericaInc - Robotic-Automation-Process';
                break;
            case '/Oracle-Cloud':
                document.title = 'InfomericaInc - Oracle-Cloud-Services';
                break;
            case '/SAP':
                document.title = 'InfomericaInc - SAP';
                break;

            case '/Mobility':
                document.title = 'InfomericaInc - Mobility';
                break;
            case '/Business-Process-Management':
                document.title = 'InfomericaInc - Business-Process-Management';
                break;
            case '/DevOps':
                document.title = 'InfomericaInc - DevOps';
                break;

            case '/Contact':
                document.title = 'InfomericaInc - Queries | Reuests | Feedback';
                break;
            case '/CSR':
                document.title = 'InfomericaInc - Corporate Social Responsibility (CSR)';
                break;
            case '/Careers':
                document.title = 'InfomericaInc - Careers';
                break;
            case '/Careers-Hyd':
                document.title = 'InfomericaInc - Careers-Hyd';
                break;
            case '/Careers-Bangalore':
                document.title = 'InfomericaInc - Careers-Bangalore';
                break;
            case '/Terms':
                document.title = 'InfomericaInc - Terms';
                break;
            case '/Privacy-policy':
                document.title = 'InfomericaInc - Privacy-policy';
                break;

            default:
                document.title = 'InfomericaInc';
        }
    }, [location]);
}

export default useDynamicTitle;
