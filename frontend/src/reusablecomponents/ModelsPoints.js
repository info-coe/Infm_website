import React from 'react';

const ModelsPoints = ({ contents }) => {
  const content = contents.serviceCmsModelsData[0];
  const mimage = contents.serviceModelIcon;

  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-md-12">
            <div style={{ margin: '20px ' }}>
              <h5><strong style={{ color: '#030250' }}>{content.mheading}</strong></h5>
              <p style={{ color: '#030250', fontSize: '17px'}}>{content.mcontent1}</p>
              <p style={{ color: '#030250', fontSize: '17px'}}>{content.mcontent2}</p>
            </div>
          </div>
            <div style={{ margin: '20px '}}>
              <ul className='list-unstyled'>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p1}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p2}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p3}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p4}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p5}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p6}</li>
                <li className="d-flex align-items-center" style={{color:'#0f62fe'}}><img src={mimage.url} width="3%" alt='no' />{content.p7}</li>
              </ul>
              <p  style={{fontSize:'18px',color: '#030250'}}><span className='m-md-4'>{content.mcontent3}</span>
              <div className="text-center" style={{borderBottom:"9px solid #FE0000 "}}></div>
            </p>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ModelsPoints;
