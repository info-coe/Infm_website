
import React from 'react';

const IndustriesBorderMovingCard = ({solutionofferingData}) => {

    const styles = `
    .box {
        position: relative;
        width: 300px;
        height: 300px;      
        box-sizing: border-box;
        overflow: hidden;
        box-shadow: 0 20px 50px rgb(23, 32, 90);
        border: 2px solid #2a3cad;
        color: white;
        padding: 10px;
        margin: 30px auto; 
    }

    .box:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.1);
        transition: 0.5s;
        pointer-events: none;
    }

    .box:hover:before {
        left: -50%;
        transform: skewX(-5deg);
    }

    .box .content {
        position: relative;
        border: 1px solid #f0a591;
        padding: 15px;
        height:250px;
        box-shadow: 0 2px 8px rgba(4,0,0,0.5);
        border-radius: 0;
    }

    .box span {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        box-sizing: border-box;
    }

    .box span:nth-child(1) {
        transform: rotate(0deg);
    }

    .box span:nth-child(2) {
        transform: rotate(90deg);
    }

    .box span:nth-child(3) {
        transform: rotate(180deg);
    }

    .box span:nth-child(4) {
        transform: rotate(270deg);
    }

    .box span:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: #50dfdb;
        animation: animate 4s linear infinite;
    }

    @keyframes animate {
        0% {
            transform: scaleX(0);
            transform-origin: left;
        }
        50% {
            transform: scaleX(1);
            transform-origin: left;
        }
        50.1% {
            transform: scaleX(1);
            transform-origin: right;
        }
        100% {
            transform: scaleX(0);
            transform-origin: right;
        }
    }
    `;

    return (
        <>
            <style>{styles}</style>
            {solutionofferingData.map((item,index)=>(
                <div key={index} className="box" style={{ backgroundColor: item.color }}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                    <h4 className='mb-4'>{item.solutionHead}</h4>
                    <ul className='list-unstyled'>
                            {item.list.map((curr,i)=>(
                                <li key={i}><i className={item.icon}></i>{" "}{curr}</li>
                            ))}
                        </ul>
                </div>
                </div>
            ))}
           
        </>
    );
};

export default IndustriesBorderMovingCard;
