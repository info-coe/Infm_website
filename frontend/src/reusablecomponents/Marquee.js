import React from 'react';

const Marquee = ({ content }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {content}
      </div>
    </div>
  );
};

export default Marquee;
