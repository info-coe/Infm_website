import React from 'react';

const IndustriesOfferingCard = ({solutionofferingData}) => {
    // console.log(solutionofferingData)
    const styles = `
    .card {
        position: relative;
        width: 280px;
        height: 250px;
        background-color: #FFFFFF;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transition: transform 0.3s, background-color 0.3s, color 0.3s;
        transform: scale(1);
        transition: 1s;
        margin: 30px auto; 
    }
    .content {
        padding: 20px;
        position: relative;
        z-index: 2;
        margin: 10px;
        border-radius: 10px;
        height: auto;
        min-height: 190px;
    }
    .constoverlay {
        position: absolute;
        top: 12%;
        right: -40%;
        bottom: 30%;
        width: 75%;
        height: 98%;
        background-color: #e6e6fa;
        border-radius: 10%;
        z-index: 0;
        rotate: 30deg;
    }
    .overlay {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100px;
        height: 100px;
        background-color: #D3D3D3;
        border-radius: 10%;
        transition: all 0.3s ease;
        clip-path: circle(50% at 100% 100%);
        z-index: 1;
    }
    .card:hover .overlay {
        width: 120%;
        height: 100%;
        clip-path: circle(150% at 150% 150%);
        border-radius: 0%;
        background-color: #0066b2;
        opacity: 0.9;
    }
    .card:hover {
        background-color: #007FFF;
        color: white;
        transform: scale(1.1);
        z-index: 10;
        transition: 1s;
    }
   
    @media screen and (max-width: 768px){
        .card{
            width:290px;
        }
    }
    
    }
    `;
    return (
        <>
         <style>{styles}</style>
         {
            solutionofferingData.map((item,index)=>(
                <div className="card col-md-4">
                    <div className="content">
                        <h5 className='mb-4'>{item.solutionHead}</h5>
                        <ul className='list-unstyled'>
                            {item.list.map((curr,i)=>(
                                <li key={i}><i className={item.icon}></i>{" "}{curr}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="constoverlay"></div>
                    <div className="overlay"></div>
                </div>
            ))
         }
              
        </>
    );
};

export default IndustriesOfferingCard;