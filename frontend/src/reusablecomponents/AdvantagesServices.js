import React from 'react';

const AdvantagesServices = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="my-4">
            <h3 className="" style={{color:"#FE0000"}}>{props.heading}</h3>
            <div className="d-md-flex mt-4">
              <div className="flex-grow-1">
                {props.advantagesData.map((item, index) => (
                  <p key={index} style={{ fontSize: '17px' }}>
                    <i className={props.icon}></i> {item}
                  </p>
                ))}
              </div>
                {(props.image1 || props.image2) && (
                  <>
                  <div className="border text-center ms-3 d-flex flex-column justify-content-center align-items-center " >
                    <img src={props.image1} alt="no-display" className="p-3 img-fluid" style={{maxWidth:'200px'}} />
                    <img src={props.image2} alt="no-display" className="img-fluid " style={{maxWidth:'200px'}}/>
                    </div>
                  </>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesServices;
