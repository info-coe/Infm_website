// import React from 'react';
// import CareersContent from "../CAREERS/careersContent.json";

// const Hyderabad = () => {
//     const data = CareersContent[0];
//     const styles = `
//     .table {
//         overflow-x: auto;
//         border-top: 1px solid #0094ff; 
//         border-left: 1px solid #0094ff;
//         border-right: 1px solid #0094ff;
//       } 
    
//       tr:last-child{
//         border-bottom: 1px solid #0094ff; 

//       }
//       td{
//         min-width:80px
//       }
//       tr:nth-child(even) {
//         background-color: #f2f2f2;
//       }
  
//       thead tr {
//         height: 55px;
//       }
//     `;

//     return (
//         <>
//         <style>{styles}</style>
//         <img
//             src={data.careersbanner}
//             width="100%"
//             alt="Careers Hyd"
//             className="img-fluid d-none d-md-block"
//         />
//         <img
//             src={data.careersMobilebanner}
//             alt="CareersMobile Hyd"
//             className="img-fluid d-md-none w-100"
//         />
//         <div style={{backgroundImage: `url(${data.currentopeningsBg})`}}>
//         <div className='container'>
//             <h2 className='text-center p-4'>
//                 <span className='text-primary'>{data.Current}</span>&nbsp;
//                 <span className='text-danger'>{data.Openings}</span>
//             </h2>
//             <div className='table-responsive'>
//                 <table className="table table-striped text-left">
//                     <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th>Job Type</th>
//                         <th>Location</th>
//                         <th>Job Name</th>
//                         <th>Skills</th>
//                         <th>Exp(Years)</th>
//                         <th>No Of Positions</th>
//                         <th>More</th>
//                     </tr>
//                     </thead>
//                     <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                         <td>4</td>
//                         <td>5</td>
//                         <td>6</td>
//                         <td>7</td>
//                         <td><button className='btn btn-primary border-0 rounded'>Send Resume</button></td>
//                     </tr>
//                     <tr>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                         <td>4</td>
//                         <td>5</td>
//                         <td>6</td>
//                         <td>7</td>
//                         <td><button className='btn btn-primary border-0 rounded'>Send Resume</button></td>
//                     </tr>
//                     <tr>
//                         <td>1</td>
//                         <td>2</td>
//                         <td>3</td>
//                         <td>4</td>
//                         <td>5</td>
//                         <td>6</td>
//                         <td>7</td>
//                         <td><button className='btn btn-primary border-0 rounded'>Send Resume</button></td>
//                     </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//         </div>
//         </>
//     );
// };

// export default Hyderabad;


import React from 'react';
import CareersContent from "../CAREERS/careersContent.json";

const Hyderabad = () => {
    const data = CareersContent[0];
    const styles = `
      table {
        border-collapse: collapse;
        width: 100%;
      }
      th, td {
        text-align: left;
        min-width: 80px;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
      thead tr {
        height: 55px;
      }
      .table-responsive {
        overflow-x: auto;
        border: 1px solid #0094ff;
        margin:25px;
      }
    `;

    return (
        <>
        <style>{styles}</style>
        <img
            src={data.careersbanner}
            width="100%"
            alt="Careers Hyd"
            className="img-fluid d-none d-md-block"
        />
        <img
            src={data.careersMobilebanner}
            alt="CareersMobile Hyd"
            className="img-fluid d-md-none w-100"
        />
        <div style={{backgroundImage: `url(${data.currentopeningsBg})` , height:"400px"}}>
        <div className='container'>
            <h2 className='text-center p-4'>
                <span className='text-primary'>{data.Current}</span>&nbsp;
                <span className='text-danger'>{data.Openings}</span>
            </h2>
            <div className='table-responsive'>
                <table className="table table-striped text-left">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th>Job Type</th>
                        <th>Location</th>
                        <th>Job Name</th>
                        <th>Skills</th>
                        <th>Exp(Years)</th>
                        <th>No Of Positions</th>
                        <th>More</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td><button className='btn btn-primary border-0 rounded'>Send Resume</button></td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
};

export default Hyderabad;
