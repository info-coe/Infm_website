import React from "react";
import { Link } from "react-router-dom";
// import HomeContent from "../maincomponents/HOME/homeContent.json"

const Footer = (props) => {
  const HomeContent = JSON.parse(props.product.homeContent.Content);
  const data = HomeContent.map((item) => item.FooterData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <>
      <div className="flex-container">
        <div className="nasscom flexgrowdiv">
          <img
            src={data.logofooter}
            alt="logo"
            style={{ objectFit: "contain" }}
          ></img>
          <p>{data.footerpara}</p>
        </div>
        <div className="keylinks flexgrowdiv">
          <h5>{data.keylinksh5}</h5>
          <ul
            className="list-unstyled d-md-flex gap-5"
            style={{ lineHeight: "30px" }}
          >
            <div>
              <Link to="/Aboutus" className="text-decoration-none">
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.aboutus}
                </li>
              </Link>
              <Link to="/Services" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.services}
                </li>
              </Link>
              <Link to="/Solutions" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.solutions}
                </li>
              </Link>
              <Link to="/Industries" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.industries}
                </li>
              </Link>
            </div>
            <div>
              <Link to="/CSR" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;{data.csr}
                </li>
              </Link>
              <Link to="/Careers" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.careers}
                </li>
              </Link>
              <Link to="/Contact" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.contactus}
                </li>
              </Link>
            </div>
          </ul>
        </div>
        <div className="getintouch flexgrowdiv">
          <h5 className="mb-3">{data.getintouchh5}</h5>
          <p>
            <i className="bi bi-geo-alt-fill"></i> : {data.getinp1}
          </p>
          <p>
            <i className="bi bi-envelope"></i> : <Link className="text-decoration-none text-dark" to={`mailto:${data.getinp2}`}>{data.getinp2}</Link>
          </p>
        </div>
        <div className="followus flexgrowdiv ">
          <h5 className="mb-3">{data.followush5}</h5>
          <div className="d-flex gap-3">
           <Link className="text-decoration-none" to={data.facebooklink}> 
           <img
              src={data.facebooklogo}
              alt="facebookImg"
              width="40"
              height="40"
            />
            </Link>
            <Link className="text-decoration-none" to={data.youtubelink}>
            <img
              src={data.youtubelogo}
              alt="YoutubeImg"
              width="40"
              height="40"
            />
            </Link>
            <Link className="text-decoration-none" to={data.linkedinlink}>
            <img
              src={data.linkedinlogo}
              alt="LinkedInImg"
              width="40"
              height="40"
            />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-dark text-white p-2 text-center">
        <h6>
          <i>
            {data.copyright}{" "}
            <span className="" style={{ color: "#FE0000" }}>
              {data.infomerica}
            </span>{" "}
            {data.reserved} <span className="" style={{color:"#FE0000"}}>{data.terms}</span>{" "}
            {data.join}{" "}
            <span className="" style={{color:"#FE0000"}}>{data.privacypolicy}</span>
          </i>
        </h6>
      </div>
    </>
  );
};

export default Footer;
