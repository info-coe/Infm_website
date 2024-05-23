import React, { useState } from 'react';

function ToggleableCard({ title, content,initiallyExpanded }) {
    const [showAdditionalContent, setShowAdditionalContent] = useState(initiallyExpanded);
    console.log(title)
  const toggleAdditionalContent = () => {
    setShowAdditionalContent(!showAdditionalContent);
  };

  return (
    <div className="">
        
      <div className="card m-3" style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body">
          <div>
            <h2 className="fs-5">
              <span 
                onClick={toggleAdditionalContent} 
                style={{ cursor: 'pointer', color: 'blue' }}
              >
                {title}
              </span>
            </h2>
          </div>
          {showAdditionalContent && (
            <div style={{ marginTop: '20px' }}>
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleableCard;
