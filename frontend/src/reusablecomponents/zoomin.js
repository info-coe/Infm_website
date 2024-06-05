import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Zoomin = (props) => {
    useEffect(() => {
        Aos.init();
    }, []);
    
    if (props.sections) {
        // Render multiple sections
        return (
            <div className='container zoom-in' data-aos="zoom-in" data-aos-duration="2000">
                <h2 className='text-primary '>{props.heading}</h2>
                {props.sections.map((section) => (
                    <div >
                        <h2 className='text-danger' style={{fontSize:props.textsize}}>{section.heading}</h2>
                        <p>{section.content}</p>
                    </div>
                ))}
            </div>
        );
    }

    // Render single content structure
    return (
        <div className='container zoom-in' data-aos="zoom-in" data-aos-duration="2000">
            <h1 className='text-primary'>{props.heading}</h1>
            <div>
                <h1 className='text-primary'>{props.heading1}</h1>
                <h1 className='text-danger'>{props.heading2}</h1>
                <div>
                    {props.content.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Zoomin;
