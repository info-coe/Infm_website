import React from 'react'

const AdvantagesServices = (props) => {
  return (
    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-12">
      <div style={{ margin: '20px auto' }}> 
        <h3 className='text-success'>{props.heading}</h3>
        <div className='d-md-flex'>
            <div>
            {props.advantagesData.map((item,index)=>(
                <>
            <p className='fs-5'><i className={props.icon}></i>{item}</p>
            </>
        ))}
        </div>
        <div>
            {props.image ? (           
                 <img src='' alt='no-display' className='w-25 h-50'/>
          ):null}
            </div>
            </div>
      </div>
    </div>
  </div>
</div>  )
}

export default AdvantagesServices