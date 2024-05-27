import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Zoomin = (props) => {
    Aos.init();
    // console.log(props.content)
    return (
        <div data-aos="zoom-in" className='container zoom-in'>
            <h1 className='text-primary'>{props.heading}</h1>
            <h1 className='text-danger'>{props.heading2}</h1>
            <div>
                {props.content.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>  
    );
};

export default Zoomin;