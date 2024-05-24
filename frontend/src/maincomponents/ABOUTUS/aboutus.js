import React from "react";
import Zoomin from "../../reusablecomponents/zoomin";

const Aboutus = (props) => {
  const data = props.product;
  const content = [
    data.aboutUsContent,
    data.aboutUsContent2,
    data.aboutUsContent3,
    data.aboutUsContent4,
    data.aboutUsContent5,
  ];
  return (
    <>
    <div>
       <img src={data.aboutUsmainimage.url} width='100%' alt='no-display' className="mainimg img-fluid d-none d-md-block" />
       <img src={data.aboutUsSubimage.url} alt='no-display' className="sunimg img-fluid d-md-none w-100" />
    <div className="mt-5 mb-5">
      <Zoomin heading={data.aboutUsHeading} content={content} />
    </div>
    </div>
    </>
  );
};

export default Aboutus;
