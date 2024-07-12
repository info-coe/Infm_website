// import React from 'react';

// const Loader = () => {
//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//       <p>Loading...</p>
//     </div>
//   );
// };

// export default Loader;


// Loader.js

// import React, { useState, useEffect } from 'react';

// const Loader = () => {
//   const [displayText, setDisplayText] = useState('');

//   useEffect(() => {
//     const text = 'INNFOMERICA';
//     let currentIndex = 0;
//     const interval = setInterval(() => {
//       setDisplayText((prevText) => prevText + text[currentIndex]);
//       currentIndex++;
//       if (currentIndex === text.length) {
//         clearInterval(interval);
//       }
//     }, 200); // Adjust the interval as needed

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="loader-container">
//       <div className="loader"></div>
//       <p>{displayText}</p>
//     </div>
//   );
// };

// export default Loader;


// Loader.js

import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [animationState, setAnimationState] = useState('zoom-in');

  useEffect(() => {
    // After zooming in, switch to zoom-out after a delay
    const timeout1 = setTimeout(() => {
      setAnimationState('zoom-out');
    }, 1000);

    // After zooming out, switch back to zoom-in after another delay
    const timeout2 = setTimeout(() => {
      setAnimationState('zoom-in');
    }, 2000);

    // Clean up timeouts
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="loader-container">
      <div className={`loading-text ${animationState}`}>
        <span className='text-danger'>INFOMERICA</span>
      </div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
