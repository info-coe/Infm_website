import React from "react";

const CSRkeypillars = ({ data }) => {
  const data1 = data;
 
  return (
    <>
      {data1.map((item, i) => (
        <div className="p-3" key={i}>
          <h5 className="text-primary text-center m-2">{item.Heading}</h5>
          {item.Points.map((itm, idx) => (
            <p style={{ lineHeight: "28px" , fontSize:"14px" }} key={idx}>
              <span className="" style={{color:"#FE0000"}}>{itm.name}: </span>
              {itm.description}
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default CSRkeypillars;
