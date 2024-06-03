import React from 'react';

const CareersCurrentopeningsCard = ({data}) => {
    const styles=`
    .openingscard{
        width:30%;
        border-bottom:8px solid red;
    }
    @media screen and (max-width:767px){
        .openingscard{
            width:100%;
            margin-top:20px;
            margin-bottom:20px;
        }
    }
    `
    
    return (
        <>
        <style>{styles}</style>
        {data.map((item,i)=>(
            <div className='card openingscard p-2'>
                <div className='d-flex flex-wrap'>
                {item.list.map((li,i)=>(
                    <span className='border p-1 m-1' key={i}>{li}</span>
                ))}
                </div>
                <h6 className='text-center text-danger p-2'>{item.head}</h6>
                <p className='p-3'>{item.p1}</p>
            </div>
        ))}
           
        </>
    );
};

export default CareersCurrentopeningsCard;