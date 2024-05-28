import React from 'react';

function Servicecardflip ({ title, description, icon }) {
  const styles = `
    .flip-card {
        width: 290px;
        height: 200px;
        position: relative;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.2);
      }
      
      .flip-card:focus {
        outline: 0;
      }
      
      .flip-card:hover .flip-card-inner,
      .flip-card:focus .flip-card-inner {
        transform: rotateY(180deg);
      }
      
      .flip-card-front,
      .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden; 
        -moz-backface-visibility: hidden; 
      }
      
      .flip-card-front {
        color: white;
        background-color: #053f5e;
        // background-color: #7a3476;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: contain;
        flex-direction: column; 
      }
      
      .flip-card-back {
        color: white;
        transform: rotateY(180deg);
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
   
    
  `;

  return (
   
    <div className="flip-card" tabIndex="0">
          <style>{styles}</style>
    <div className="flip-card-inner">
      <div className="flip-card-front">
     
      <i className={icon} style={{fontSize:"70px"}}></i>
      </div>
      <div className="flip-card-back text-dark" style={{backgroundColor:"#e1f4e5"}}>
        
        <h4 className='mb-4'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  </div>
  );
}

export default Servicecardflip;
