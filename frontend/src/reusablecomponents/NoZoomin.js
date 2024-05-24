import React from 'react'

const NoZoomin = (props) => {
  return (
    <div className='container'>
         <h1 className='text-primary'>{props.heading}</h1>
            <h1 className='text-danger'>{props.heading2}</h1>
            <div>
                {props.content.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
    </div>
  )
}

export default NoZoomin