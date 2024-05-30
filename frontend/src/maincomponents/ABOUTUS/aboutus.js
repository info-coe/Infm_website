import React from "react";
// import AboutusContent from "../ABOUTUS/aboutusContent.json"
import AboutZoomin from "../../reusablecomponents/AboutZoomin";

const Aboutus = (props) => {
  const AboutusContent = JSON.parse(props.product.aboutusContent.Content);
  const data= AboutusContent
  console.log(data)
  // const data = props.product;
  const content = [
    data[1].content[0].aboutUsContent,
    data[1].content[0].aboutUsContent2,
    data[1].content[0].aboutUsContent3,
    data[1].content[0].aboutUsContent4,
    data[1].content[0].aboutUsContent5,
  ];
  return (
    <>
    <div>
       <img src={data[0].aboutUsmainimage} height="250" alt='no-display' className="responsive-image d-none d-md-block" style={{ objectFit: "cover" }} />
       <img src={data[0].aboutUsSubimage} alt='no-display' className="responsive-image d-md-none" />
    <div className="mt-5 mb-5">
      <AboutZoomin heading1={data[0].aboutUsHeading1} heading2={data[0].aboutUsHeading2} content={content} />
    </div>
    </div>
    </>
  );
};

export default Aboutus;
