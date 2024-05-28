// import React from 'react';
// import IndustriesContent from "../INDUSTRIES/industriesContent.json"

// const Industries = () => {
//     const data=IndustriesContent[0]

//     const styles= `
//     .card {
//         position: relative;
//         width: 300px;
//         height: 250px;
//         background-color: #FFFFFF;
//         border-radius: 20px;
//         overflow: hidden;
//         box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//         animation: zoomIn 0.1s;
//         transition:1s;
//       }
//       @keyframes zoomIn {
//         from {
//           transform: scale(1);
//         }
//         to {
//           transform: scale(1.4);
//         }
//       }
//       .content {
//         padding: 20px;
//         position: relative;
//         z-index: 2; 
//         // text-align:center;
//         // border:1px solid #f5f5dc;
//         margin:10px;
//         border-radius:10px;
//         height:auto;
//         min-height:190px;
//       }
//       .constoverlay{
//         position: absolute;
//         top:12%;
//         right:-40%;
//         bottom:30%;
//          width: 75%; 
//         height: 98%; 
//         background-color: #e6e6fa;
//         border-radius: 10%;
//          z-index: 0;
//         rotate:30deg;
//       }
//       .overlay {
//         position: absolute;
//         bottom: 0;
//         right: 0;
//         width: 100px; 
//         height: 100px; 
//         background-color: #D3D3D3;
//         border-radius: 10%;
//         transition: all 0.3s ease;
//         clip-path: circle(50% at 100% 100%);
//         transition:1s;
//         z-index: 1; 
//       }
//       .card:hover .overlay {
//         width: 120%; 
//         height: 100%; 
//         clip-path: circle(150% at 150% 150%);
//          border-radius: 0%;
//         background-color:#0066b2;
//         opacity:0.9;
//         transition:1s;
//       }
//       .card:hover{
//         background-color:#007FFF;
//         color:white;
//         width: 320px;
//         height: 270px;
//         transition:1s;
//       }
     
//     `
    
//     return (
//         <>
//         <style>{styles}</style>
//              <img src={data.industriesmainimage} height="250" width="100%" alt='no-display' className=" d-none d-md-block" style={{objectFit:"cover"}} />
//              <img src={data.industriesSubimage} alt='no-display' className=" d-md-none" />
//         <div className='d-md-flex gap-5' style={{marginTop:'100px', marginBottom:"100px"}}>
//             <div className="card m-3 col-md-4">
//             <div className="content">
//                 <h4 className='mb-4'>Solution Offerings</h4>
//                 <ul className=''>
//                     <li> Product Management</li>
//                     <li> Supply Chain Management</li>
//                     <li> Sales and Marketing</li>
//                     <li> After Sales Service</li>
//                 </ul>
                
//             </div>
//             <div className="constoverlay"></div>
//             <div className="overlay"></div>
//             </div>

//             <div className="card m-3 col-md-4">
//             <div className="content">
//                 <h4 className='mb-4'>Technology Offerings</h4>
//                 <ul className=''>
//                     <li> Reseller of leading software</li>
//                     <li> IT Consulting Services</li>
//                     <li> Web Services</li>
//                     <li> Platform Upgrades</li>
//                 </ul>
                
//             </div>
//             <div className="constoverlay"></div>
//             <div className="overlay"></div>
//             </div>
//             <div className='col-md-4'>
//                 <h4>Manufacturing &Automotive</h4>
//                 <p>Consumers today seek products as if they are made specifically for them as individuals. The automotive industry is not an exception to escape the high expectations of consumers.</p>
//                 <button className='btn btn-primary'>Read More</button>
//             </div>
//         </div>

          
 

//         </>
//     );
// };

// export default Industries;


import React from 'react';
import IndustriesContent from "../INDUSTRIES/industriesContent.json";

const Industries = () => {
    const data = IndustriesContent[0];

    const styles = `
    .card {
        position: relative;
        width: 300px;
        height: 250px;
        background-color: #FFFFFF;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transition: transform 0.3s, background-color 0.3s, color 0.3s;
        animation: zoomIn 0.1s;
        transform-origin: center;
        transition:1s;
    }
    @keyframes zoomIn {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.4);
        }
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
        transition:1s;
    }
    .card:hover .overlay {
        width: 120%;
        height: 100%;
        clip-path: circle(150% at 150% 150%);
        border-radius: 0%;
        background-color: #0066b2;
        opacity: 0.9;
        transition:1s;
    }
    .card:hover {
        background-color: #007FFF;
        color: white;
        transform: scale(1.1);
        z-index: 10;
        transition:1s;
    }
    `
    

    return (
        <>
            <style>{styles}</style>
            <img src={data.industriesmainimage} height="250" width="100%" alt='no-display' className="d-none d-md-block" style={{ objectFit: "cover" }} />
            <img src={data.industriesSubimage} alt='no-display' className="d-md-none" />
            <div className='container d-md-flex flex-wrap gap-5' style={{ marginTop: '50px', marginBottom: "50px" }}>
                <div className="card col-md-4">
                    <div className="content">
                        <h4 className='mb-4'>Solution Offerings</h4>
                        <ul>
                            <li>Product Management</li>
                            <li>Supply Chain Management</li>
                            <li>Sales and Marketing</li>
                            <li>After Sales Service</li>
                        </ul>
                    </div>
                    <div className="constoverlay"></div>
                    <div className="overlay"></div>
                </div>

                <div className="card m-3 col-md-4">
                    <div className="content">
                        <h4 className='mb-4'>Technology Offerings</h4>
                        <ul>
                            <li>Reseller of leading software</li>
                            <li>IT Consulting Services</li>
                            <li>Web Services</li>
                            <li>Platform Upgrades</li>
                        </ul>
                    </div>
                    <div className="constoverlay"></div>
                    <div className="overlay"></div>
                </div>
                <div className='col-md-4'>
                    <h4>Manufacturing & Automotive</h4>
                    <p>Consumers today seek products as if they are made specifically for them as individuals. The automotive industry is not an exception to escape the high expectations of consumers.</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
        </>
    );
};

export default Industries;
