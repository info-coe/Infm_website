import React from 'react';

const CSRkeypillars = ({data}) => {
    // console.log(data[1].keypillars)
    const data1=data[1].keypillars
    return (
        <>
        {
            data1.map((item,i)=>(
                <div className='p-3'> 
                <h5 className='text-primary text-center m-2'>{item.head}</h5>
                {item.list.map((item,i)=>(
                    <p style={{lineHeight:'22px'}}><span className='text-danger'>{item.h}: </span>{item.des}</p>
                ))}
            </div>
            ))
        }
           
        </>
    );
};

export default CSRkeypillars;