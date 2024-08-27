import React from 'react';

const CSRimplementationStrategy = ({data}) => {
    const data1=data
    return (
        <>
            {data1.map((item,i)=>(
                <div className='row' key={i}>
                <h6 className='col-md-5 text-primary ' style={{fontSize:"14px"}}>{item.head}</h6>
                <p className='col-md-7' style={{fontSize:"14px"}}>{item.description}</p>
            </div>
            ))}
            
        </>
    );
};

export default CSRimplementationStrategy;