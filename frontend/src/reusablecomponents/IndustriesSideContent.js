import React from 'react';
import { Link } from 'react-router-dom';

const IndustriesSideContent = ({data}) => {
    // console.log(data);
    return (
        <>
                   <h3><span className='text-primary'>{data.h1}</span>&nbsp;<span className='text-danger'>{data.h2}</span> </h3>
                    <p>{data.p1}</p>
                    <Link to={data.route}><button className='btn btn-primary'>{data.readmore}</button></Link>
        </>
    );
};

export default IndustriesSideContent;