import {gql} from "graphql-tag";
const DATA_QUERY = gql`
{
  assets {
    homeComponent {
      carousal1Content
      carousal1Heading
      carousal2Content
      carousal2Heading
      carousal3Content
      carousal3Heading
      carousal4Content
      carousal4Heading
      carousal5Content
      carousal5Heading
      carousal6Content
      carousal6Heading
      carousal7Content
      carousal7Heading
      id
    }
    aboutUs {
      id
      aboutUsHeading
      aboutUsContent
      aboutUsContent2
      aboutUsContent3
      aboutUsContent4
      aboutUsContent5
      aboutUsVisionHeading
      aboutUsVisionContent
      aboutUsMissionHeading
      aboutUsMissionContent
      aboutUsVisionSubImage {
        url
      }
      aboutUsVisionMainImage {
        url
      }
      aboutUsmainimage {
        url
      }
    aboutUsSubimage {
      url
    }
    }
    navbar {
      id
      logo {
        id
        url
      }
      home
      aboutus
      vision
      mission
      industries
      manufacturingAutomotive
      energyUtilities
      bankingInsuranceServices
      healthcareLifeSciences
      mediaTelecom
      airlineTravelLogistics
      consumerRetail
      services
      crm
      digitalTransformationServices
      securityArchitecture
      applicationServices
      cloud
      cloudServices
      awsServices
      microsoftCloudServices
      microsoft365
      dataServices
      internetOfThings
      businessAssuranceTesting
      enterprisePortal
      freePocPot
      softwareSales
      solutions
      roboticAutomationProcess
      oracleCloud
      sap
      solutionsCrm
      mobility
      businessProcessManagement
      devops
      serviceOrientedArchitecture
      contactus
      csr
      careers
      hyderabad
      bangalore
    }
    serviceComponent {
      servicesData
      serviceMainimage {
        url
      }
      serviceCmsModelsData
      serviceModelIcon {
        url
      }
      serviceCrmImage {
        url
      }
      serviceSubimage {
        url
      }
      dtsImage {
        url
      }
      serviceCrmHeadingAndContent
      serviceCrmServicesData
      serviceDtsContentAndContent
      allServicesData
    }
  }
}
`;
export default DATA_QUERY;