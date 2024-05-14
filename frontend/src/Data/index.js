import {gql} from "graphql-tag";
const DATA_QUERY = gql`
{
  assets {
    homeComponent {
      carousal1Heading
      carousal1Content
      carousal2Heading
      carousal2Content
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
    }
  }
}
`;
export default DATA_QUERY;