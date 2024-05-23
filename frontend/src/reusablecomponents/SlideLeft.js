import React from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';


export default function SlideLeft(props) {
    Aos.init();

  return (
    <div data-aos="slide-left" data-aos-duration="3500" data-aos-once='true'>
        {props.data}
    </div>
  )
}
