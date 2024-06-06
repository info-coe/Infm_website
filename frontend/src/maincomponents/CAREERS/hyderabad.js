import React from 'react';
import CareersContent from "../CAREERS/careersContent.json";
import { Link } from 'react-router-dom';

const Hyderabad = () => {
    const data = CareersContent[0];
    const hyd= CareersContent[3].hyderabadOpenings
    // console.log(hyd)
    const styles = `
      table { 
        width: 100%; 
        border-collapse: collapse;         
      }
      
      tr:nth-of-type(odd) { 
        background: #eee; 
      }
      tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      th { 
        background: #f9f9f9;
        font-weight: bold; 
      }
      td, th { 
        padding: 10px; 
        text-align: left; 
        min-width:80px;
        width:auto;
      }
      .table-responsive{
        border: 2px solid #0094ff;
      }
      .sendresumeBtn{
        width:120px;
      }
      .mail{
        background:#083460;
        font-size:21px;
        color:#fff;
        border-radius:50px;
        padding:10px;
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
        <div className='p-lg-5 p-md-3 p-2' style={{backgroundImage: `url(${data.currentopeningsBg})` , height:"auto"}}>
        <div className='container'>
            <h2 className='text-center p-4'>
                <span className='text-primary'>{data.Current}</span>&nbsp;
                <span className='text-danger'>{data.Openings}</span>
            </h2>
            <div className='table-responsive'>
               
                <table >
                    <thead>
                    <tr>
                        <th style={{minWidth:"30px"}} scope="col">{data.slno}</th>
                        <th style={{minWidth:"90px"}}>{data.Jobtype}</th>
                        <th style={{minWidth:"110px"}}>{data.Location}</th>
                        <th style={{minWidth:"200px"}}>{data.JobName}</th>
                        <th style={{minWidth:"240px"}}>{data.Skills}</th>
                        <th style={{minWidth:"100px"}}>{data.ExpYears}</th>
                        <th style={{minWidth:"140px"}}>{data.NoOfPositions}</th>
                        <th ></th>
                    </tr>
                    </thead>
                    <tbody>
                        {hyd.map((item, index)=>(
                            <tr>
                            <td>{item.slno}</td>
                            <td><img src={item.jobtype} alt="job type" width="40" height="40"/></td>
                            <td>{item.Location}</td>
                            <td style={{minWidth:"200px"}}>{item.JobName}</td>
                            <td style={{minWidth:"250px"}}>{item.Skills}</td>
                            <td>{item.Experience}</td>
                            <td>{item.NoofPositions}</td>
                            {/* <td><button className='btn btn-primary border-0 rounded sendresumeBtn'>{item.sendresume}</button></td> */}
                            <td> <Link to="mailto:info@infomericainc.com" className='btn btn-primary border-0 rounded sendresumeBtn'>{item.sendresume}</Link></td>
                        </tr>
                        ))}
                    
                    </tbody>
                </table>
              
            </div>
            <div className='d-md-flex justify-content-center p-3'>
                <p className='text-center p-2'>{data.formoredetailsmailuson}</p>
                <p className='text-center p-2 mail'>{data.mail}</p>
            </div>
        </div>
        </div>
        </>
    );
};

export default Hyderabad;
