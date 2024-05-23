import React from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';

export default function SlideRight(props) {
    Aos.init();

  return (
    <div data-aos="slide-right" data-aos-duration="1500" data-aos-once='true'>
        {props.data}
    </div>
  )
}
