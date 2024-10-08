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
            <div key={i} className='card slidecontentcard p-4' data-aos={item.aos} data-aos-once="true" data-aos-duration="1300">
            <img src={item.url} width={item.width} height={item.height} alt="gificons" />
            <h5>{item.name}</h5>
            <p style={{fontSize:"14px" , lineHeight:"28px"}}>{item.m1}</p>
            </div>
        ))}
           
        </>
    );
};

export default CareersSlideContent;