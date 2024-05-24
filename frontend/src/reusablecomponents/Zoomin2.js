import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Zoomin2 = (props) => {
    Aos.init();
    console.log(props.content)
    return (
        <>

        
        <div data-aos="zoom-in" style={{fontSize:' 16px'}}>
            <h4 className='text-secondary'style={{fontFamily: "'Lobster', cursive"}}>{props.Mainheading}</h4>
            <h2 className='text-primary'>{props.heading}</h2>
            <h2 className='text-danger'>{props.heading2}</h2>
            <div>
                {props.content.map((item,index)=>(
                    <p key={index}><strong>{props.s} </strong>{item}</p>
                ))}
             {props.btn ? (
              <button className='btn-with-hover'>
              {props.btn}
              <i className={props.icon}></i>
            </button>
             ):null} 
            </div>
        </div>
        </>
    );
};

export default Zoomin2;