import React from 'react'
import Zoomin2 from '../../reusablecomponents/Zoomin2';
import ImageMoving from '../../reusablecomponents/ImageMoving';
import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';
import CircleImageCard from '../../reusablecomponents/CircleImageCard';
import { circleDatas,content } from './homes';

export default function Home(props) {
  const data = props.product.serviceComponent;
  const cardData = data.servicesData;
  // const data2 = props.product.homeComponent
  // const homeData = data2.homeheadingandcontent[0]
  // const circleData = data2.homecirclecardimagesdata
  // console.log(circleData)
  const homeData = content[0]
  const circleData = circleDatas
  return (
    <div>
    <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 ">
                <ImageMoving  image={homeData.image}/>
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
          <h1 className="text-center text-primary mt-5">{data.serviceHeading}</h1>
          <div className="container">
        <div className="row justify-content-center" style={{ marginTop: '90px' }}>
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
      </div>

  )
}
