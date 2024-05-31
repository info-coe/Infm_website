import React from 'react';
import { Link } from 'react-router-dom';

const NoZoomin = (props) => {
  return (
    <div className='container'>
      <div className='d-md-flex '>
      <div style={{marginTop:'55px'}}>
      <h1 className='text-primary' style={{ fontSize: props.textsize, }}>{props.heading}</h1>
      <h1 className='text-danger' style={{ marginTop: props.texttop }}>{props.heading2}</h1>
        {props.content.map((item, index) => (
          <p key={index} >
            {item} 
            {index === props.content.length - 1 && (
              <>
                <Link to={props.link} className='text-decoration-none'>
                  <span className='text-danger'> {props.contact}</span>
                </Link> 
                <span className='m-2'>{props.today}</span>
              </>
            )}
          </p>
        ))}
      </div>
      {props.image && (
                  <>
                  <div className="d-flex justify-content-center align-items-center " >
                    <img src={props.image} alt="no-display" className="p-3 img-fluid" style={{maxWidth:'220px'}} />
                    </div>
                  </>
                )}
      </div>
    </div>
  );
};

export default NoZoomin;
