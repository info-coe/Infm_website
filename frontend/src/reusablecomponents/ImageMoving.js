import React from 'react'

function ImageMoving({image,sty}) {
  return (
    <div>
         <img
              src={image}
              className="img-fluid animate-image" 
              alt="no-display"
            
            />
    </div>
  )
}

export default ImageMoving