import React from "react";
import AboutusContent from "../ABOUTUS/aboutusContent.json"
import AboutZoomin from "../../reusablecomponents/AboutZoomin";

const Aboutus = () => {
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
       <img src={data[0].aboutUsmainimage} width='100%' alt='no-display' className="mainimg img-fluid d-none d-md-block" />
       <img src={data[0].aboutUsSubimage} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
    <div className="mt-5 mb-5">
      <AboutZoomin heading1={data[0].aboutUsHeading1} heading2={data[0].aboutUsHeading2} content={content} />
    </div>
    </div>
    </>
  );
};

export default Aboutus;
