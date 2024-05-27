import React from 'react';
import { Link } from 'react-router-dom';
import HomeContent from "../maincomponents/HOME/homeContent.json"

const Footer = () => {
    const data= HomeContent[9].FooterData[0]
    // console.log(data)
    return (
        <>
        <div className='flex-container'>
            <div className='nasscom flexgrowdiv'>
                <img src={data.logofooter} alt="logo" width="290" height="50" style={{objectFit:"cover"}}></img>
                <p>{data.footerpara}</p>
            </div>
            <div className='keylinks flexgrowdiv'>
                <h5>{data.keylinksh5}</h5>
                <ul className='list-unstyled d-lg-flex gap-5' style={{lineHeight:"30px"}}>
                   <div>
                   <Link to="/Aboutus" className='text-decoration-none'><li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.aboutus}</li></Link>
                   <Link to="/Services" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.services}</li></Link>
                   <Link to="/Solutions" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.solutions}</li></Link>
                   </div>
                   <div>
                   <Link to="/CSR" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.csr}</li></Link>
                   <Link to="/Careers" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.careers}</li></Link>
                   <Link to="/Contact" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;{data.contactus}</li></Link>
                   </div>
                </ul>

            </div>
            <div className='getintouch flexgrowdiv'>
                <h5 className='mb-3'>{data.getintouchh5}</h5>
                <p><i className="bi bi-geo-alt-fill"></i> : {data.getinp1}</p>
                <p><i className="bi bi-envelope"></i> : {data.getinp2}</p>
            </div>
            <div className='followus flexgrowdiv '>
                <h5 className='mb-3'>{data.followush5}</h5>
           <div className='d-flex gap-3'>
            <img src={data.facebooklogo} alt="facebookImg" width="40" height="40"/>
            <img src={data.youtubelogo} alt="YoutubeImg" width="40" height="40"/>
            <img src={data.linkedinlogo} alt="LinkedInImg" width="40" height="40"/>
           </div>
            </div>

        </div>
        <div className='bg-dark text-white p-2 text-center'>
            <h6><i>{data.copyright} <span className='text-danger'>{data.infomerica}</span> {data.reserved}    <span className='text-danger'>{data.terms}</span> {data.join} <span className='text-danger'>{data.privacypolicy}</span></i></h6>
        </div>
            
        </>
    );
};

export default Footer;