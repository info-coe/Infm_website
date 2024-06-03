import React from 'react';

const CSRimplementationStrategy = ({data}) => {
    const data1=data[2].ImplementationStrategy
    return (
        <>
            {data1.map((item,i)=>(
                <div className='row'>
                <h6 className='col-md-5 text-primary '>{item.h}</h6>
                <p className='col-md-7'>{item.des}</p>
            </div>
            ))}
            
        </>
    );
};

export default CSRimplementationStrategy;