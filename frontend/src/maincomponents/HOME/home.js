import React from 'react'
import Zoomin2 from '../../reusablecomponents/Zoomin2';
import ImageMoving from '../../reusablecomponents/ImageMoving';
import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';
import CircleImageCard from '../../reusablecomponents/CircleImageCard';
import { circleDatas, content } from './homeContent';
import MainSlider from '../../reusablecomponents/MainSlider';
import Testimonials from '../../reusablecomponents/Testimonials';
import Card from '../../reusablecomponents/Card';
import { innovativeApproachesData, solutionOfferingsData } from './payrollProcess';
import ToggleableCard from '../../reusablecomponents/ToggleableCard';
import SlideRight from '../../reusablecomponents/SlideRight';
import SlideLeft from '../../reusablecomponents/SlideLeft';
import PartnerLogos from '../../reusablecomponents/PartnersLogoSlide';
import Marquee from '../../reusablecomponents/Marquee';

export default function Home(props) {
  const data = props.product.serviceComponent;
  const data1 = props.product.homeComponent;
  const cardData = data.servicesData;
  const homeData = content[0]
  const circleData = circleDatas

  return (
    <div>
      <MainSlider />
      <Marquee content={data1.contentslider}/>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 ">
            <ImageMoving image={homeData.image}/>
          </div>
          <div className="col-md-6">
            <Zoomin2
              Mainheading={homeData.hmainhead}
              heading={homeData.hhead1}
              heading2={homeData.hhead2}
              content={[
                homeData.hcontent,
              ]}
              btn={homeData.hbtn}
              icon={homeData.hbtnicon}
              s={homeData.hstrongcontent}
            />
          </div>
        </div>
      </div>
     
      <div className='d-md-flex mt-5'>
        {circleData.map((data, index) => (
          <CircleImageCard
            title={data.title}
            icon={data.image}
            background={data.color}
          />
        ))}
      </div>
     
     
    
      <div className='mt-2 mb-4'>
      <Marquee content={data1.contentslider}/>
      </div>
      <div>
        <div className='ps-lg-5 ms-lg-5 ms-md-5 ms-3 mt-5'>
      <h1 className='text-primary'>Why <span className='text-danger'>Choose Us</span></h1>
      <p className='text-secondary'style={{fontFamily: "'Lobster', cursive"}}>We strive for your business growth through innovative approaches</p>
      <h3 className='text-secondary'style={{fontFamily: "'Lobster', cursive"}}>A few good reasons...
   </h3>
   </div>
   <div className='container'>
      <div className='row'>
        <div className='col-lg-8 col-xxl-8'>
          <SlideRight data={
            <div className="mt-2 mb-2 ">
              <div className='row '>
                {innovativeApproachesData.map((item, index) => (
                  <div key={index} className="col-12 col-md-4 col-lg-4 mb-3 d-flex flex-wrap justify-content-center">
                    <Card
                      logo={item.logo}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          } />
        </div>
        <div className='col-lg-4 col-xxl-4'>
          <SlideLeft data={
            <div className='mt-3'>
              <h3 className='text-secondary' style={{ fontFamily: "'Lobster', cursive" }}>Solution Offerings</h3>
              {solutionOfferingsData.map((item, index) => (
                <ToggleableCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                  initiallyExpanded={index === solutionOfferingsData.length - 1}
                />
              ))}
            </div>
          } />
        </div>
      </div>
    </div>
     
      </div>
      <PartnerLogos/>
      <h1 className="text-center text-danger mt-5"><i>{data.serviceHeading}</i></h1>
      <div className="container">
        <div className="row justify-content-center" style={{ marginTop: '80px' }}>
          {cardData.map((data, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
              style={{ marginBottom: '80px' }}
            >
              <RoundedImageCard
                title={data[`t${index + 1}`]} // Use template literal to access dynamic property names
                description={data[`Des${index + 1}`]} // Similarly, for description
                icon={data[`icon${index + 1}`]} //
              />
            </div>
          ))}
        </div>
      </div>
      <Testimonials/>

    </div>
  )
}
