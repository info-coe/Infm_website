
import React from 'react';

const Marquee = ({ content }) => {
  return (
    <div className="Marquee">
      <div className="Marquee-content">
        <div className="Marquee-tag">{ content }</div>
      </div>
    </div>
  );
};

export default Marquee;

