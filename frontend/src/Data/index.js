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
      servicesAllHeadingAndContent
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
      serviceCrmServicesData
      allServicesData
      securityImage {
        url
      }
      securityServicesData
      servicesAdvantages
    }
  industrie_page {
    id
    industries1Heading
    industries11Heading
    industriesText
    industries1Heading2
    industries12Heading
    industriesText2
    managementData
    technology
    offerings
    cloudComputing
    dataServices
    industriesDetail
    industrieContactText
    industriTodaytext
    industriesImage {
      id
      url
    }soloutionImage {
      url
    }
    industriesImage12 {
      id
      url
    }

  }

  industriesEnergyUtilities {
    id
    industries1Heading
    industries11Heading
    industriesText
    industriesText11
    industries1Heading2
    industries12Heading
    industriesText2
    technology
    offerings
    cloudComputing
    dataServices
    industriesDetail
    industrieContactText
    industriTodaytext
    managementData

    industriesImage {
      url
    }
    industriesImage12 {
      url
    }
    soloutionImage {
      url
    }
  }
  url
}

}
`;
export default DATA_QUERY;