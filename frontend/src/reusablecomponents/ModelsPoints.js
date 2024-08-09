import React from 'react';
import { Link } from 'react-router-dom';

const ModelsPoints = ({ contents }) => {
  const content = contents[0];
  // console.log(content)
  const mimage = contents[0].image;

  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-md-12">
            <div style={{ margin: '10px ' }}>
              <h5><strong style={{ color: '#030250' }}>{content.mheading}</strong></h5>
              <p style={{ color: '#030250', fontSize: '17px'}}>{content.mcontent1}</p>
              <p style={{ color: '#030250', fontSize: '17px'}}>{content.mcontent2}</p>
            </div>
          </div>
            <div style={{ margin: '10px '}}>
              <ul className='list-unstyled'>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p1}</li>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p2}</li>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p3}</li>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p4}</li>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p5}</li>
                <li className="d-flex align-items-center"><img src={mimage} width="3%" alt='no' />{content.p6}</li>
                <li className="d-flex align-items-center"><img src={mimage } width="3%" alt='no' />{content.p7}</li>
              </ul>
            </div>
            <p  style={{fontSize:'18px',color: '#030250'}}><span className='m-md-4'>{content.mcontent3}
            <Link to={content.mcontactlink} className='text-decoration-none'>
             <span className='p-1' style={{color:"#FE0000"}}>{content.mcontact}</span>
            </Link>{content.mtoday}</span>
            </p>
              <div style={{borderBottom:"9px solid #FE0000 "}} className='mb-5'></div>
          </div>
        </div>
       
    </>
  );
};

export default ModelsPoints;
