import React from 'react';

const CareersSlideContent = ({data}) => {
    const styles=`
    .slidecontentcard{
        border-bottom:8px solid red;
        width:47%;
    }
   
    @media screen and (max-width:767px){
        .slidecontentcard{
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
            <div className='card slidecontentcard p-4' data-aos={item.aos} data-aos-once="true" data-aos-duration="1300">
            <img src={item.url} width="60" height="60" alt="gificons" />
            <p>{item.m1}</p>
            </div>
        ))}
           
        </>
    );
};

export default CareersSlideContent;