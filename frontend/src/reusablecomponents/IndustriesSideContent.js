import React from "react";
import { Link } from "react-router-dom";

const IndustriesSideContent = ({ data }) => {
  // console.log(data);
  return (
    <>
      <h3 className="mt-2 mb-2">
        <span className="text-primary">{data.h1}</span>&nbsp;
        <span className="" style={{color:"#FE0000"}}>{data.h2}</span>{" "}
      </h3>
      <p>{data.p1}</p>
      <p>{data.p2}</p>
      {data.readmore ? (
        <Link to={data.route}>
          <button className="btn btn-primary mb-4">{data.readmore}</button>
        </Link>
      ) : null}
    </>
  );
};

export default IndustriesSideContent;
