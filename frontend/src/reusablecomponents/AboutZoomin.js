import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const AboutZoomin = (props) => {
    Aos.init();
    // console.log(props.content)
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className='container zoom-in'>
            <h1><span className='text-primary'>{props.heading1}</span> <span className='' style={{color:"#FE0000"}}>{props.heading2}</span></h1>
            <div>
                {props.content.map((item,index)=>(
                    <p key={index} style={{fontSize:"17px"}}>{item}</p>
                ))}
            </div>
        </div>  
    );
};

export default AboutZoomin;