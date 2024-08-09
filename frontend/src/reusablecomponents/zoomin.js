import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Zoomin = (props) => {
  useEffect(() => {
    Aos.init();
  }, []);

  if (props.sections) {
    // Render multiple sections
    return (
      <div
        className="container zoom-in"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <h2 className="text-primary ">{props.heading}</h2>
        {props.sections.map((section, index) => (
          <div key={index}>
            <h2 className="" style={{ fontSize: props.textsize ,color:"#FE0000"}}>
              {section.heading}
            </h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    );
  }

  // Render single content structure
  return (
    <div
      className="container zoom-in"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
     <div className={props.textdisplay}>
        <h2>
          <span className="text-primary me-2">{props.heading} </span>
          <span className="me-2" style={{color:"#FE0000"}}>{props.heading2} </span>
          <span className="text-primary">{props.heading3}</span>
        </h2>
        </div>
        <div>
          {props.content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
  );
};

export default Zoomin;
