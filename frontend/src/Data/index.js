import { gql } from "graphql-tag";
const DATA_QUERY = gql`
  {
    assets {
      homeComponent {
        carousal1Heading
        carousal1Content
        carousal2Heading
        carousal2Content
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
      }

      url
      aboutUs {
        id
        aboutUsHeading
        aboutUsContent
        aboutUsContent2
        aboutUsContent3
        aboutUsContent4
        aboutUsContent5
      }
    }
  }
`;
export default DATA_QUERY;
