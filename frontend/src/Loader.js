// import React from 'react';
// import Typewriter from 'typewriter-effect';

// const Loader = () => {
//   const styles = {
//     loader: {
//       position: 'absolute',
//       top: '40%',
//       left: '40%',
//       textAlign: 'center',
//       fontSize: '50px',
//       backgroundColor: '#FE0000',
//       backgroundClip: 'text',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       animation: 'textclip 2s linear infinite',
//       whiteSpace: 'nowrap', // Ensures text doesn’t wrap and animation works smoothly
//     }
//   };

//   return (
//     <div style={styles.loader}>
//       <Typewriter
//         onInit={(typewriter) => {
//           typewriter
//             .typeString('INFOMERICA')
//             .pauseFor(700)
//             .deleteChars(10) // Adjusts the number of characters deleted in each step
//             .pauseFor(500)
//             .typeString('INFOMERICA')
//             .pauseFor(700)
//             .deleteChars(10) // Adjusts the number of characters deleted in each step
//             .pauseFor(500)
//             .typeString('INFOMERICA')
//             .pauseFor(700)
//             .deleteAll()
//             .pauseFor(500)
//             .start();
//         }}
//       />
//       <style>
//         {`
//           @keyframes textclip {
//             0% {
//               background-position: 0% center;
//             }
//             100% {
//               background-position: 100% center;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Loader;

// // Loader.js

// // import React, { useState, useEffect } from 'react';

// // const Loader = () => {
// //   const [animationState, setAnimationState] = useState('zoom-in');

// //   useEffect(() => {
// //     // After zooming in, switch to zoom-out after a delay
// //     const timeout1 = setTimeout(() => {
// //       setAnimationState('zoom-out');
// //     }, 1000);

// //     // After zooming out, switch back to zoom-in after another delay
// //     const timeout2 = setTimeout(() => {
// //       setAnimationState('zoom-in');
// //     }, 2000);

// //     // Clean up timeouts
// //     return () => {
// //       clearTimeout(timeout1);
// //       clearTimeout(timeout2);
// //     };
// //   }, []);

// //   return (
// //     <div className="loader-container">
// //       <div className={`loading-text ${animationState}`}>
// //         <span className='text-danger'>INFOMERICA</span>
// //       </div>
// //       <div className="loader"></div>
// //     </div>
// //   );
// // };

// // export default Loader;
// import React from 'react';
// import Typewriter from 'typewriter-effect';

// const Loader = () => {
//   const styles = {
//     loaderContainer: {
//       display: 'flex',
//       justifyContent: 'center', // Centers horizontally
//       alignItems: 'center', // Centers vertically
//       height: '100vh', // Full viewport height
//       // backgroundColor: '#000', // Optional: Background color for the loader container
//     },
//     loader: {
//       textAlign: 'center',
//       fontSize: '50px',
//       backgroundColor: '#FE0000',
//       backgroundClip: 'text',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       animation: 'textclip 2s linear infinite',
//       whiteSpace: 'nowrap', // Ensures text doesn’t wrap and animation works smoothly
//     }
//   };

//   return (
//     <div style={styles.loaderContainer}>
//       <div style={styles.loader}>
//         <Typewriter
//           onInit={(typewriter) => {
//             typewriter
//               .typeString('INFOMERICA')
//               .pauseFor(700)
//               .deleteChars(10) // Adjusts the number of characters deleted in each step
//               .pauseFor(500)
//               .typeString('INFOMERICA')
//               .pauseFor(700)
//               .deleteChars(10) // Adjusts the number of characters deleted in each step
//               .pauseFor(500)
//               .typeString('INFOMERICA')
//               .pauseFor(700)
//               .deleteAll()
//               .pauseFor(500)
//               .start();
//           }}
//         />
//       </div>
//       <style>
//         {`
//           @keyframes textclip {
//             0% {
//               background-position: 0% center;
//             }
//             100% {
//               background-position: 100% center;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Loader;

import React from 'react';
import Typewriter from 'typewriter-effect';

const Loader = () => {
  const styles = {
    loaderContainer: {
      display: 'flex',
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center', // Centers vertically
      height: '100vh', // Full viewport height
    },
    loader: {
      textAlign: 'center',
      backgroundColor: '#FE0000',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'textclip 2s linear infinite',
      whiteSpace: 'nowrap', // Ensures text doesn’t wrap and animation works smoothly
    }
  };

  return (
    <div style={styles.loaderContainer} className='loader-container'>
      <div style={styles.loader}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('INFOMERICA')
              .pauseFor(700)
              .deleteChars(10) // Adjusts the number of characters deleted in each step
              .pauseFor(500)
              .typeString('INFOMERICA')
              .pauseFor(700)
              .deleteChars(10) // Adjusts the number of characters deleted in each step
              .pauseFor(500)
              .typeString('INFOMERICA')
              .pauseFor(700)
              .deleteAll()
              .pauseFor(500)
              .start();
          }}
        />
      </div>
      <style>
        {`
          @keyframes textclip {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 100% center;
            }
          }

          /* Default font size for larger screens */
          .loader-container div {
            font-size: 50px;
          }

          /* Smaller font size for mobile devices */
          @media (max-width: 575.98px) {
            .loader-container div {
              font-size: 30px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
