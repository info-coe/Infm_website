import React from 'react';

const CorporateofficeaddressCard = ({data}) => {
    const address=data
    const styles = `
    .card {
        position: relative;
        width: 340px;
        height: 300px;
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
   
    @media screen and (max-width: 767px){
        .card{
            width:290px;
        }
    }
    @media screen and (min-width: 768px) and (max-width:991px){
        .card{
            width:100%;
        }
    }
    
    }
    `;
    return (
        <>
         <style>{styles}</style>
         {
            address.map((item,index)=>(
                <div className="card col-md-4" key={index}>
                    <div className="content text-center">
                        <h4 className='mb-4'>{item.name}</h4>
                        <p><i className={item.locationicon}></i>&nbsp;{item.addr}</p>
                        <p><i className={item.emailicon}></i>&nbsp;{item.email}</p>
                        <h4><i className={item.phoneicon}></i>&nbsp;{item.phone}</h4>
                    </div>
                    <div className="constoverlay"></div>
                    <div className="overlay"></div>
                </div>
            ))
         }
              
        </>
    );
};

export default CorporateofficeaddressCard;