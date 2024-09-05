import React from "react";
import { Link } from "react-router-dom";
// import HomeContent from "../maincomponents/HOME/homeContent.json"
import ISO1 from "../maincomponents/HOME/images/iso 9001-2015.png"
import ISO2 from "../maincomponents/HOME/images/iso 27001-2013.png"
import ISO3 from "../maincomponents/HOME/images/iso 20000-2018.png"
import NMSDC from "../maincomponents/HOME/images/NMSDC LOGO.png"
import WBENC from "../maincomponents/HOME/images/WBENC LOGO.png"
import logoMain from "./company-logo.png"
import NASSCOM from "../maincomponents/HOME/images/NASSCOM.png"

const Footer = (props) => {
  const HomeContent = JSON.parse(props.product.homeContent.Content);
  const data = HomeContent.map((item) => item.FooterData)
    .filter(Boolean)
    .reduce((acc, curr) => acc.concat(curr), [])[0];

  return (
    <>
      <div className="flex-container">
        <div className="nasscom flexgrowdiv">
          {/* <img
            src={data.logofooter}
            alt="logo"
            style={{ objectFit: "contain" }}
          ></img> */}
           <img
            src={logoMain}
            alt="logo1"
            width="80"
            height="40"
           className="m-1 bg-white"
            style={{ objectFit: "contain" }}
          ></img>
          
           <img
            src={ISO1}
            alt="logo2"
             width="80"
            height="40"
            className="m-1"
            style={{ objectFit: "contain" }}
          ></img>
          <img
            src={ISO2}
            alt="logo3"
             width="80"
            height="40"
            className="m-1"
            style={{ objectFit: "contain" }}
          ></img>
          <img
            src={ISO3}
            alt="logo4"
             width="80"
            height="40"
            className="m-1"
            style={{ objectFit: "contain" }}
          ></img>
           <img
            src={NASSCOM}
            alt="logo5"
             width="80"
            height="40"
           className="m-1"
            style={{ objectFit: "contain" }}
          ></img>
          <img
            src={WBENC}
            alt="logo6"
             width="80"
            height="40"
            className="m-1 ms-lg-2 me-lg-2"
            style={{ objectFit: "contain"}}
          ></img>
           <img
            src={NMSDC}
            alt="logo7"
             width="80"
            height="40"
            className="m-1"
            style={{ objectFit: "contain" }}
          ></img>
           
          <p>{data.footerpara}</p>
        </div>
        <div className="keylinks flexgrowdiv ps-1 pe-1">
          <h5>{data.keylinks}</h5>
          <ul
            className="list-unstyled d-md-flex gap-3"
            style={{ lineHeight: "30px" }}
          >
            <div>
              <Link to="/Aboutus" className="text-decoration-none">
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.aboutus}
                </li>
              </Link>
              <Link to="/Industries" className="text-decoration-none">
                {" "}
                <li>
                  <i className="bi bi-chevron-double-right"></i>&nbsp;
                  {data.industries}
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
        <div className="getintouch flexgrowdiv ps-1 pe-1">
          <h5 className="mb-3">{data.getintouch}</h5>
          <p>
            <i className="bi bi-geo-alt-fill"></i> : {data.getinp1}
          </p>
          <p>
            <i className="bi bi-envelope"></i> : <Link className="text-decoration-none text-dark" to={`mailto:${data.getinp2}`}>{data.getinp2}</Link>
          </p>
        </div>
        <div className="followus flexgrowdiv ">
          <h5 className="mb-3">{data.followus}</h5>
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
            {data.reserved} <Link to={data.termslinkto} className="text-decoration-none"><span className="" style={{color:"#FE0000"}}>{data.terms}</span></Link>{" "}
            {data.join}{" "}
            <Link to={data.privacypolicylinkto} className="text-decoration-none"><span className="" style={{color:"#FE0000"}}>{data.privacypolicy}</span></Link>
          </i>
        </h6>
      </div>
    </>
  );
};

export default Footer;
