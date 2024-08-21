import React from 'react';
import { Link } from 'react-router-dom';

function ServicesCardOpen({ title, description, icon, cardlink }) {
  const styles = `
    .card-container {
      position: relative;
      width: 300px;
      height: 200px;
      overflow: hidden;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
    }

    .card-container .card {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .card-container .card .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #2c73df;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.8s;
    }

    .card-container .card .icon .icon-list{
      font-size: 60px;
      color: #fff;
      transform: scale(1);
      transition: transform 0.8s ease-in-out;

    }

    .card-container .card .slide {
      position: absolute;
      top: 0;
      left: 100px;
      width: calc(100% - 100px);
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      transition: 0.8s;
      transform: translateX(100%);
      background-color: #fff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
      opacity: 1;
      visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .card-container:hover .card .slide {
      transform: translateX(0);
      opacity: 1;
      visibility: visible;
    }

    .card-container:hover .card .icon .icon-list {
      font-size: 40px;
    }
    .card-container:hover .invisibletext{
      display:none;
    }

    .card-container:hover .card .icon {
      left: -55%;
    }

    .card-container .card .slide .content {
      text-align: center;
      color: #414141;
    }

    

    .card-container .card .slide .content p {
      font-size: 14px;
      margin: 0;
    }
  `;

  return (
    <div className="card-container">
      <style>{styles}</style>
      <Link className='text-decoration-none' to={cardlink}>
      <div className="card ">
        <div className="icon">
          <span className='icon-list'>
           
           <div className='d-flex justify-content-between align-items-center'>
          <div style={{width:"130px"}}>
          <h6 className='invisibletext'>{title}</h6>
          </div>
            <i className={icon}></i>
           </div>
          </span>
        </div>
        <div className="slide">
          <div className="content">
            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default ServicesCardOpen;
