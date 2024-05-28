import React from 'react';

function ServicesCardOpen({ title, description, icon }) {
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
      font-size: 80px;
      color: #fff;
      transition: 0.8s;
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

    .card-container:hover .card .icon {
      left: -100px;
    }

    .card-container .card .slide::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      bottom: 15px;
      left: calc(50% - 15px);
      background: #2c73df;
    }

    .card-container .card .slide .content {
      text-align: center;
      color: #414141;
    }

    .card-container .card .slide .content h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    .card-container .card .slide .content p {
      font-size: 16px;
      margin: 0;
    }
  `;

  return (
    <div className="card-container">
      <style>{styles}</style>
      <div className="card ">
        <div className="icon">
          <span className='icon-list'>
            <i className={icon}></i>
          </span>
        </div>
        <div className="slide">
          <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCardOpen;
