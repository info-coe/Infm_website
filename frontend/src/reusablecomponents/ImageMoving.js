import React from 'react'

function ImageMoving({image}) {
  return (
    <div>
         <img
              src={image}
              className="img-fluid animate-image" 
              alt="no-display"
              width='70%'
            />
    </div>
  )
}

export default ImageMoving