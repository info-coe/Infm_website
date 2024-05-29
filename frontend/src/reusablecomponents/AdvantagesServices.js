import React from 'react';

const AdvantagesServices = (props) => {
  return (
    <div className="container">
          <div>
            <h3 className='text-success'>{props.heading}</h3>
            <div className='d-md-flex'>
              <div>
                {props.advantagesData.map((item, index) => (
                  <p key={index} style={{ fontSize: '17px' }}>
                    <i className={props.icon}></i> {item}
                  </p>
                ))}
              </div>
              <div>
                {(props.image1 || props.image2) ? (
                  <>
                  <div className='border text-center ms-2 '>
                    <img src={props.image1} alt='no-display' className='p-3' style={{ width: '150px' }} />
                    <img src={props.image2} alt='no-display' style={{ width: '100px', height: '150px' }} />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
  );
};

export default AdvantagesServices;
