import React from 'react'
import RoundedImageCard from '../../reusablecomponents/RoundedImageCard';
// import Navigation from '../../reusablecomponents/navbar';

export default function Home(props) {
    // const data = props.product;
    // console.log(data);
    const { serviceComponent } = props;

    const data = serviceComponent;
    const cardData = data.name.servicesData;

  return (
    <div>
      {/* <Navigation/> */}
      <div>
      {/* <h1 className="text-center"></h1> */}

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
    </div>
  )
}
