import React from 'react'

const TechnologyOfferings = ({dataServices,cloudComputing,industriesImage12}) => {
  return (
    <div>
        <div className="d-flex container text-center pt-5 flex-wrap">
          <div className="col-12 col-md-4" data-aos="fade-up">
            {cloudComputing.map((curr, index) => (
              <p key={index} className="border rounded p-2">
                {curr.m1}
              </p>
            ))}
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <img
              src={industriesImage12}
              className="img-fluid w-50"
              alt=""
            />
          </div>
          <div className="col-12 col-md-4" data-aos="fade-up">
            {dataServices.map((curr, index) => (
              <p key={index} className="border rounded p-2">
                {curr.m2}
              </p>
            ))}
          </div>
        </div>
    </div>
  )
}

export default TechnologyOfferings