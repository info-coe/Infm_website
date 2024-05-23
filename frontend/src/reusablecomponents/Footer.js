import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        <div className='flex-container'>
            <div className='nasscom flexgrowdiv'>
                <img src="https://infomericainc.com/Content/images/logo-footer.png" alt="logo" width="290" height="50" style={{objectFit:"cover"}}></img>
                <p>Infomerica is a Software Development and Systems Integration company, one of the fastest growing companies that is committed to help our customers grow and move forward in every aspect of their business.</p>
            </div>
            <div className='keylinks flexgrowdiv'>
                <h5>Key Links</h5>
                <ul className='list-unstyled d-lg-flex gap-5' style={{lineHeight:"30px"}}>
                   <div>
                   <Link to="/Aboutus" className='text-decoration-none'><li><i className="bi bi-chevron-double-right"></i>&nbsp;About Us</li></Link>
                   <Link to="/Services" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;Services</li></Link>
                   <Link to="/Solutions" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;Solutions</li></Link>
                   </div>
                   <div>
                   <Link to="/CSR" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;CSR</li></Link>
                   <Link to="/Careers" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;Careers</li></Link>
                   <Link to="/Contact" className='text-decoration-none'> <li><i className="bi bi-chevron-double-right"></i>&nbsp;Contact Us</li></Link>
                   </div>
                </ul>

            </div>
            <div className='getintouch flexgrowdiv'>
                <h5 className='mb-3'>Get in touch</h5>
                <p><i className="bi bi-geo-alt-fill"></i> : Infomerica - USA, UK, India</p>
                <p><i className="bi bi-envelope"></i> : info@infomericainc.com</p>
            </div>
            <div className='followus flexgrowdiv '>
                <h5 className='mb-3'>Follow Us</h5>
           <div className='d-flex gap-3'>
           <img src="https://infomericainc.com/Content/images/facebook.jpg" alt="facebookImg" width="40" height="40"/>
            <img src="https://infomericainc.com/Content/images/youtube.png" alt="YoutubeImg" width="40" height="40"/>
            <img src="https://infomericainc.com/Content/images/linkedin.png" alt="LinkedInImg" width="40" height="40"/>
           </div>
            </div>

        </div>
        <div className='bg-dark text-white p-2 text-center'>
            <h6><i>Copyright © 2023 <span className='text-danger'>Infomerica</span> All Rights Reserved.    <span className='text-danger'>Terms</span> | <span className='text-danger'>Privacy Policy</span></i></h6>
        </div>
            
        </>
    );
};

export default Footer;